/**
 * Created by VSolomonova on 25.03.2016.
 */
(function () {
    if ("WebSocket" in window)
    {
        alert("WebSocket is supported by your Browser!");

        // Let us open a web socket
        var ws = new WebSocket("ws://localhost:1234/");

        ws.onopen = function()
        {
            // Web Socket is connected, send data using send()
            ws.send("Message to send");
            alert("Message is sent...");
        };

        ws.onmessage = function (evt)
        {
            //var received_msg = evt.data;
            console.log(evt);
            alert("Message is received...");
        };

        //ws.onclose = function()
        //{
        //    // websocket is closed.
        //    alert("Connection is closed...");
        //};
    }

    else
    {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
})();