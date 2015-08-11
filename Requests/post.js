module.exports = function(req, res)
{
	res.send('I received your POST request.');
	console.log('[POST] %s', req.originalUrl);
};