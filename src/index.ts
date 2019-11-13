import QRSupporter from './qr-generator';
import mount from './mount';

const Qrr = function(content: string) {
  // 主元素
  this.el = new QRSupporter(content).setSize(256).table();

  // 背景色元素
  this.bgEl = document.createElement('el');

  // 存放配置列表
  this.options = {};

  // 被动列表
  this.changeList = {};

  // 初始化
  this.init();
};

mount(Qrr);

export default Qrr;

/**
 * 
 * 
 * 
 * 
 * 
 */

const qrrr = new Qrr('123');

document.body.append(qrrr.el);

console.log(qrrr);

(window as any).qrrr = qrrr;
