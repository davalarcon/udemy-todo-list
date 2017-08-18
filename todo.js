const todos = [];

var input = prompt('what would you like to do?');

while (input !== 'quit') {
    if (input === 'list') {
        todos.forEach((todo, i) => {
            console.log('***********');
            console.log(i + ': ' + todo);
        });
        console.log('**************');
    } else if (input === 'new') {
        var newTodo = prompt('enter new to do, please.');
        todos.push(newTodo);
    } else if (input === 'delete') {
        var index = prompt('which index to be deleted?');
        todos.splice(index, 1);
        console.log('Todo deleted');
    }
    input = prompt('what would you like to do?');
}
console.log('Ok, you quit the app');