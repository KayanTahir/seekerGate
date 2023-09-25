var http = require("http");
var APIKey = '6aa19b26151b66c20a34c4c09a3259383eb3a3b';
var receiver = '923001234567';
var sender = '8583';
var textmessage = 'Test SMS from VT API';
var options = {
host: 'api.veevotech.com',
port: 443,
path: "/sendsms?hash=" + APIKey + "&receivenum=" + receiver + "&sendernum=" + encodeURIComponent(sender)+"&textmessage=" + encodeURIComponent(textmessage),
method: 'GET',
setTimeout: 30000
};
var req = http.request(options, function(res) {
console.log('STATUS: ' + res.statusCode);
res.setEncoding('utf8');
res.on('data', function (chunk) {
console.log(chunk.toString());
});
});
req.on('error', function(e) {
console.log('problem with request: ' + e.message);
});

req.end();
