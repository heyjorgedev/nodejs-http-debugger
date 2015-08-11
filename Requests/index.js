var Post 	= require('./post.js'),
	Get 	= require('./get.js');

// THIS IS JUST A KIND 
// OF A FACADE FOR THE REQUESTS
module.exports = {

	Post: Post,

	Get: Get

};