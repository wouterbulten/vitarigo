import Ground from './view/models/ground';
import Organism from './models/organism';
import OrganismRenderer from './view/models/organism-renderer';
import Core from './models/Core';
import Axon from './models/Axon';
import AxonRenderer from './view/models/axon-renderer';
import Camera from './view/ui/camera';
import Scene from './view/scene';
import OrbitControls from './view/ui/orbit-control';

import THREE from 'three';

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
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

const organism = new Organism();

organism.addPart(new Core(), 1, 0, 0);
organism.addPart(new Core(), 2, 0, 0);
organism.addPart(new Core(), 1, 1, 0);

const organismRenderer = new OrganismRenderer(organism);

for (let i = 0; i < 100; i++) {
  organism.addPart(new Core(), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
}

organismRenderer.renderTo(scene);

const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;
shadowLight.shadowDarkness = 0.2;

const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
backLight.position.set(-100, 200, 50);
backLight.shadowDarkness = .1;
backLight.castShadow = true;

scene.add(backLight);
scene.add(light);
scene.add(shadowLight);

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
