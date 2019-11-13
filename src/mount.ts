import * as Beautify from './qrr-beautify';
import * as Methods from './qrr-proto-methods';

export default (Qrr) => {
  for (const v of Object.values(Beautify)) {
    Object.defineProperty(Qrr.prototype, v.name, v.setter);
    Object.defineProperty(Qrr.prototype, v.method, v.changer);
  }

  for (const v of Object.values(Methods)) {
    Object.defineProperty(Qrr.prototype, v.methodName, v);
  }
};
