export function getDefaultSetter(key, method) {
  return {
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
};
