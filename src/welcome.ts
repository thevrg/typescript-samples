class MyGreeter {
    greet(name: string) {
        return 'Hello, dear' + name;
    }
}

let greeter: MyGreeter = new MyGreeter();

console.log(greeter.greet('Janos'));