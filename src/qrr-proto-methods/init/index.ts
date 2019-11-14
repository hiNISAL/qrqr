import { rmSpace } from '@/helpers/utils';
import { $$, setStyle } from '@/helpers/utils';

/**
 * 初始化操作
 * 
 * 在第一次创建二维码或者重新创建二维码的时候会被调用
 */
export default {
  value() {
    // 保留表格
    this.tableEl = this.el;
    
    // 创建一个大容器
    const div = document.createElement('div');

    setStyle(div, {
      position: 'relative',
      display: 'inline-block',
    });

    // 背景层
    const bg = document.createElement('div');

    this.bgEl = bg;

    setStyle(bg, {
      position: 'absolute',
      zIndex: '-1',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    });

    div.appendChild(bg);
    div.appendChild(this.el);

    // 替换表格为大容器
    this.el = div;

    // 把白色表格转换成透明 之后用底层div实现背景色
    const tds = $$('td', this.el);

    const foreTds: HTMLTableDataCellElement[] = [];
    const backTds: HTMLTableDataCellElement[] = [];

    tds.forEach((td) => {
      const bgColor = rmSpace(td.style.backgroundColor).toLocaleLowerCase();

      if (['rgb(255,255,255)', '#fff', '#ffffff'].includes(bgColor)) {
        backTds.push(td);
        td.style.background = 'transparent';
        td.type = 'back';
      } else {
        foreTds.push(td);
        td.type = 'fore';
      }
    });

    this.foreTds = foreTds;
    this.backTds = backTds;

    // 构建表格二维数组
    const tdsArray: HTMLTableDataCellElement[][] = [];

    while(tds.length) {
      tdsArray.push([...tds.splice(0, this.version)]);
    }

    this.tdsArray = tdsArray;
  },
  methodName: 'init',
};
