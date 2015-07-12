import THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {

  constructor() {
    super(75, window.innerWidth / window.innerHeight, 1, 1000);

    this.position.x = -20;
    this.position.y = 30;
    this.position.z = 40;
    this.lookAt(new THREE.Vector3(0, 0, 0));
  }
}
