
var cors = require('cors');

app.use(cors({origin: true,
  methods: ['GET','PUT','POST','OPTIONS','DELETE'], 
  credentials: true, // add header: Access-Control-Allow-Credentials: true
  									 // request from client also need to set xhr.withCredentials = true;
  preflightContinue: true // required if you want to process complex methods such asOPTION and PUT,
  												// which requires pre-flight
})); 