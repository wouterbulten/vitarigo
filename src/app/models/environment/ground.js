import Plane from '../../view/objects/plane';

export default class Ground extends Plane {

  constructor(color = 0x5E3426) {
    super(100, 100, color);
  }
}
