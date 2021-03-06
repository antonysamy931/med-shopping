const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const path = require('path');
const https = require('https');
const http = require('http');
const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(fileUpload());
app.use(function(req, res, next) { //allow cross origin requests
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
});

const applicaitonsettings = require(path.join(__dirname, './application-setting.json'));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, './dist/med-shopping/')));

app.get('/api/v1/serviceinfo', (req, res) => {
    res.status(200).json(applicaitonsettings["Service.Url"]);
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/med-shopping/index.html'));
});

if(applicaitonsettings["SecureConnectionEnable"] == false){
    /*
    * Http port enable configuration
    */

    /**
     * Get port from environment and store in Express.
     */

    var port = normalizePort(process.env.PORT || applicaitonsettings["HttpDefaultPort"]);
    app.set('port', port);

    /**
     * Create HTTP server.
     */
    var server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(port, () => console.log(`Running on http://localhost:${port}`));
    server.on('error', onError);
    server.on('listening', () => onListening(server));

}else{
    /*
    * Https port enable configuration
    */
    /**
     * Get port from environment and store in Express.
     */

    var httpsport = normalizePort(process.env.PORT || applicaitonsettings["HttpsDefaultPort"]);
    app.set('port', httpsport);

    /**
     * Create HTTP server.
     */
    var httpsserver = https.createServer(CertificateHelper.Credentials, app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    httpsserver.listen(httpsport, () => console.log(`Running on https://localhost:${httpsport}`));
    httpsserver.on('error', onError);       
    httpsserver.on('listening',() => onListening(httpsserver));
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
  
  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening(server) {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;    
  }