import Ground from './models/environment/ground';
import Core from './models/Core';
import CoreRenderer from './view/core-renderer';
import Camera from './view/camera';
import Scene from './view/scene';
import OrbitControls from './view/control/orbit-control';

import THREE from 'three';

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
renderer.setClearColor(new THREE.Color(0xC8DDE0, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
document.body.appendChild( renderer.domElement );

const scene = new Scene();
const camera = new Camera();

const controls = new OrbitControls(camera, renderer.domElement);

const ground = new Ground();
scene.add(ground);

const core = new Core();
const box = new CoreRenderer(core);
scene.add(box);

// add subtle ambient lighting
const ambientLight = new THREE.AmbientLight(0x111111);
scene.add(ambientLight);

// add spotlight for the shadows
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-30, 60, 60);
spotLight.castShadow = true;
scene.add(spotLight);


function render() {
  requestAnimationFrame( render );

  renderer.render( scene, camera );
}
render();
/*




let groundGeom = new THREE.PlaneGeometry(100, 100, 4, 4);
let groundMesh = new THREE.Mesh(groundGeom, new THREE.MeshBasicMaterial({color: 0x2F305C}));
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.position.y = -20;
scene.add(groundMesh);

let material = new THREE.MeshLambertMaterial({color: 0x7777ff});

let cubes = [];
for(let i = 0; i < 1000; i++)
{
    let geometry = new THREE.BoxGeometry( 1, 1, 1 );

    let cube = new THREE.Mesh( geometry, material );

    cube.position.x = Math.random() * 100 - 50;
    cube.position.y = Math.random() * 100 - 50;
    cube.position.z = Math.random() * 100 - 50;
    scene.add( cube );

    cubes.push(cube);
}


*/
