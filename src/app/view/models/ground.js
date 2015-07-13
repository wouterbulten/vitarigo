import Plane from '../objects/plane';

export default class Ground extends Plane {

  constructor(color = 0x5E3426) {
    super(1000, 1000, color);

    this.receiveShadow = true;
  }
}
