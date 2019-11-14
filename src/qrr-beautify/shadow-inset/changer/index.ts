import { setStyle } from '@/helpers/utils';
import { key } from '../config';

export default {
  value() {
    const tdsArray = this.tdsArray;

    for (let i = 0, cLen = tdsArray.length; i < cLen; i++) {
      const row = tdsArray[i];

      for (let j = 0, len = row.length; j < len; j++) {
        const td = tdsArray[i][j];

        // 不是码格子就跳过
        if (td.type !== 'fore') {
          continue;
        }

        const top = (tdsArray[i - 1] && tdsArray[i - 1][j]) || { type: 'back' };
        const right = tdsArray[i][j + 1] || { type: 'back' };
        const bottom = (tdsArray[i + 1] && tdsArray[i + 1][j]) || { type: 'back' };
        const left = tdsArray[i][j - 1] || { type: 'back' };

        const shadows: string[] = [];
        
        // inset 0px 15px 10px -15px #ffffff;
        if (top.type === 'back') {
          shadows.push('inset 0px 30px 15px -30px #ffffff');
        }

        if (right.type === 'back') {
          shadows.push('inset -30px 0px 15px -30px #ffffff');
        }

        if (bottom.type === 'back') {
          shadows.push('inset 0 -30px 15px -30px #ffffff');
        }

        if (left.type === 'back') {
          shadows.push('inset 30px 0 15px -30px #ffffff');
        }

        setStyle(td, {
          boxShadow: shadows.join(','),
        });
      }
    }
  },
};
