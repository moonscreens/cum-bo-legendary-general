import TwitchChat from "twitch-chat-emotes-threejs";
import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module'
import "./style.css";

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
	// If using planes, consider using MeshBasicMaterial instead of SpriteMaterial
	materialType: THREE.SpriteMaterial,

	// Passed to material options
	materialOptions: {
		transparent: true,
	},

	textureHook: (texture) => {
		//fix emotes looking washed out on new THREE.js versions
		texture.encoding = THREE.sRGBEncoding;

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
		element.position.addScaledVector(element.velocity, delta * (window.innerWidth / 10));
		if (element.timestamp + element.lifespan < Date.now()) {
			sceneEmoteArray.splice(index, 1);
			scene.remove(element);
		} else {
			element.update();
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

	// Set velocity to a random normalized value
	group.velocity = new THREE.Vector3(
		Math.random() * 2 + 0.5,
		(Math.random() - 0.5) * 2,
		0
	);
	group.velocity.normalize();

	group.update = () => { // called every frame
		const max_size = window.innerHeight / 100;
		let progress = (Date.now() - group.timestamp) / group.lifespan;
		if (progress < 0.25) { // grow to full size in first quarter
			group.scale.setScalar(progress * 4 * max_size);
		} else if (progress > 0.75) { // shrink to nothing in last quarter
			group.scale.setScalar((1 - progress) * 4 * max_size);
		} else { // maintain full size in middle
			group.scale.setScalar(max_size);
		}
	}

	scene.add(group);
	sceneEmoteArray.push(group);
};

ChatInstance.listen(spawnEmote);


// spawn some fake emotes for testing purposes
const placeholder_mats = [
	new THREE.SpriteMaterial({ color: 0xff4444 }),
	new THREE.SpriteMaterial({ color: 0x44ff44 }),
	new THREE.SpriteMaterial({ color: 0x4444ff }),
]
setInterval(() => {
	spawnEmote([{
		material: placeholder_mats[Math.floor(Math.random() * placeholder_mats.length)]
	}]);
}, 1000);


/*
** setup scene decorations
*/
scene.background = new THREE.Color(0xf5c084);

const wave_geometry = new THREE.PlaneGeometry(1, 1, 256, 1);
const wave_material = new THREE.ShaderMaterial({
	uniforms: {
		time: { value: 0 },
	},
	vertexShader: /*glsl*/`
		uniform float time;
		varying vec2 vUv;
		void main() {
			vUv = uv;

			vec3 pos = position;
			if (vUv.y > 0.0) {
				float offset = instanceColor.x * 25.0 + (sin(instanceColor.x * 3.14 + time * 0.5) * 2.0);
				float wave = sin(vUv.x * 40.0 + time * 2.0 + offset);
				pos.y += wave * 0.05;
				pos.x -= sin(wave * 0.2) * 0.05;
			}
			gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);

		}
	`,
	fragmentShader: /*glsl*/`
		uniform float time;
		varying vec2 vUv;
		void main() {
			if (vUv.y > 0.99) {
				gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
			} else {
				gl_FragColor = vec4(
					0.961 * (vUv.y * 0.5 + 0.5),
					0.752 * (vUv.y * 0.5 + 0.5),
					0.517 * (vUv.y * 0.5 + 0.5),
					1.0
				);
			}
		}
	`,
});

const wave_count = 10;

const wave_instance = new THREE.InstancedMesh(wave_geometry, wave_material, wave_count);
for (let i = 0; i < wave_count; i++) {
	const p = i / wave_count;
	const matrix = new THREE.Matrix4();
	matrix.setPosition(0, -p * 1.5, p);
	wave_instance.setMatrixAt(i, matrix);
	wave_instance.setColorAt(i, new THREE.Color(p, 0, 0));
}
wave_instance.frustumCulled = false;
wave_instance.instanceColor.needsUpdate = true;

scene.add(wave_instance);

function waveResize() {
	wave_instance.scale.set(window.innerWidth * 1.25, window.innerHeight / 3, 50);
	wave_instance.position.y = -window.innerHeight / 7;
}
window.addEventListener('resize', waveResize);
waveResize();