//TODO Kiểu dữ liệu trong typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//* string
var firstName;
firstName = "Dat";
console.log(firstName);
//* number
var year;
year = 2000;
console.log(year);
//* boolean
var isMale;
isMale = true;
console.log(isMale);
//* string array
var food;
food = ["orange", "apple", "banana"];
console.log(food);
//* number array
var num;
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);
console.log(0 /* Up */);
//* tuple
var orange;
orange = ["cam", 10, 2000];
console.log(orange);
//* any
var random;
// random = "This is string";
// random = [1, "Hello", 2, "Hi"];
random = {
    name: "Dat",
    age: 20,
    isMail: true
};
console.log(random);
//TODO function trong typescript
//* void
var run = function () {
    console.log("Hello World");
};
run();
//* return number - type 1
var calcAverage = function (a, b) {
    return (a + b) / 2;
};
console.log(calcAverage(2, 4));
//* return number - type 2 - arrow function
var calcAverage2 = function (a, b) {
    return (a + b) / 2;
};
console.log(calcAverage(3, 5));
//* return string
var sayHello = function (name) {
    return "Hello " + name;
};
console.log(sayHello("Dat"));
//TODO Oop
console.log("Oop --------------");
//? Trừ tượng hóa
var Person = /** @class */ (function () {
    function Person(name, age, isMale) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    Person.prototype.talk = function () {
        console.log("My name is", this.name);
        console.log("I am", this.age);
        if (this.isMale) {
            console.log("I am a man.");
        }
        else
            console.log("I am a woman.");
    };
    return Person;
}());
var person1 = new Person("Dat", 20, true);
person1.talk();
//? Kế thừa
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, isMale, score) {
        var _this = _super.call(this, name, age, isMale) || this;
        _this.score = score;
        return _this;
    }
    Student.prototype.talk = function () {
        _super.prototype.talk.call(this);
        console.log("My score is", this.score);
    };
    return Student;
}(Person));
var student1 = new Student("Vy", 15, false, 9);
student1.talk();
//? Access Modifier
//* public, private, protected
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, isMale, year, salary) {
        var _this = _super.call(this, name, age, isMale) || this;
        _this.year = year;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.talk = function () {
        _super.prototype.talk.call(this);
        console.log("My salary is", this.getSalary());
        console.log("My year is", this.year);
    };
    return Employee;
}(Person));
var employee1 = new Employee("Alice", 28, false, 5, 20000);
employee1.talk();
employee1.setSalary(25000);
employee1.talk();
//? Abstract class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    Dog.prototype.setType = function (type) {
        this.type = type;
    };
    Dog.prototype.getType = function () {
        return this.type;
    };
    Dog.prototype.talk = function () {
        console.log("I am a " + this.type + " dog.");
        console.log("Gâu gâu...");
    };
    return Dog;
}(Animal));
var dog1 = new Dog("Millo", "BullDog");
dog1.talk();
