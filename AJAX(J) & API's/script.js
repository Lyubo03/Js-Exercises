// const data = `{"ticker":{"base":"BTC","target":"USD","price":"57235.11954911","volume":"39568.54933783","change":"-169.48374509"},"timestamp":1620395342,"success":true,"error":""}`;


// function parseDataToJson(data) {
//     return JSON.parse(data);
// }
// const parsedObject = parseDataToJson(data);

//XMLHttpRequest
// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log('All done with request!');
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function() {
//     console.log('ERROR!!!');
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('RESPONSE, WAITING TO PARSE...', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('DATA PARSED', data)
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price);
//     } catch (e) {
//         console.log('Something went wrong', e);
//     }
// }

//AXIOS - Library for making HTTP Requests
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR", err)
//     })

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log(e)
//     }
// }

//GetDadJoke
const jokes = document.querySelector('#jokes');
//Prosmise

const getDadJoke = async() => {
    try {
        //object made with the type of the header
        const config = { headers: { Accept: 'application/json' } }
            //Make an HTTP request
        const request = await axios.get('https://icanhazdadjoke.com/', config)
            //returns object
        return request.data.joke
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

const addNewJoke = async() => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const button = document.querySelector('button');
button.addEventListener('click', addNewJoke);