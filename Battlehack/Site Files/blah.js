var express = require('express');
var braintree = require('braintree');

var app = express();
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "5j39mqmgy8ycvhvx",
  publicKey: "9dg3cj6y2d58np45",
  privateKey: "a4eddc21b7fa4b762f21a1a9de28c5d1"
});
app.use(express.static(__dirname + '/views'));

app.get('/index', function(request, response) {
   response.render('index.html')
});

app.post('/thanks', function (req, res) {
	res.redirect('/thank-you.html');
});
app.listen(8080, "localhost");

