Ext.define('sencha.model.DemoModel', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
        { name: 'ID', type: 'int' }, // Every model must start with an id of type int
        { name: 'Data', type: 'string' }, // bools, floats, objects and arrays also supported
     
    ],
    
    
    
  }
  
});