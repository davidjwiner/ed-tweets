// # require 'net/http' 
// # require 'net/https' 
// # require 'uri' 

// # RootCA = '/etc/ssl/certs' 
// # url = URI.parse 'https://api.twitter.com/yourrequestgoeshere' 
// # http = Net::HTTP.new(url.host, url.port) 
// # http.ca_path = RootCA 
// # http.verify_mode = OpenSSL::SSL::VERIFY_PEER 
// # http.verify_depth = 9 
// # request = Net::HTTP::Get.new(url.path) 

// # # handle oauth here, or whatever you need to do... 

// # response = http.request(request) # ... process response ...

// require 'open-uri'
// open ("http://preeventualist.org/lost") do |lost|
// 	puts lost.read
// end

var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};

var success = function (data) {
    console.log('Data [%s]', data);
};

var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);
twitter.get('search/tweets', { q: '#commoncore since:2011-11-11', count: 100 }, function(err, data, response) {
	tweets = data.statuses;
	for (index in tweets) {
		console.log(tweets[index].text);
	}
})