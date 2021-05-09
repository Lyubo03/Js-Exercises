// Array.prototype.pop() = () => console.log("OPPS. I want this element for myself :D");

//Factory Functions


// //Makes an obj and returns it at the end
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     };

//     color.hex = function() {
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);

// //Constructor functions

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// }

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba ${r}, ${g}, ${b}, ${a}`;
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);


// function Car(model, horsepower, color) {
//     this.model = model;
//     this.horsepower = horsepower;
//     this.color = color;
//     //this will refer to the window(the closest scope) if we don't use 'new'
//     this.introduceYourself = () => {
//         return `My name is ${this.color} ${this.model}! I have ${this.horsepower} under my cover :)`;
//     }
// }

// const car = new Car('Mustang', 720, 'blue');


//JS classes - syntax sugar (we can group V together (doesn't need to use prototypes))

// class Color {
//     constructor(r, g, b, name = 'someColor') {
//             //access with 'this'
//             //doesn't need to match
//             this.r = r;
//             this.g = g;
//             this.b = b;
//             this.colorName = name;
//         }
//         //short syntax to define method
//     greet() {
//         return `Hello from ${this.name}!`;
//     }
//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb() {
//         //destructure from 'this'
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     }
//     rgba(a = 1.0) {
//         const { r, g, b } = this;
//         return `rgba ${r}, ${g}, ${b}, ${a}`;
//     }
//     hex() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
// }

// const color1 = new Color(0, 0, 0, 'tomato');
// const color2 = new Color(255, 50, 15);

// //Extend and Super key words - subclasing and inheritance
// class Pet {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
// }

// class Cat extends Pet {
//     constructor(name, age, livesLeft = 9) {
//         //'base' in c#
//         super(name, age)
//         this.livesLeft = livesLeft;
//     }

//     meow() {
//         return 'MEOWW';
//     }
// }

// class Dog extends Pet {

//     bark() {
//         return 'Wooof';
//     }
// }

// class Pet {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
// }

class Student {

}