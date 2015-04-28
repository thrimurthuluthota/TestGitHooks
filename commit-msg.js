var fs = require('fs');
require('shelljs/global');

var fileName = process.argv[2];
var message = fs.readFileSync(fileName, "utf8").trim();

var regEx = new RegExp(/^\[.+\]/);

if(!regEx.test(message)) {
  echo("  Error: Commit message not in proper format")
  echo("  ");

  echo("  Example valid message : ");
  echo("  [Dev Name] Fixed the ui styling for user textbox");
  process.exit(1);
}
