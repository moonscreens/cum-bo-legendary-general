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

	const despawn = (window.innerWidth / 2) * 1.1;

	for (let index = sceneEmoteArray.length - 1; index >= 0; index--) {
		const element = sceneEmoteArray[index];
		element.position.x += delta * 150 * (element.r2 / 2 + 0.5);
		if (element.position.x > despawn) {
			sceneEmoteArray.splice(index, 1);
			scene.remove(element);
		} else {
			const sin = Math.sin(element.position.x / 50 + element.r1 * Math.PI);
			element.position.y = sin * (10 + element.r2 * 10) + element.originPos.y;
			const sin2 = Math.sin(element.position.x / 50 + element.r1 * Math.PI + Math.PI / 2);
			element.rotation.z = sin2 * 0.25;
		}
	}

	wave_material.uniforms.time.value = performance.now() / 1000;

	cumBo.position.set(
		Math.sin(Date.now() / 5000 + Math.PI / 2) * 30,
		Math.sin(Date.now() / 4000) * 30,
		0,
	);
	cumBo.position.add(cumBo.originPos);
	cumBo.material.rotation = Math.sin(Date.now() / 11000) * 0.1;

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
	group.scale.setScalar(80);
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

const backgroundImage = new THREE.Sprite(new THREE.SpriteMaterial({
	map: new THREE.TextureLoader().load('/background.png'),
}))
backgroundImage.scale.x = 1920;
backgroundImage.scale.y = 1080;
backgroundImage.position.z = -50;
backgroundImage.material.map.colorSpace = THREE.SRGBColorSpace;
scene.add(backgroundImage);

// const startingSoonText = new THREE.Sprite(new THREE.SpriteMaterial({
// 	map: new THREE.TextureLoader().load('/starting soon.png'),
// 	opacity: 0.75,
// }))
// startingSoonText.scale.x = 1024;
// startingSoonText.scale.y = 256;
// startingSoonText.scale.multiplyScalar(0.7);
// startingSoonText.position.z = 45;
// startingSoonText.position.x = window.innerWidth / 2 - startingSoonText.scale.x / 2;
// startingSoonText.position.y = -(window.innerHeight / 2 - startingSoonText.scale.y / 3);
// startingSoonText.material.map.colorSpace = THREE.SRGBColorSpace;
// scene.add(startingSoonText);

const cumBo = new THREE.Sprite(new THREE.SpriteMaterial({
	map: new THREE.TextureLoader().load('/cumbo.png'),
}))
cumBo.scale.setScalar(700);
cumBo.position.z = 40;
cumBo.position.x = -600;
cumBo.position.y = 150;
cumBo.material.map.colorSpace = THREE.SRGBColorSpace;
scene.add(cumBo);
cumBo.originPos = cumBo.position.clone();

const wave_geometry = new THREE.PlaneGeometry(1, 1, 512, 1);
const wave_texture = new THREE.TextureLoader().load('/wave.png');
wave_texture.wrapS = THREE.RepeatWrapping;
wave_texture.minFilter = THREE.LinearFilter;
const wave_material = new THREE.ShaderMaterial({
	side: THREE.DoubleSide,
	transparent: true,
	uniforms: {
		time: { value: 0 },
		waveCount: { value: 40 },
		waveHeight: { value: 0.075 },
		wave_texture: { value: wave_texture },
	},

	vertexShader: /*glsl*/`
		uniform float time;
		uniform float waveCount;
		uniform float waveHeight;
		varying vec2 vUv;
		varying float waveOffset;
		void main() {
			vUv = uv;

			vec4 pos = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
			if (uv.y > 0.0) {
				float offset = instanceColor.x * 25.0 + (sin(instanceColor.x * 3.14 + time * 0.2) * 2.0);
				waveOffset = instanceColor.x;
				float distanceScale =instanceColor.x * 0.5 + 0.5;
				float wave = (uv.x * (waveCount / distanceScale)) + offset;
				float waveScale = waveHeight * distanceScale;
				pos.y += (sin(wave) + sin(instanceColor.x * 5.0 + time) * 0.25) * waveScale;
			}
			gl_Position = pos;

		}
	`,
	fragmentShader: /*glsl*/`
		uniform float time;
		uniform sampler2D wave_texture;
		uniform float waveCount;
		varying vec2 vUv;
		varying float waveOffset;

		void main() {
			gl_FragColor = texture2D(wave_texture,
				vec2(vUv.x * (waveCount/4.0) + time * 0.2 + waveOffset, vUv.y)
			);
		}
	`,
});

const wave_layer_count = 8;

const wave_instance = new THREE.InstancedMesh(wave_geometry, wave_material, wave_layer_count);
for (let i = 0; i < wave_layer_count; i++) {
	const p = i / (wave_layer_count - 1);
	console.log(p);
	const matrix = new THREE.Matrix4();
	const height = -0.5 - Math.pow(p, 3);
	matrix.setPosition(0, height, p);
	wave_instance.setMatrixAt(i, matrix);
	wave_instance.setColorAt(i, new THREE.Color(p, 0, 0));

	if (i < wave_layer_count - 2) {
		emoteSpawns.push({ pos: new THREE.Vector3(), index: p, height });
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
		spawn.pos.x = (-window.innerWidth / 2) * 1.1;
		spawn.pos.y = wave_instance.position.y + (spawn.height + 0.4) * wave_instance.scale.y;
	}

	wave_material.uniforms.waveCount.value = window.innerWidth * 0.015;
	wave_material.uniforms.waveCount.needsUpdate = true;


	wave_material.uniforms.waveHeight.value = 0.075 / (window.innerHeight / 1080);
	wave_material.uniforms.waveHeight.needsUpdate = true;

	wave_texture.repeat.x = wave_material.uniforms.waveCount * 2;
}
window.addEventListener('resize', waveResize);
waveResize();




const haikuContainer = document.querySelector('.haiku');
import { haikus } from './haikus.js';
let haikuIndex = -1;
const typingSpeed = 30;
async function haikuFunction() {
	while (haikuContainer.textContent.length > 0) {
		haikuContainer.textContent = haikuContainer.textContent.slice(0, -1);
		await new Promise(r => setTimeout(r, typingSpeed / 2));
	}

	haikuIndex++;
	if (haikuIndex >= haikus.length) haikuIndex = 0;

	const haiku = haikus[haikuIndex];
	haikuContainer.textContent = '';
	for (let i = 0; i < haiku.length; i++) {
		haikuContainer.textContent += haiku[i];
		await new Promise(r => setTimeout(r, typingSpeed));
	}
};

setInterval(haikuFunction, 15000);

haikuFunction();