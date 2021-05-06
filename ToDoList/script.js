const userName = 'Lyubo';

const todoList = {
    user: userName,
    todos: []
};
let promptMessage = 'Please enter a command!';
let command = prompt(promptMessage);

//add
while (true) {
    if (command === 'new') {
        addTodo();
    } else if (command === 'list') {
        list();

    } else if (command === 'remove') {
        removeByIndex();
    } else if (command === 'quit') break;

    command = prompt(promptMessage);
}

function addTodo() {
    let todo = prompt("Add your TODO");
    todoList['todos'].push(todo);
}

function list() {
    console.log('***************')
    for (let i = 0; i < todoList['todos'].length; i++) {

        console.log(`${i + 1}. ${todoList['todos'][i]}`);
    }
    console.log('***************')
}

function removeByIndex() {
    let startIndex = prompt('Tell me the exact possition of the todo');
    todoList['todos'].splice(startIndex - 1, 1);
}