import Core from './core';

export default class Organism {

  constructor({x = 0, y = 0, z = 0} = {}, maxHeight = 100, maxWidth = 100) {
    this.position = {x, y, z};
    this.maxHeight = maxHeight;
    this.maxWidth = maxWidth;

    this.container = new Array(maxHeight).fill(0).map(() => {
      return new Array(maxWidth).fill(0).map(() => {
        return new Array(maxWidth);
      });
    });
  }

  addPart(element, height, row, column) {
    this.container[height][row][column] = element;
  }

  getPosition() {
    return this.position;
  }
}
