// console.log("Pending a request to the server");
// setTimeout(() => {
//     console.log('Here is your data :D');
// }, 3000);

// console.log("I'm stil working...");

// setTimeout(() => {
//     document.body.style.backgroundColor = '#03fcf4';
//     setTimeout(() => {
//         document.body.style.backgroundColor = '#03adfc';
//         setTimeout(() => {
//             document.body.style.backgroundColor = '#4503fc';
//         }, 1000)
//     }, 1000)
// }, 1000);

const delay = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
    }, delay);
    doNext && doNext();
};

// delay('#03fcf4', 3000, () => {
//     delay('#03adfc', 2000, () => {
//         delay('#4503fc', 1000, null)
//     })
// });