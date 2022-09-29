import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import * as dat from 'dat.gui'

// const gui = new dat.GUI()

const canvas = document.getElementById('canvas');
// canvas.getContext('2d').fillStyle ='black';
// canvas.getContext('2d').beginPath();
// canvas.getContext('2d').arc(20, 30, 5, 0, Math.PI*2);
// canvas.getContext('2d').fill();

// const canvas2 = document.getElementById('canvas2');




//  const scene = new THREE.Scene()
// // const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
// // const material = new THREE.MeshBasicMaterial()
// // material.color = new THREE.Color(0xff0000)

// // const sphere = new THREE.Mesh(geometry,material)
// // scene.add(sphere)

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)


// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true





const loader = new GLTFLoader();
loader.load('../assets/stoneEntrance.glb', function ( glb ) {
    console.log(glb);
    // scene.add( gltf.scene );
    // console.log(gltf.scene);
}, undefined, function ( error ) {
	// console.error( error );
} );

const fbxLoader = new FBXLoader();
fbxLoader.load('../src/stoneEntrance.fbx', function(fbx){ 
    console.log(fbx); 
}, undefined,  function(e){ 
    console.log(e);
});

// loader.load( 'models/fbx/myModel.fbx', function ( object ) {
//     scene.add( object );
// }, undefined, function ( e ) {
//   console.error( e );
// } );






// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// const clock = new THREE.Clock()


// function animate(){ 
//     const elapsedTime = clock.getElapsedTime()

//     sphere.rotation.y = .5 * elapsedTime
//     renderer.render(scene, camera)
//     window.requestAnimationFrame(animate)
// }
// animate();