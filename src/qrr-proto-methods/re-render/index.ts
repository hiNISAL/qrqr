/**
 * 重新渲染 和render不同的是
 * 
 * reRender会更新所有 changeList 里的内容 不会检测 changeList 中的changed属性
 * 
 * 也就是只要是应用过的配置 都会被应用一遍
 */
export default {
  methodName: 'render',
  value() {
    Object.values(this.changeList).forEach((item: any) => {
      this[item.method](item.args || {});
    });
  },
};
