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
        var triggers = ins.get("currentDetails.process.triggers");
        tools.resize();
        ins.on({
            saveData: function() {
                console.log(JSON.parse(JSON.stringify(ins.get())));
                console.log("saving...");
                //var obj = JSON.parse(JSON.stringify(ins.get("services").models));
                //$.ajax({
                //    url:"/save/states",
                //    type: "POST",
                //    data: {data: obj}
                //});
            },
            details:function(event){
                console.log(event);
                var details = event.context.details;
                    triggers = details.process.triggers;

                ins.set("currentDetails", details);
            },

            currentTime:function(event, type){
                console.log(event);
                var dateObj = new Date();
                var currentDetails = ins.get("currentDetails");
                var services = ins.get("services");
                var date = dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
                var time = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
                var currentService = services.models[event.node.attributes['data-id'].value];

                var types = services.models[event.node.attributes['data-id'].value].get("types");

                var currentId = currentDetails.attributes.id;
                var models = ins.get("states").models;
                for(var i = 0; i < models.length; i++) {
                    if (models[i].id == currentId) {
                        ins.get("states").models[i].set({"services": services});
                    }
                }
                console.log(ins.get());


                types.forEach(function(elem, index){
                    elem.time = null;
                });

                var obj = JSON.parse(JSON.stringify(ins.get("states")));
                $.ajax({
                    url:"/save/states",
                    type: "POST",
                    data: {data: obj}
                });

                event.context.time = time;


                switch(type){
                    case "serviceType":(function(){

                    })();
                        break;
                    case "triggerType":(function(){
                        switch(event.context.type){
                            case "default":(function(){

                            })();
                                break;
                            case "error":(function(){
                                tools.clock("error", ins);

                            })();
                                break;
                            case "warning":(function(){
                                tools.clock("warning", ins);
                            })();
                                break;
                            case "complete":(function(){
                                tools.clock("warning", ins);
                            })();
                                break;
                        }
                    })();
                        break;
                }
            }
        });
    }
});