//node.js === js runtime
//executes code outside of the browser
//VSCode is a node app (Netflix, NASA Use it)
//Node REPL

// for (let i = 0; i < 11; i++) {
//     console.log('WOOOOW');
// }

//making dir
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the callback");
//     if (err) throw err;
// })
// fs.mkdir('Cars');
// console.log("I COME AFTER MKDIR IN THE FILE!!");


const fs = require('fs');
const folderName = process.argv[1] || 'Project'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log(e);
}