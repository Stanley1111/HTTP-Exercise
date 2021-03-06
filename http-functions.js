module.exports = function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');

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
      callback(theData);
    });

  });
};