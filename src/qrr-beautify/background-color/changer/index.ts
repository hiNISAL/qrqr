import { rmSpace, $$, setStyle } from '@/helpers/utils';
import { key, method } from '../config';

export default {
  value() {
    setStyle(this.bgEl, {
      [key]: this[key],
    });

    this.changeList[key].changed = false;
  },
};
