// FUNCTION HOISTING

var msg = greetUser();
console.log(msg);

function greetUser() {
    return 'Hey there!';
}

