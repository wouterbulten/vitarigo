import THREE from 'three'
import Plane from './view/objects/plane';
import Ground from './models/environment/Ground';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xC8DDE0, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
document.body.appendChild( renderer.domElement );

const ground = new Ground();

scene.add(ground);

console.log(ground);


camera.position.x = -20;
camera.position.y = 30;
camera.position.z = 40;
camera.lookAt(new THREE.Vector3(0, 0, 0));

// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0x00ff00);
scene.add(ambientLight);

// add spotlight for the shadows
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-30, 60, 60);
spotLight.castShadow = true;
scene.add(spotLight);

function render() {
  requestAnimationFrame( render );

    /*cubes.forEach(function(c) {
        c.rotation.x += Math.random() * 0.01;
        c.rotation.y += Math.random() * 0.01;
    })*/

  renderer.render( scene, camera );
}
render();
/*




var groundGeom = new THREE.PlaneGeometry(100, 100, 4, 4);
var groundMesh = new THREE.Mesh(groundGeom, new THREE.MeshBasicMaterial({color: 0x2F305C}));
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.position.y = -20;
scene.add(groundMesh);

var material = new THREE.MeshLambertMaterial({color: 0x7777ff});

var cubes = [];
for(var i = 0; i < 1000; i++)
{
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    var cube = new THREE.Mesh( geometry, material );

    cube.position.x = Math.random() * 100 - 50;
    cube.position.y = Math.random() * 100 - 50;
    cube.position.z = Math.random() * 100 - 50;
    scene.add( cube );

    cubes.push(cube);
}


*/
