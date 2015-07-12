import THREE from 'three';

export default class Plane extends THREE.Mesh {

  constructor(height, width, color) {
    super(new THREE.PlaneGeometry(height, width, 1, 1), new THREE.MeshBasicMaterial({color}));

    this.rotation.x = -Math.PI / 2;
    this.position.y = 0;
  }
}
