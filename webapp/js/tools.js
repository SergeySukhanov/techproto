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
};