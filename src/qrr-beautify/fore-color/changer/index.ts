import { setStyle } from '@/helpers/utils';
import { key } from '../config';

export default {
  value() {
    this.foreTds.forEach((td) => {
      setStyle(td, {
        backgroundColor: this[key],
      });
    });

    this.changeList[key].changed = false;
  },
};
