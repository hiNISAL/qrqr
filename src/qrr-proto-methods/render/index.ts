/**
 * 根据changeList中的changed属性进行渲染
 * 
 * 在一个配置项在被设置的时候，会修改他的changed属性
 * 
 * 调用render会根据changed属性进行渲染
 * 
 * 如果有强制重新渲染的需求 可以调用 `reRender`
 */
export default {
  methodName: 'reRender',
  value() {
    Object.values(this.changeList).forEach((item: any) => {
      if (item.changed) {
        this[item.method](item.args || {});
      }
    });
  },
};
