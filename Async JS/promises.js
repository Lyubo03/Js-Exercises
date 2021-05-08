// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500) + 500);
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(');
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// fakeRequestPromise('https://www.youtube.com/watch?v=AP_PcrtyZVY')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data);
//         return fakeRequestPromise('https://www.youtube.com/watch?v=AP_PcrtyZVw');
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data);
//         return fakeRequestPromise('https://www.youtube.com/watch?v=AP_PertyZVw');
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('OH NO, A REQUEST FAILED!!!')
//         console.log(e);
//     });

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rnd = Math.random();
//         setTimeout(() => {
//             if (rnd < 0.7) {
//                 resolve('YOUR FAKE DATA HERE :D');
//             }
//             reject('Error Caught');
//         }, 1000)
//     })
// }

// fakeRequest('www.root.bg/page1')
//     .then((data) => {
//         console.log('It worked!');
//         console.log(data);
//     })
//     .then((data) => {
//         console.log('WOOWOWOWOWOWO');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('Oh no!', err);
//     });

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.color = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('#03fcf4', 1500)
//     .then(() => delayedColorChange('#03adfc', 1500))
//     .then(() => delayedColorChange('#4503fc', 1500));

// const logIn = async(username, password) => {
//     if (!password || !username) throw new Error('Missing username or password');
//     else if (password.length < 3) throw new Error('Length is not enough');
//     else if (username.length < 4) throw new Error('Invalid username');
//     return 'Welcome'
// };

const delayColorChange = ((color, delay) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    )
})
async function rainbow() {
    await delayColorChange('#03fcf4', 1000);
    await delayColorChange('#03adfc', 1000);
    await delayColorChange('#4503fc', 1000);
}

rainbow();