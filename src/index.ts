//TODO Kiểu dữ liệu trong typescript

//* string
var firstName: string;
firstName = "Dat";
console.log(firstName);

//* number
var year: number;
year = 2000;
console.log(year);

//* boolean
var isMale: boolean;
isMale = true;
console.log(isMale);

//* string array
var food: string[];
food = ["orange", "apple", "banana"];
console.log(food);

//* number array
var num: number[];
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);

//* enum
const enum Direction {
	Up,
	Down,
	Left,
	Right,
}
console.log(Direction.Up);

//* tuple
var orange: [string, number, number];
orange = ["cam", 10, 2000];
console.log(orange);

//* any
var random: any;
// random = "This is string";
// random = [1, "Hello", 2, "Hi"];
random = {
	name: "Dat",
	age: 20,
	isMail: true,
};
console.log(random);

//TODO function trong typescript
//* void
var run = function (): void {
	console.log("Hello World");
};
run();

//* return number - type 1
var calcAverage = function (a: number, b: number): number {
	return (a + b) / 2;
};
console.log(calcAverage(2, 4));

//* return number - type 2 - arrow function
var calcAverage2 = (a: number, b: number): number => {
	return (a + b) / 2;
};
console.log(calcAverage(3, 5));

//* return string
var sayHello = (name: string): string => {
	return "Hello " + name;
};
console.log(sayHello("Dat"));

//TODO Oop
console.log("Oop --------------");

//? Trừ tượng hóa
class Person {
	name: string;
	age: number;
	isMale: boolean;

	constructor(name: string, age: number, isMale: boolean) {
		this.name = name;
		this.age = age;
		this.isMale = isMale;
	}

	talk(): void {
		console.log("My name is", this.name);
		console.log("I am", this.age);
		console.log(this.isMale ? "I am a man." : "I am a woman.");
	}
}
const person1 = new Person("Dat", 20, true);
person1.talk();

//? Kế thừa
class Student extends Person {
	score: number;

	constructor(name: string, age: number, isMale: boolean, score: number) {
		super(name, age, isMale);
		this.score = score;
	}

	talk(): void {
		super.talk();
		console.log("My score is", this.score);
	}
}
const student1 = new Student("Vy", 15, false, 9);
student1.talk();

//? Access Modifier
//* public, private, protected
class Employee extends Person {
	protected year: number;
	private salary: number;

	constructor(
		name: string,
		age: number,
		isMale: boolean,
		year: number,
		salary: number
	) {
		super(name, age, isMale);
		this.year = year;
		this.salary = salary;
	}

	public setSalary(salary: number): void {
		this.salary = salary;
	}

	public getSalary(): number {
		return this.salary;
	}

	public talk(): void {
		super.talk();
		console.log("My salary is", this.getSalary());
		console.log("My year is", this.year);
	}
}
const employee1 = new Employee("Alice", 28, false, 5, 20000);
employee1.talk();
employee1.setSalary(25000);
employee1.talk();

//? Abstract class
abstract class Animal {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}

	abstract talk(): void;
}

class Dog extends Animal {
	private type: string;

	constructor(name: string, type: string) {
		super(name);
		this.type = type;
	}

	public setType(type: string): void {
		this.type = type;
	}

	public getType(): string {
		return this.type;
	}

	public talk(): void {
		console.log("I am a " + this.type + " dog.");
		console.log("Gâu gâu...");
	}
}
const dog1 = new Dog("Millo", "BullDog");
dog1.talk();

//? Generic
function run1<T>(x: T): T {
	return x;
}
console.log(run1<string>("Day la ham generic"));
console.log(run1<number>(10));

//? Interface
interface Student1 {
	id: string;
	firstName: string;
	middleName?: string;
	lastName: string;
	age: number;

	showInfo(): void;
	study: () => void;
}

class HSG implements Student1 {
	id: string;
	firstName: string;
	lastName: string;
	age: number;

	showInfo = (): void => {
		console.log("Id:", this.id);
		console.log("firstName:", this.firstName);
		console.log("lastName:", this.lastName);
		console.log("age:", this.age);
	};

	study(): void {
		console.log("I am studying...");
	}
}
