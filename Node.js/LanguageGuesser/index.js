const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
//takes the args from the terminal

try {
    const input = process.argv[2];
    const langCode = franc(input);
    if (langCode === 'und') {
        console.log("I couldn't figure it out! Try something else")
    } else {
        const language = langs.where("3", langCode);
        console.log(`Our best guest is: ${language.name.green}`)
    }
} catch (e) {
    console.log(e);
}