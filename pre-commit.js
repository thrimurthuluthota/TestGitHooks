require('shelljs/global');

var outputStr = exec('git diff --cached --name-only', {silent:true}).output.trim();
console.log('outputStr ' + outputStr);
var modifiedFiles = outputStr.split(/\n/);
console.log('modifiedFiles ' + modifiedFiles);

var importantFile = ['package.json','bower.json'];

var found = importantFile.some(function(s) {
  return modifiedFiles.indexOf(s) != -1;
});

console.log('found ' + found);
if(found) {
  echo("  Error: Please do not commit these files ")
  echo("  1) package.json");
  echo("  2) bower.json");
  echo("  ");
  echo("  Use the following command to fix this");
  echo("  git reset HEAD package.json bower.json");
  process.exit(1);
}
