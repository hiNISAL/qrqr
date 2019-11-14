import QRSupporter from './qr-generator';
import mount from './mount';

const Qrr = function(content: string) {
  const qr = new QRSupporter(content).setSize(666);

  // 主元素
  this.el = qr.table();

  // 二维码版本
  this.version = qr.version();

  // 背景色元素
  this.bgEl = document.createElement('el');

  // 表格元素
  this.tableEl = document.createElement('table');

  // 存放配置列表
  this.options = {};

  // 被动列表
  this.changeList = {};

  // 前景格子
  this.foreTds = [];

  // 背景格子
  this.backTds = [];

  // 表格的二维数组
  this.tdsArray = [];

  // 初始化
  this.init();
};

mount(Qrr);

export default Qrr;

/**
 * test code
 * 
 * 
 * 
 * 
 */

const qrrr = new Qrr('123');

document.body.append(qrrr.el);

console.log(qrrr);

(window as any).qrrr = qrrr;
