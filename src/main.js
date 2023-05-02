import TwitchChat from "twitch-chat-emotes-threejs";
import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module'
import "./style.css";
import config from "./config";

/*
** connect to twitch chat
*/

// a default array of twitch channels to join
let channels = ['moonmoon'];

// the following few lines of code will allow you to add ?channels=channel1,channel2,channel3 to the URL in order to override the default array of channels
const query_vars = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	query_vars[key] = value;
});

if (query_vars.channels || query_vars.channel) {
	const temp = query_vars.channels || query_vars.channel;
	channels = temp.split(',');
}

let stats = false;
if (query_vars.stats) {
	stats = new Stats();
	stats.showPanel(1);
	document.body.appendChild(stats.dom);
}

const ChatInstance = new TwitchChat({
	materialType: THREE.MeshBasicMaterial,

	// Passed to material options
	materialOptions: {
		transparent: true,
	},

	textureHook: (texture) => {
		//fix emotes looking washed out on new THREE.js versions
		texture.colorSpace = THREE.SRGBColorSpace;

		//give a nice pixelated look when emotes are scaled up, but not down
		texture.magFilter = THREE.NearestFilter;
	},

	channels,
	maximumEmoteLimit: 3,
})

/*
** Initiate ThreejS scene
*/

const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
camera.position.z = 50;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

function resize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.left = -window.innerWidth / 2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = -window.innerHeight / 2;

	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('resize', resize);
	if (stats) document.body.appendChild(stats.dom);
	document.body.appendChild(renderer.domElement);
	resize();
	draw();
})

/*
** Draw loop
*/
let lastFrame = performance.now();
function draw() {
	if (stats) stats.begin();
	requestAnimationFrame(draw);
	const delta = Math.min(1, Math.max(0, (performance.now() - lastFrame) / 1000));
	lastFrame = performance.now();

	for (let index = sceneEmoteArray.length - 1; index >= 0; index--) {
		const element = sceneEmoteArray[index];
		element.position.x += delta * (window.innerWidth / 10) * (element.r2 / 2 + 0.5);
		if (element.position.x > window.innerWidth / 2) {
			sceneEmoteArray.splice(index, 1);
			scene.remove(element);
		} else {
			const sin = Math.sin(element.position.x / 50 + element.r1 * Math.PI);
			element.position.y =  sin * (10 + element.r2 * 10) + element.originPos.y;
			const sin2 = Math.sin(element.position.x / 50 + element.r1 * Math.PI + Math.PI / 2);
			element.rotation.z = sin2 * 0.25;
		}
	}

	wave_material.uniforms.time.value = performance.now() / 1000;

	renderer.render(scene, camera);
	if (stats) stats.end();
};


/*
** Handle Twitch Chat Emotes
*/
const sceneEmoteArray = [];
const emoteSpawns = [];
const spawnEmote = (emotes) => {
	//prevent lag caused by emote buildup when you tab out from the page for a while
	if (performance.now() - lastFrame > 1000) return;

	const group = new THREE.Group();
	group.lifespan = 5000;
	group.timestamp = Date.now();

	let i = 0;
	emotes.forEach((emote) => {
		const sprite = new THREE.Sprite(emote.material);
		sprite.position.x = i;
		group.add(sprite);
		i++;
	})


	group.position.copy(emoteSpawns[Math.floor(Math.random() * emoteSpawns.length)].pos);
	group.originPos = group.position.clone();
	group.scale.setScalar(64);
	group.r1 = Math.random();
	group.r2 = Math.random();

	scene.add(group);
	sceneEmoteArray.push(group);
};

ChatInstance.listen(spawnEmote);


// spawn some fake emotes for testing purposes
// const placeholder_mats = [
// 	new THREE.MeshBasicMaterial({ color: 0xff5555 }),
// 	new THREE.MeshBasicMaterial({ color: 0x55ff55 }),
// 	new THREE.MeshBasicMaterial({ color: 0x5555ff }),
// ]
// setInterval(() => {
// 	spawnEmote([{
// 		material: placeholder_mats[Math.floor(Math.random() * placeholder_mats.length)]
// 	}]);
// }, 100);


/*
** setup scene decorations
*/
scene.background = new THREE.Color(config.colors.paper);

const wave_geometry = new THREE.PlaneGeometry(1, 1, 256, 1);
const wave_material = new THREE.ShaderMaterial({
	side: THREE.DoubleSide,
	uniforms: {
		time: { value: 0 },
		waveCount: { value: 40 },
		wave_texture: { value: new THREE.TextureLoader().load('/wave.png') },
	},
	
	vertexShader: /*glsl*/`
		uniform float time;
		uniform float waveCount;
		varying vec2 vUv;
		void main() {
			vUv = uv;

			vec4 pos = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
			if (uv.y > 0.0) {
				float offset = instanceColor.x * 25.0 + (sin(instanceColor.x * 3.14 + time * 0.2) * 2.0);

				float distanceScale = max(instanceColor.x * 0.75 + 0.25, 0.1);
				float wave = (uv.x * (waveCount / distanceScale)) + time * 1.0 + offset;

				float waveScale = 0.075 * distanceScale;
				pos.y += (sin(wave) + sin(instanceColor.x * 5.0 + time) * 0.25) * waveScale;
				pos.x += cos(wave) * 0.5 * waveScale;
			}
			gl_Position = pos;

		}
	`,
	fragmentShader: /*glsl*/`
		uniform float time;
		uniform sampler2D wave_texture;
		varying vec2 vUv;

		void main() {
			gl_FragColor = texture2D(wave_texture, vUv);
		}
	`,
});

const wave_layer_count = 8;

const wave_instance = new THREE.InstancedMesh(wave_geometry, wave_material, wave_layer_count);
for (let i = 0; i < wave_layer_count; i++) {
	const p = i / (wave_layer_count-1);
	console.log(p);
	const matrix = new THREE.Matrix4();
	const height = -Math.pow(p, 2) * 1.5;
	matrix.setPosition(0, height, p);
	wave_instance.setMatrixAt(i, matrix);
	wave_instance.setColorAt(i, new THREE.Color(p, 0, 0));

	if (i < wave_layer_count - 2) {
		emoteSpawns.push({pos: new THREE.Vector3(), index: p, height});
	}
}
wave_instance.frustumCulled = false;
wave_instance.instanceColor.needsUpdate = true;

scene.add(wave_instance);

function waveResize() {
	wave_instance.scale.set(window.innerWidth * 1.1, window.innerHeight / 4, 50);
	wave_instance.position.y = -window.innerHeight / 5;

	for (let i = 0; i < emoteSpawns.length; i++) {
		const spawn = emoteSpawns[i];
		spawn.pos.z = spawn.index * 50 + 0.01;
		spawn.pos.x = -window.innerWidth / 2;
		spawn.pos.y = wave_instance.position.y + (spawn.height + 0.35) * wave_instance.scale.y;
	}

	wave_material.uniforms.waveCount.value = window.innerWidth / 70;
	wave_material.uniforms.waveCount.needsUpdate = true;
}
window.addEventListener('resize', waveResize);
waveResize();