export default {
  methodName: 'render',
  value() {
    Object.values(this.changeList).forEach((item: any) => {
      if (item.changed) {
        console.log(item.method)
        this[item.method](item.args || {});
      }
    });
  },
};
