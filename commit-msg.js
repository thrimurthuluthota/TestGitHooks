var fs = require('fs');
require('shelljs/global');

var fileName = process.argv[2];

console.log('fileName ' + fileName);
var message = fs.readFileSync(fileName, "utf8").trim();
console.log('message ' + message);

var regEx = new RegExp(/^\[.+\]/);
console.log('regEx ' + regEx);

if(!regEx.test(message)) {
  echo("  Error: Commit message not in proper format")
  echo("  ");

  echo("  Example valid message : ");
  echo("  [Dev Name] Fixed the ui styling for user textbox");
  process.exit(1);
}
