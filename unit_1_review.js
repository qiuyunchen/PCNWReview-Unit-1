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


/*  3 
    @func fizzBuzz
    @param end {number}
    @desc - Count from 1 to the end. Implement basic fizzBuzz
            Console.log each iteration. This function does not return anything
*/



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


/*  7
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greets() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/



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

