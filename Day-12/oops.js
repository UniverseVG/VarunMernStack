class Person {
    constructor(name = "Varun", email = "varun@gmail.com", count = 0) {
        this.name = name;
        this.email = email;
        this.count = count;
    }
    login() {
        console.log(this.name, 'has logged in');
    }
    logout() {
        console.log(this.name, 'has logged out');
    }

}
// new keyword creating an instance of Person class
let person1 = new Person('John', 'John@wick.com');
let person2 = new Person('jonas', 'Jonas@dark.com');
let person3 = new Person('Michell', 'Michell@dak.com', 20);



person1.login()
person2.login()
console.log(person3);
console.log(typeof person3);


console.log(Person);

//number


let rollNo = new Number(10);

console.log(rollNo);


let srt = new String("Varun");
console.log(srt);


let obj = new Object({ name: 'Jonas' });
console.log(obj);