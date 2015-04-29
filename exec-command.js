require('shelljs/global');

var execCmd = function(cmd) {
  if(exec(cmd).code != 0) {
    echo("Error executing the cmd `" + cmd + "`");
    exit(1);
  }
}

module.exports = execCmd;
global['execCmd'] = execCmd;