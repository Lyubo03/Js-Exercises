// const images = document.getElementsByTagName('a');

// for (let image of images) {
//     image.href = 'file:///D:/courses/practise/DomManipulations/img/bg-img/3.jpg';
// }
// const hen = {
//     name: 'Halen',
//     eggCount: 0,
//     layAnEgg: function() { this.eggCount++; }
// }
// const titles = document.querySelector('title');

// function changeText() {
//     const textEntered = document.getElementById('text_input').value;
//     const randomColor = Math.floor(Math.random() * 1000000) + 1;
//     title.innerHTML = `<h1 style="color: #${randomColor}">${textEntered}</h1>`;
// }
// const colors = ['violet', 'indigo', 'yellow', 'red', 'orange', 'green', 'blue'];
// const rainbowSpans = document.querySelectorAll('.rainbow');

// for (let i = 0; i < colors.length; i++) {
//     rainbowSpans[i].style.color = colors[i];
// }

//const btnChange = document.querySelector('#change');
// btnChange.onclick = function() {
//     const colors = ['violet', 'indigo', 'yellow', 'red', 'orange', 'green', 'blue'];
//     const rainbowSpans = document.querySelectorAll('.rainbow');

//     for (let i = 0; i < colors.length; i++) {
//         rainbowSpans[i].style.color = colors[i];
//     }
// }

// btnChange.addEventListener('mouseover', function() {
//     const r = document.querySelector('span');
//     r.style.color = `#${Math.floor(Math.random() * 1000) + 1}`
// })

const btnChange = document.querySelector('#changeButton');
const header = document.querySelector('#header');

btnChange.addEventListener('click', () => {
    const rgb = getRGB();

    document.body.style.backgroundColor = rgb;
    header.innerText = rgb;
});

function getRGB() {
    const firstValue = Math.floor(Math.random() * 256) + 1;
    const secondValue = Math.floor(Math.random() * 256) + 1;
    const thirdValue = Math.floor(Math.random() * 256) + 1;

    return `rgb(${firstValue}, ${secondValue}, ${thirdValue})`;
}
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        const rgb = getRGB();
        button.style.backgroundColor = rgb;
    })
}