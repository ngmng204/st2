Ext.define('sencha.store.DemoStore', {
  
  extend: 'Ext.data.Store',
  
  requires: ['sencha.model.DemoModel'],
  
  config: {
    model: 'sencha.model.DemoModel',
    autoLoad: true,
    storeId: 'DemoStore',
    pageSize: 1000
  }
});
