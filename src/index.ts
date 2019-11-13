import QRSupporter from './qr-generator';
import { backgroundColor } from './QrrPrototypes';

const Qrr = function(content: string) {
  this.el = new QRSupporter(content).setSize(256).table();

  this._backgroundColor = 'white';

  this.changeList = {
    backgroundColor: false,
  };
};

Object.defineProperty(Qrr.prototype, backgroundColor.name, backgroundColor.setter);

const qrrr = new Qrr('123');

document.body.append(qrrr.el);

console.log(qrrr);

(window as any).qrrr = qrrr;

export default Qrr;
