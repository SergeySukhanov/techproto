/**
 * Created by VSolomonova on 23.03.2016.
 */
var CurrentItem = Ractive.extend({
    el:"#wrapper",
    adaptors:["Backbone"],
    magic:true,
    data: {

    },
    complete: function(){
        console.log("currentItem page");
        console.log(this.get());
    }
});