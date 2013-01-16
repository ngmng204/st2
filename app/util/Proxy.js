
/** Get Current datetime of device**/
function getCurrentHour(){
	var date = new Date();							
	date1 = String(date);
	var datetime = date1.split(" ");
	var currentTime = datetime[4];						
	Sencha.app.currentDate = datetime[2];
	Sencha.app.currentMonth = date.getMonth() + 1;	
	Sencha.app.currentHour = currentTime.split(":")[0];	

}
/**
 * Get yesterday datetime
 * 
 */
function getYesterday(){
	date = new Date(new Date().setDate(new Date().getDate()-1));
	date1 = String(date);
	var datetime = date1.split(" ");
	var currentTime = datetime[4];						
	Sencha.app.yesterdayDate = datetime[2];
	Sencha.app.yesterdayMonth = date.getMonth() + 1;	
	Sencha.app.yesterdayHour = currentTime.split(":")[0];	
	
}
getYesterday();
function convertEventByDate(){
	for(var i= 0; i< arrayEvents.length; i++){
		var eventTime = arrayEvents[i].time;
		var eventDate = arrayEvents[i].date;
		var currentHour = getCurrentHour();	
	}
}
function getEventHour(time){
	var temp = time.split(":");
    return temp[0];    
}
function getEventDate(date){
	var temp = date.split("-");
    return temp[2];  
}
function getEventMonth(date){
	var temp = date.split("-");
	
	return parseInt(temp[1], 10);
}
function getAttributeOfEvent(xmlDoc, index, tagName) {
	
	var tag = xmlDoc.getElementsByTagName("event")[index].getElementsByTagName(tagName)[0].childNodes[0];
	if(tag != undefined) return tag.nodeValue;
	return null;
}

function formatDate(dateStr) {
	var temp = dateStr.split("-");
    date = new Date(temp[0], temp[1] - 1, temp[2]);		  
    var test = String(date);
    var test2 = test.split(" ");
    return test2[0] + " " + test2[1] + " "+ test2[2];
}


Ext.define('sencha.util.Proxy', {
	singleton: true,
	
	process: function(url, callback) {
		//<declare variables
		var    
		    pavilionStore = Ext.getStore('Pavilions');
			var pavilionModel;			
			var arrayEvents = new Array();
			var arrayMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var arrayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];			
			var dictionaryEvents = new Object();
			
			//</declare variables>
			getCurrentHour();
			var xmlhttp = new XMLHttpRequest();	
			
			xmlhttp.open("GET",Sencha.app.dataUrl2,false);
			xmlhttp.send(null);
			var xmlText = xmlhttp.responseText;
			if(xmlText != ""){
				//success load xml				
			}else{
				//failed to load xml content
				xmlhttp.open("GET",Sencha.app.dataUrl1,false);
				xmlhttp.send(null);
				var xmlText = xmlhttp.responseText;
				if(xmlText != ""){
					
				}else{
					alert("Could not load data!");
				}
			}
			var parser = new DOMParser();
		  	var xmlDoc = parser.parseFromString(xmlText,"text/xml");		  	
		  	var index = 0;  	
		  	for(var i = 0; i < xmlDoc.getElementsByTagName("event").length; i++) {  	
		  		
		  		/** Get event hour, event date, event month **/
		  		var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));
	  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
	  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  	
	  			
	  			/** End getting event hour event date and event month **/
	  			
	  			if(Sencha.app.currentMonth > eventMonth){
	  				//No need to add event into gigs, wait.....please check again
	  				if(Sencha.app.yesterdayMonth == 3 || Sencha.app.yesterdayMonth == 5 || Sencha.app.yesterdayMonth == 7 || Sencha.app.yesterdayMonth == 8 || Sencha.app.yesterdayMonth == 10 || Sencha.app.yesterdayMonth == 12){
	  					if(Sencha.app.yesterdayDate == 31){
	  						if(Sencha.app.currentHour > 6){
	  							//No add
	  							
	  						}else{
	  							//add
	  							var eventData = new Object();  				  			
			  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
			  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
			  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
			  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
			  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
			  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
			  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
			  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
			  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
			  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
			  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
			  	  			    eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
			  	  	  			pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
			  	  	  			pavilionStore.add(pavilionModel);
	  						}
	  					}
	  				}else{
	  					if(Sencha.app.yesterdayMonth == 4 || Sencha.app.yesterdayMonth == 6 || Sencha.app.yesterdayMonth == 9 ||Sencha.app.yesterdayMonth == 11 ){
	  						if(Sencha.app.yesterdayDate == 30){
	  							if(Sencha.app.currentHour > 6){
		  							//No add
		  							alert("A")
		  						}else{
		  							//add
		  							var eventData = new Object();  				  			
				  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
				  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
				  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
				  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
				  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
				  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
				  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
				  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
				  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
				  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
				  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
				  	  			 eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
				  	  	  			pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
				  	  	  			pavilionStore.add(pavilionModel);
		  						}
	  						}
	  					}else{
	  						if(Sencha.app.yesterdayMonth == 2){
	  							if(Sencha.app.yesterdayDate == 29){
		  							if(Sencha.app.currentHour > 6){
			  							//No add
			  							alert("A")
			  						}else{
			  							//add
			  							var eventData = new Object();  				  			
					  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
					  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
					  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
					  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
					  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
					  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
					  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
					  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
					  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
					  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
					  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
					  	  			 eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
					  	  				pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
					  	  				pavilionStore.add(pavilionModel);
			  						}
		  						}
	  						}
	  					}
	  				}
	  				
	  			}else{
	  				
	  				//maybe those events in current month, what should do?
	  				if(Sencha.app.currentMonth == eventMonth){
	  					if(eventDate > Sencha.app.currentDate){
	  						//ADD
	  						var eventData = new Object();  				  			
		  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
		  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
		  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
		  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
		  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
		  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
		  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
		  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
		  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
		  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
		  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
		  	  			 eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
		  	  				pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
		  	  	  			pavilionStore.add(pavilionModel);
	  					}else{
	  					//Not sure, need to check hour	  
	  						Sencha.app.yesterday = Sencha.app.currentDate - 1;	  					
		  					if(eventDate < Sencha.app.yesterday){
		  						//NO ADD
		  					}else{
		  						if(Sencha.app.currentHour < 6){
		  							//Add yesterday
		  							var eventData = new Object();  				  			
				  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
				  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
				  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
				  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
				  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
				  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
				  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
				  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
				  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
				  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
				  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
				  	  			 eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
				  	  	  			pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
				  	  	  			pavilionStore.add(pavilionModel);
		  						}else{
		  							//Add today
		  							if(eventDate == Sencha.app.currentDate){
		  								var eventData = new Object();  				  			
		  			  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
		  			  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
		  			  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
		  			  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
		  			  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
		  			  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
		  			  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
		  			  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
		  			  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
		  			  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
		  			  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
		  			  	  			 eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
		  			  	  	  			pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
		  			  	  	  			pavilionStore.add(pavilionModel);
		  							}
		  						}
		  						
		  					}
	  					}	  					
	  				}else{
	  					/**
	  					 *  That means all events in gigs are today's event with event's time is greater than 6:00am, and future's event
	  					 */
	  					var eventData = new Object();  				  			
	  		  			var eventHour = getEventHour(getAttributeOfEvent(xmlDoc, i, "time"));	  			
	  		  			var eventDate = getEventDate(getAttributeOfEvent(xmlDoc, i, "date"));
	  		  			var eventMonth = getEventMonth(getAttributeOfEvent(xmlDoc, i, "date"));  		  			
	  	  				eventData.eventID =  getAttributeOfEvent(xmlDoc, i, "eventID");
	  	  				eventData.name =  getAttributeOfEvent(xmlDoc, i, "name");
	  	  				eventData.time =  getAttributeOfEvent(xmlDoc, i, "time");
	  	  				eventData.dateInFormat =  formatDate(getAttributeOfEvent(xmlDoc, i, "date"));
	  	  				eventData.date = getAttributeOfEvent(xmlDoc, i, "date");
	  	  				eventData.info =  getAttributeOfEvent(xmlDoc, i, "info");	
	  	  				eventData.youtube =  getAttributeOfEvent(xmlDoc, i, "youtube");	
	  	  				eventData.admission =  getAttributeOfEvent(xmlDoc, i, "admission");	
	  	  			 eventData.ticket_link =  getAttributeOfEvent(xmlDoc, i, "ticket_link");	
	  	  	  			pavilionModel = Ext.create('Sencha.model.Pavilion', eventData);
	  	  	  			pavilionStore.add(pavilionModel);
	  				}
	  			}
	  			
  	  			
	  	}		
		callback();
	}
	
});

