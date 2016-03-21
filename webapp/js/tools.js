/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/19/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var tools = {
    resize:function(){
        var bodyHeight = $("body").outerHeight();

        $("#wrapper").css({
            height:bodyHeight
        });
        $("#aside").css({
            height:bodyHeight
        });
        $("#main-section").css({
            height:bodyHeight
        });

        var elems = $(".top-area");
        var height = 0;
        for(var i=0; i<elems.length; i++){
            height += $(elems[i]).outerHeight();
        }

        $(".list-services").css({
            height:bodyHeight - height
        });

        console.log(height);
    },

    loadTemplate:function(name, callback){

        if(Config.textTemplates[name]){
            callback(Config.textTemplates[name]);
        }else{
            $.ajax({
                url:"../templates/" + name + ".html",
                type:"GET",
                dataType:'html'
            }).then(function(tmpl){
                Config.textTemplates[name] = tmpl;
                callback(tmpl);

            })
        }
    },

    clock:function(type, ins){
        if(type === "error"){
            var data;
            var seconds = 0;
            var minutes = 0;
            var hours = 0;
            data = hours + " часов " + minutes + " минут " + seconds + " секунд";
            ins.set("currentDetails.process.result.time", data);
            Config.intervals.first = setInterval(function(){
                seconds++;
                if(seconds > 59){
                    seconds = 0;
                    minutes++;
                }

                if(minutes > 59){
                    minutes = 0;
                    hours++;
                }

                data = hours + " часов " + minutes + " минут " + seconds + " секунд";
                ins.set("currentDetails.process.result.time", data);

            }, 1000);
        }else if(type === "warning" || type === "complete"){
            clearInterval(Config.intervals.first);
        }
    }
};