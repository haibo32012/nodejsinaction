var redis = require('redis'),
clientA = redis.createClient(),
clientB = redis.createClient();

clientA.on('message',function(channel,message) {
	console.log('Client A go message from channel %s:%s',channel,message);

});
clientA.on('subscribe',function(channel,count) {
	clientB.publish('main_chat_room','Hello World!');
});

clientA.subscribe('main_chat_room');