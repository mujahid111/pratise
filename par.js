// Lecture: Desctructuring
//var john = ['john', 26];


// ES6
/*    //console.log(name);
const [name, age]= ['john',26];
//console.log(age);

const obj = {firstname: 'john', lastName:'smith'};

const{firstname, lastName} = obj;
//console.log(firstname);
//console.log(lastName);

const{firstname : a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year){const age= new Date().getFullYear() - year;
return [age, 65 - age];
}

const[age2, rettirement]= calcAgeRetirement(1990);
console.log(age2);
console.log(rettirement);

// Lecture: Rest Parameters

function isFullAge(){
    //console.log(arguments);

    var argArr = Array.prototype.slice.call(arguments);
    argArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}
isFullAge(1999, 1990, 1965)
isFullAge(1980, 2016, 1852, 1989)

//Leacture: Default parameters

function smithPerson(firstName,  yearOfBirth, lastName, Nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.Nationality = Nationality;
}

var john = new smithPerson('john', 1990)

// codding Challenge

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has tree density of ${density} trees per square  km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new park('Green Park', 1987, 0.2, 215),
new park('National Park', 1894, 2.9, 3541),
new park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street ', 2015, 0.8),
new Street('Sunset Bouleverd', 1982, 2.5, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}
function reportParks(p) {
    console.log('---------Parks Report---------');
    //Density
    p.forEach(el => el.treeDensity());

    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    //which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}
function reportStreets(s) {
    console.log('---------Streets Report---------');

    // Toatal and Average length of town's streets
    const[totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets hava a total length of ${totalLength} km, with an Average of ${avgLength} km.`);

    // classify sizes
    s.forEach(el => el.classifyStreet());


}


reportParks(allParks);
reportStreets(allStreets);


// First Programme

function driverLicense (paseedTest)
{
    let firstName = 'john';
    const age = 26;

        if(paseedTest){
            firstName = 'john'
        }
        console.log(firstName + 'year Born' + age);
}

driverLicense();



function driverLicense (paseedTest)
{
    var firstName = 'john';
    var age = 26;

        if(paseedTest){
            firstName = 'john';
            console.log(firstName + 'year Born' + age);
        }

}

driverLicense();

let firs = firstName = 'John';
let lastName = 'Miller';
const yearOfBirth = 1994;

function calcAge(year) {
    return 2016 - year;
}
    console.log('this is ' + firstName + lastName + '. He was born in ' + yearOfBirth + ' today, he is ' + calcAge(yearOfBirth) + ' years old ');

    console.log(`this is ${firstName} ${lastName} .he was born in ${yearOfBirth} today, he is ${calcAge(yearOfBirth)} year old`);



// Arrow fnction

const years = [1985, 1978, 1994,1999,];

//ES5
    var age5 = years.map(function(el){

        return 2016 - el;
    });
    console.log(age5);

//ES6

    let age6 = years.map(el => 2016 - el);
    console.log(age6);

    age6 = years.map((el, index) => `age elements ${index + 1}: ${2016 - el}. `);
    console.log(age6);


    age6 = years.map((el, index) => {const now = new Date().getFullYear();

        const age = now - el;
       return `age elemnet ${index + 1  }: ${age}.`

    })
    console.log(age6);


    var names=['john','smith','david','warner'];
     for(var i=0; i<=names.length; i++)
       {
           console.log(names[i]);
       }

       var i = 0;
       while(i<= names.length)
       {
           console.log(names[i]);
           continue;
           i++;

       }


var john = {name: 'john', yearOfBirth: 1994, job: 'teacher'};

var person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}
person.prototype.lastName= 'smith';

var john = new person('john', 1994, 'teacher');
var mark = new person('mark', 1969, 'programmer');
var david = new person('david', 1985, 'retired');

john.calculateAge();
mark.calculateAge();
david.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(david.lastName);

// object.create

var personProto = {
    calculateAge: function () {
        console.log(2016 - yearOfBirth);
    }
};
var john= Object.create(personProto);
john.name = 'john';
john.yearOfBirth = '1969';
john.job = 'teaccher';

var jane=Object.create(personProto,{name:{value: 'jane'}, yearOfBirth:{value: 1970}, job:{value:'designer'}} );


// primitive nd object

var a = 30;
var b = a;
var a = 46;
console.log(a);
console.log(b);

var obj1 = { name: 'john', job: 'teacher' };
var obj2 = obj1;
obj1.age = 35;

console.log(obj1.age);
console.log(obj2.age);

// function

var age = 30;
var obj = { name: 'jonas', city: 'lisbon' };

function change(a, b) {
    a = 30;
    b.city = 'san francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city);


//Lecture : passing functions as arguments

var years = [1990, 1985, 1981, 1999, 1979];

function arrCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartBeat(el){
    if (el >= 18 && el <= 81)
    {
    return Math.round(206.9 -(0.67 * el));
    }
    else
    {
        return -1;
    }
}

var ages = arrCalc(years, calculateAge);
var fullAges = arrCalc(ages, isFullAge);
var rates = arrCalc(ages, maxHeartBeat); 

console.log(ages);
console.log(rates);


// codding challengge 

function Question(question, correct, answer) {
    this.question = question;
    this.correct = correct;
    this.answer = answer;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
        console.log(i + ' : ' + this.answer[i]);
    }
}

Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
        console.log('Correct Answer...!');
    }
    else {
        console.log('Wrong Answer. Try again :');
    }
}

var q1 = new Question('is javascript the coolest progrmming language in the world ?,'['Yes', 'no'], 0);
var q2 = new Question('who\'s teaching you javascript ?'['jonas', 'john', 'mike'], 1);
var q3 = new Question('What does best describe codding ?'['Boring', 'Hard', 'Fun', 'Tedious'], 2)

var question = [q1, q2, q3];

var n = Math.floor(Math.random() * question.length);

question[n].displayQuestion();

var answer =prompt('Plese select correct Answer. ');

question[n].checkAnswer(answer);


// Destructuring

const [name, age]= ['john', 26];
console.log(name);
console.log(age);

const obj = {firstName: 'john', lastName:'stive'};
const{firstName, lastName} = obj;

console.log(firstName);
console.log (lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age =new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age1, retirement] =   
calcAgeRetirement(1990);
console.log(age1);
console.log(retirement);

// ES5

var ages= [12, 17, 8, 21, 14, 11];
var cur;
var full = ages.map(function(cur){
    return cur > 18;

});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6

    -console.log(ages.findIndex(cur => cur >= 18));
    console.log(ages.find(cur => cur >= 18)); 


    // The Spread Operator

    function addFourAges(a, b, c, d){
        return a + b + c + d;
    }
    var sum1 = addFourAges(18, 12, 31, 16);
    console.log(sum1);

// ES5
    var ages= [18,12,31,16];
    var sum2 = addFourAges.apply(null, ages);
    console.log(sum2);

//ES6

    var sum3 = addFourAges(...ages);
    console.log(sum3);

    //Example
var cur;
    const familySmith = ['john', 'jonas', 'jane'];
    const familyMiller = ['bob', 'baby','mary'];

    const bigFamily = [...familySmith, 'lily', ...familyMiller];

    console.log(bigFamily);


// Lecture: Rest Perameters
// ES5
function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    })
}
isFullAge5(1990, 1999, 1965);

//ES6

function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));

}
isFullAge6(1990, 1999, 1965, 2018, 1996, 1987);


//Lecture: Map

const question = new Map();
question.set('question', 'what is the official name of the latest major javascript version ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer: D');
question.set(false, 'wrong, plz try again later');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    console.log('Answer 4 is here');
}
    for(let[key, value] of question.entries()){
            if(typeof[key] === Number){
                console.log(`Answer ${key} : ${val}`);
            }
    }


    const  ans = parseInt(prompt('Write the Correct Answer'));
    console.log(question.get(ans === question.get('correct')));


// Lecture: classes

var person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new person5('john', 1990, 'teacher');
//ES6

class person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        Console.log(age);
    }
    static greeting() {
        console.log('Hey there!');
    }
}
const john6 = new person6('john', 1990, 'teacher');
    person6.greeting(); 


// Codding Challenge 1

function printFullAge(years) {

    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i]
        //console.log(ages[i]);
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('person ' + i + ' is ' + ages[i] +' ages and' + ' is full age');
            fullAges.push(true);
        }
        else {
            console.log('person ' + i + ' is ' + ages[i] +' ages and' + ' is not full ages');
            fullAges.push(false);
        }
    }
    return fullAges;
}
    var years = [1980, 1999, 1975, 1987, 1994];
    var full_1 = printFullAge(years);
    var full_2 = printFullAge([1958, 2012, 1971]);

// Codding Challenge 

var johnAge = 29;
var mikeAge = 31;
var maryAge = 30;

var johnHeight = 180;
var mikeHeight = 174;
var maryHeight = 178;

var JohnScore = johnHeight + 5 * johnAge;
var mikeScore = mikeHeight + 5 * mikeAge;
var maryScore = maryHeight + 5 * maryAge;

    if(JohnScore > mikeScore && JohnScore > maryScore)
    {
        console.log('John win the game with ' + JohnScore + ' points !' )
    }
    else if(mikeScore > JohnScore && mikeScore > maryScore)
    {
        console.log('Mike win the game with '+ mikeScore + ' points !');
    }
    else if(maryScore > JohnScore && maryScore > mikeScore)
    {
        console.log('Mary win the game with '+ maryScore + ' points !');
    }
    else 
    {
        console.log('It\'s Drawn..!');
    }


    //Lecture: LET / CONST

    //ES5
    var name5 = 'john smith';
    var name5 = 'john smith';
    var age5 = 23;
        name5 = 'john miller';
        age5 = 25;
   // console.log(name5, age5   );

    //ES6
//const a =23;
//const b =25;
   
   //console.log(a);
   //console.log(b);
   const a = 1;
   for(a=0; a<10; a++)
   {
       console.log(a);
   }


   (function (){
        let c = 3;
        console.log(c);
   })();
   
    //console.log(c);

{
    const a = 1;
    console.log(a);
}
//console.log(a);


//Lecture : String

let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1990;

function calcAge(years){
    return 2016 - years;
}

//ES5

    console.log('This is ' + firstName + ' ' +   
    lastName + ' he was born in ' + yearOfBirth + ' Today he is ' 
    + calcAge(yearOfBirth) + ' years old ');

//ES6

    console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
    console.log(n.startsWith('jo'));
    console.log(n.endsWith('s'));
    console.log(n.includes(' '));*/


    // Arrow function

    const years = [1990, 1965, 1982, 1937];
    console.log(years);
    























