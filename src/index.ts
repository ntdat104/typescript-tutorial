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
