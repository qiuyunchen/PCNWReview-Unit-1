/*
    Unit 1 Final Review

    Do I understand:
      -> Function Scope
      -> Conditionals
      -> Loops
      -> Iterating through Arrays
      -> Manipulating Arrays
      -> Adding Strings
      -> Callbacks
      -> Array Methods
      -> Object Literals and Keys
      -> Classes
*/

/*  1
    @func catchPhrase
    @param name {string}
    @param greet {string}
    @returns {string}
    @desc - Given 2 string parameters, return a combined string
    @example - 
        console.log(catchPhrase('Mo', '^_^')); // 'Mo said, "^_^"'
        console.log(catchPhrase('Taq', 'Eat, sleep, code')); // 'Mo said, "Eat Sleep Code"'

*/
const catchPhrase = (name, greet) =>{
        return name + " said, " + `"${greet}"`;
}
//test
console.log('-------- 1. catchPhrase test --------');
console.log(catchPhrase('Mo', '^_^') === 'Mo said, "^_^"');
console.log(catchPhrase('Taq', 'Eat, sleep, code') === 'Taq said, "Eat, sleep, code"');
console.log('-------------------------------------');

/*  2
    @func isOdd
    @param num {number}
    @returns {boolean}
    @desc - Given a number return true if it's odd
            return false if it's even
    @example - 
        isOdd(5); // true
        isOdd(2); // false

*/
const isOdd = (num) =>{
        return (num % 2 === 0)? false : true;
}
//test
console.log('-------- 2. isOdd test --------');
console.log(isOdd(5), true);
console.log(isOdd(2), false);
console.log('-------------------------------------');
/*  3 
    @func fizzBuzz
    @param end {number}
    @desc - Count from 1 to the end. Implement basic fizzBuzz
            Console.log each iteration. This function does not return anything
*/
const fizzBuzz = (end) =>{
        for(let i = 1; i < end+1; i++){
                if (i%3 === 0 && i%5 === 0) {console.log(i + " fizzBuzz")}
                else if( i%3 === 0 ) {console.log(i + ' fizz')}
                else if( i%5 === 0 ) {console.log(i + ' buzz')}
                else {console.log(i)}
        }
}
//test
console.log('-------- 3. fizzBuzz test --------');
fizzBuzz(20);
console.log('-------------------------------------');

/*  4
    @func myForEach
    @param arr {arr}
    @param cb {function}
    
    @desc - Implement the Javascript forEach method.

    @example - 
            myForEach([1, 2, 3], (e, i, original) => {
              console.log(e);
            });
*/
const myForEach = (arr, cb) =>{
        for(let i = 0; i < arr.length; i++){
                cb(arr[i], i, arr);
        }
}
//test
console.log('-------- 4. myForEach test --------');
myForEach([1, 2, 3], (e, i, original) => { console.log(e); } );
console.log('-------------------------------------');

/*  5
    @func myMap
    @param arr {array}
    @param cb {function}
    @returns {array}
    @desc - Implement the Javascript map array method.

    @example - 
            myMap([1, 2, 3], (e, i, original) => {
              return e * 2;
            });
*/
const myMap = (arr, cb) =>{
        const newArr = [];
        for(let i = 0; i < arr.length; i++){
                const newItem = cb(arr[i], i, arr);
                newArr.push(newItem);
        }
        return newArr;
}
//test
console.log('-------- 5. myMap test --------');
const myMapResult = myMap([1, 2, 3], (e, i, original) => {return e * 2; });
console.log(myMapResult, [2, 4, 6]);
console.log('-------------------------------------');

/*  6
    @func createObject
    @param keyName {string}
    @param keyValue {anything}

    @desc - Return an object with the passed in keyName and keyValue.

    @example - 
            createObject('name', 'John'); // { name: 'John' }
            createObject('age', 15); // { age: 15 }
            createObject('a', 'c'); // { a: 'c' }

*/
const createObject = (keyName, keyValue) =>{
        const obj = {};
        obj[keyName] = keyValue;
        return obj;
}
//test
console.log('-------- 6. createObject test --------');
console.log(createObject('name', 'John'), { name: 'John' });
console.log(createObject('age', 15), { age: 15 });
console.log(createObject('a', 'c'), { a: 'c' });
console.log('-------------------------------------');

/*  7
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greets() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/
class Pet{
        constructor(name, animal, greet){
                this.name = name;
                this.animal = animal;
                this.greet = greet;
        }
        greets(){
                return `${this.name} the ${this.animal} said ${this.greet}!`;
        }
}
//test
console.log('-------- 7. Pet class test --------');
const myPet = new Pet('Fluffy', 'sparrow', 'chirp chirp');
console.log(myPet);

const myPetGreeting = myPet.greets();
console.log(myPetGreeting);

console.log('-------------------------------------');

/*  8
    Define a @class called Person
    With @properties: name, age, pets
    With @methods: 
        profile() // Returns a greeting. Eg. "John is 30 years old."
        addPet(name, animal, greet) // Adds a new pet for the person
        petsOfKind(animal) // Returns list of pets that match the animal passed in

        const mo = new Person('Mo', 25);
        mo.addPet('Corgi', 'Dog', 'Trof');
        mo.addPet('Husky', 'Dog', 'Woof');
        mo.addpet('Tiger', 'Cat', 'Rawr');

        mo.petsOfKind('Dog'); // [ Pet {name: 'Corgi', animal: 'Dog', greet: 'Trof'},  
                                    Pet {name: 'Husky', animal: 'Dog', greet: 'Woof'} ]

        mo.petsOfKind('Cat'); // [ Pet {name: 'Tiger', animal: 'Cat', greet: 'Rawr'} ]
*/

class Person{
        constructor(name, age, pets=[]){
                this.name = name;
                this.age = age;
                this.pets = pets;
        }
        profile(){
                return `${this.name} is ${this.age} years old.`
        }
        addPet(name, animal, greet){
                this.pets.push(new Pet(name, animal, greet));
        }
        petsOfKind(animal){
                return this.pets.filter( (p)=>{
                        if(p.animal === animal) return p;
                })
        }
}
//test
console.log(' ');
console.log('-------- 8. Person class test --------');
const mo = new Person('Mo', 25);
console.log(mo);
console.log(" ");
console.log('---------- Mo after getting 3 pets--------');
mo.addPet('Corgi', 'Dog', 'Trof');
mo.addPet('Husky', 'Dog', 'Woof');
mo.addPet('Tiger', 'Cat', 'Rawr');
console.log(mo);
console.log(" ");
console.log("------------ Mo's profile ------------");
const moProfile = mo.profile();
console.log(moProfile);
console.log(" ");
console.log("------------ Mo's dogs -------------");
console.log(mo.petsOfKind('Dog'));
console.log(" ");
console.log("------------- Mo's cats --------------");
console.log(mo.petsOfKind('Cat'));
console.log(" ");
console.log("------------- Mo's cows --------------");
console.log(mo.petsOfKind('Cow'));
console.log(" ");
console.log('-------------------------------------');