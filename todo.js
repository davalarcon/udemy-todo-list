const todos = [];

var input = prompt('what would you like to do?');

while (input !== 'quit') {
    if (input === 'list') {
        todos.forEach((todo) => {
            console.log('***********');
            console.log(todo);

        }, this);
    } else if (input === 'new') {
        var newTodo = prompt('enter new to do, please.');
        todos.push(newTodo);
    }
    input = prompt('what would you like to do?');
}
console.log('Ok, you quit the app');