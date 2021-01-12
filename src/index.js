//TODO Kiểu dữ liệu trong typescript
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
