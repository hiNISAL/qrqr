import { rmSpace } from '@/helpers/utils';
import { $$, setStyle } from '@/helpers/utils';

export default {
  value() {
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

    tds.forEach((td) => {
      const bgColor = rmSpace(td.style.backgroundColor).toLocaleLowerCase();

      if (['rgb(255,255,255)', '#fff', '#ffffff'].includes(bgColor)) {
        td.style.background = 'transparent';
      }
    });
  },
  methodName: 'init',
};
