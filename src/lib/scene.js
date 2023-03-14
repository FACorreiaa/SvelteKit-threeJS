import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial({
	color: 'red',
	metalness: 0.5
});

const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material);

scene.add(cube);
scene.add(cube2);

const directionalLight = new THREE.DirectionalLight(0x9090aa);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

let renderer;

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube2.rotation.x += 0.5;
	cube2.rotation.y += 0.5;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	resize();
	animate();
};

window.addEventListener('resize', resize);
