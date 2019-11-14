import { setStyle } from '@/helpers/utils';
import { key } from '../config';

export default {
  value() {
    setStyle(this.tableEl, {
      filter: `drop-shadow(${this[key]})`,
    });

    this.changeList[key].changed = false;
  },
};
