var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  let str = html.toString();
  str = str.toUpperCase();
  console.log(str);

}

getHTML(requestOptions, printUpperCase);

