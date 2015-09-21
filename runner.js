require("babel/register");

if(process.argv && process.argv[2]) {
    var task = require('./tasks/' + process.argv[2]);
    if(!task) {
        console.error('Unable to locate specified task');
    } else {
        task.run();
    }
}
