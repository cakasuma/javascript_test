console.log('Hello World')
var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');

ws.onopen = function(evt) {
    ws.send(JSON.stringify({ticks:'R_100'}));
    console.log(evt)
};

ws.onmessage = function(msg) {
    
   var data = JSON.parse(msg.data);
   console.log('ticks update: %o', data);
};