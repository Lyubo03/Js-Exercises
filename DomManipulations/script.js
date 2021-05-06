// const input = document.querySelector('input');
// input.addEventListener('keydown', () => {
//     console.log('KEYDOWN');
// })

// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     console.log(e.code);
// })

// window.addEventListener('keydown', (e) => {
//     console.log(e.code);
// })

const form = document.querySelector('#tweetForm');

form.addEventListener('submit', function(e) {
    const container = document.querySelector('.container');
    const username = form.elements.username.value;
    const tweet = form.elements.tweet.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    container.append(newTweet);

    e.preventDefault();
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    form.elements.username.value = '';
    form.elements.tweet.value = '';
})

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', () => {
//         li.remove();
//     });
// }

const input = document.querySelector('#inputChange');
const header = document.querySelector('#textSynced');
input.addEventListener('input', () => {
    if (input.value === '') {
        header.innerText = 'Enter Your Username';
    } else {
        header.innerText = `Welcome, ${input.value}`;
    }
});

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
});