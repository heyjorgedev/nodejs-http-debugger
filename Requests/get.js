module.exports = function(req, res)
{
	res.send('I received your GET request.');
  	console.log('[GET] %s', req.originalUrl);
};