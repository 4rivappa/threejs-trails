// import './style.css';
//import * as THREE from './additionalFiles/three.js';
 import * as THREE from 'three';
// import * as THREE from './node_modules/three/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import * as THREE from 'https://unpkg.com/browse/three@0.97.0/build/three.module.js';
// import * as dat from 'dat.gui';
import { Camera, WebGLBufferRenderer } from 'three';

// const gui = new dat.GUI();

const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100);
const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0xffff00);

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);


const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

console.log(scene);

//////////////////////////////////////
const sizes = { 
    width: window.innerWidth,
    height: window.innerHeight
};
window.addEventListener('resize', function(){ 
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
///////////////////////////////////////


const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100);
camera.position.set(0, 0, 2);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


const clock = new THREE.Clock();

function animate(){ 
    const elapsedTime = clock.getElapsedTime();
    sphere.rotation.y = .5*elapsedTime;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}
animate();