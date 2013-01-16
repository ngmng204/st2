Ext.define('sencha.model.XmlModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string' },
            { name: 'artist', type: 'string' },
            { name: 'duration', type: 'string' },
            { name: 'thumb_url', type: 'string' }
        ]
    },
    setUrl: function(data) {
    	
    	console.log("=====");
    	console.log(data)
    	var script = document.createElement("script");
    	var thumb_url = data.thumb_url;
    	console.log(thumb_url)
        script.setAttribute("src",
           "http://src.sencha.io/data.setDataUrl-"+data.id+"/" +
           thumb_url
        );
        script.setAttribute("type","text/javascript");
        document.head.appendChild(script);
    }
});
function setDataUrl(id, dataUrl) {
	console.log(document.getElementById(id))
    document.getElementById(id).src = dataUrl;
	console.log(document.getElementById(id))
 };