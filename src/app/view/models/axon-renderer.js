import Box from '../objects/box';

export default class AxonRenderer extends Box {
  constructor(axon) {
    super(...axon.getDimensions(), axon.getColor());

    this.castShadow = true;
    this.receiveShadow = false;

    this.position.x = 100 * Math.random() - 50;
    this.position.y = 100 * Math.random();
    this.position.z = 100 * Math.random() - 50;

    this.axon = axon;
  }

  /**
   * Update the representation of the core
   * @return {Core}
   */
  update() {
    const [width, height, depth] = this.axon.getDimensions();

    this.scale.x = width;
    this.scale.y = height;
    this.scale.z = depth;

    this.color = this.axon.getColor();

    return this;
  }
}
