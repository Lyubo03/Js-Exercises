let figlet = require('figlet');

figlet('Hello World!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.err(err);
        return;
    }
    console.log(data);
});