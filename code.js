// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    // if (name === null) {
    //     return "Hello";
    if (name === undefined || name === true || name === false || name === null || name === "" || parseFloat(name)) {
        return "Hello, World!";
    // } else if (name === true) {
    //     return "Hello, World!";
    // } else if (name ==false) {
    //     return "Hello, World!";
    // } else if (null){
    //     return "Hello";
    } else {
        return "Hello, " + name + "!";
    }
    // } else if (name === "Jane") {
    //     return 'Hello, Jane!';
    // } else if (name === "Alex") {
    //     return 'Hello, Alex!';
    // } else if (name === "Pat") {
    //     return 'Hello, Pat!';
    // }
}

