import THREE from 'three';
import OrganismRenderer from './models/organism-renderer';

export default class Scene extends THREE.Scene {

  renderOrganism(organism) {
    const renderer = new OrganismRenderer(organism);
    renderer.renderTo(this);
  }
}
