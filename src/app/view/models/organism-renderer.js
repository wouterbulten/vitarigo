import CoreRenderer from './core-renderer';

export default class OrganismRenderer {
  constructor(organism) {
    this.organism = organism;
    this.voxelSize = 10;
  }

  renderTo(scene) {
    this._addParts(scene);
  }

  _addParts(scene) {
    this.organism.container.forEach((level, x) => {
      level.forEach((row, y) => {
        row.forEach((part, z) => {
          const renderer = new CoreRenderer(part, x, y, z, this.voxelSize);

          scene.add(renderer);
        });
      });
    });
  }
}
