var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  let str = html.toString();
  let reversed = "";

  for(var i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }

  console.log(reversed);

}

getHTML(requestOptions, printReverse);