import { setStyle } from '@/helpers/utils';
import { key } from '../config';

export default {
  value() {
    setStyle(this.el, {
      [key]: (typeof this[key] === 'number') ? `${this[key]}px` : this[key],
    });

    this.changeList[key].changed = false;
  },
};
