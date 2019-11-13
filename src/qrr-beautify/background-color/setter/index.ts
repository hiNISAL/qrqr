import { key, method } from '../config';

export default {
  get() {
    return this.options[key];
  },

  set(value) {
    this.options[key] = value;

    if (!this.changeList[key]) {
      this.changeList[key] = {
        method,
        changed: true,
      };
    }

    this.changeList[key].changed = true;
  }
};
