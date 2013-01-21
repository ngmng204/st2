Ext.define('sencha.view.CardView', {
           extend: 'Ext.Panel',
           xtype: 'cardview',
           config: {
               layout: {
               type: 'card'
               },
               items: [
                       {
                            xtype: 'navigationview'
                       },{
                            xtype: 'productcontainerview'
                       }
               ]
           }
           
});