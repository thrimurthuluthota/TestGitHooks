require('shelljs/global');

var outputStr = exec('git diff --cached --name-only', {silent:true}).output.trim();
var modifiedFiles = outputStr.split(/\n/);

var importantFile = ['package.json','bower.json'];

var found = importantFile.some(function(s) {
  return modifiedFiles.indexOf(s) != -1;
});

if(found) {
  echo("  Error: Please do not commit these files")
  echo("  1) package.json");
  echo("  2) bower.json");
  echo("  ");
  echo("  Use the following command to fix this");
  echo("  git reset HEAD package.json bower.json");
  process.exit(1);
}
