// Create a class named Student that takes in name, age, and major as 
// constructor parameters. Create an instance of student saved to a variable
// and console.log the variable

class Student{
    constructor(name, age, major){
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

const santi = new Student("Jose Luis Santiago", 25, "Computer Engineering");
console.log(santi);