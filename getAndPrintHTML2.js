var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {
    let theData = "";
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received & append the data chunk
    response.on('data', function (data) {
      theData = theData + data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete. Here is the data:', theData);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);