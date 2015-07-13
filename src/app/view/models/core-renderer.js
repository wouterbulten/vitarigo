import Box from '../objects/box';

export default class CoreRenderer extends Box {

  constructor(core) {
    super(...core.getDimensions(), core.getColor());

    this.castShadow = true;
    this.receiveShadow = false;

    this.position.x = 100 * Math.random() - 50;
    this.position.y = 100 * Math.random();
    this.position.z = 100 * Math.random() - 50;

    this.core = core;
  }

  /**
   * Update the representation of the core
   * @return {Core}
   */
  update() {
    const [width, height, depth] = this.core.getDimensions();

    this.scale.x = width;
    this.scale.y = height;
    this.scale.z = depth;

    this.color = this.core.getColor();

    return this;
  }
}
