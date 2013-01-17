Ext.define('sencha.model.AcidModel', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
        { name: 'id', type: 'int' }, // Every model must start with an id of type int
        { name: 'acid_name', type: 'string' }, // bools, floats, objects and arrays also supported
     
    ],
    
    
    
  }
  
});