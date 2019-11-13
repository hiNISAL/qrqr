import { key } from '../config';

const privateKey = `_${key}`;

export default {
  get() {
    return this[privateKey];
  },

  set(value) {
    this[privateKey] = value;
    this.changeList[key] = true;
  }
};
