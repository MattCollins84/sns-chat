"use strict"

/*****
	Express and Socket.IO
*****/
const express = require('express');
const app = express();
const http = require('http').Server(app);
const cfenv = require('cfenv');
const	appEnv = cfenv.getAppEnv()

/*****
	Bodyparser etc... for POST requests
*****/
const bodyParser = require('body-parser');
const bpJSON = bodyParser.json();
const bpUrlencoded = bodyParser.urlencoded({ extended: true});

/*****
	Other stuff
*****/




/*****
	FRONT END
*****/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// serve static files from /public
app.use(express.static(__dirname + '/public'));

/*****
	Listening
*****/
http.listen(appEnv.port, ( appEnv.bind == "localhost" ? null : appEnv.bind ), () => {
  console.log(`listening on ${appEnv.url || publicIP}`);
});