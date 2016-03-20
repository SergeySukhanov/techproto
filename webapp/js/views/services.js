/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/19/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var Services = Ractive.extend({
    el:"#wrapper",
    adaptors:["Backbone"],
    magic:true,
    complete:function(){
        var ins = this;

        ins.on({
            details:function(event){
                console.log(event);
                var details = event.context.details;
                ins.set("currentDetails", details);
            },

            currentTime:function(event, type){
                console.log(event);
                var dateObj = new Date();
                var currentDetails = ins.get("currentDetails");
                var services = ins.get("services");
                var date = dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
                var time = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();

                event.context.time = time;


                switch(type){
                    case "serviceType":(function(){

                    })();
                        break;
                    case "triggerType":(function(){
                        if(event.context.type !== "default"){

                        }
                    })();
                        break;
                }
            }
        });
    }
});