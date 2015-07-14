import Box from '../objects/box';

export default class CoreRenderer extends Box {

  constructor(core, x, y, z, voxelSize) {
    const dimensions = core.getDimensions();
    const scale = dimensions.map((d) => d * voxelSize);

    super(...scale, core.getColor());

    this.dimensions = {x: dimensions[0], y: dimensions[1], z: dimensions[2]};

    this.castShadow = true;
    this.receiveShadow = false;

    this.position.x = (x + ((1 - this.dimensions.x) * 0.5)) * voxelSize;
    this.position.y = (y + ((1 - this.dimensions.y) * 0.5)) * voxelSize;
    this.position.z = (z + ((1 - this.dimensions.z) * 0.5)) * voxelSize;

    this.core = core;
  }

  /**
   * Update the representation of the core
   * @return {Core}
   */
  update() {
    /*const [width, height, depth] = this.core.getDimensions();

    this.scale.x = width;
    this.scale.y = height;
    this.scale.z = depth;

    this.color = this.core.getColor();*/

    return this;
  }
}
