//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

// sort out {}
function findWords(){
    j = 0
    while (j < dog_names.length) {
        let value = dog_names[j];
        let pattern = new RegExp(value, 'i');
        let result = pattern.test(dog_string);
        if (result == true) {
            console.log(`Matched ${dog_names[j]}`);
        } else {
            console.log("No Matches");
        }
        j++;
    }
};

console.log(findWords());


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    }
    return arr
};

console.log(replaceEvens(given_arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Codewars Problem 1:
// Given an array of integers, return a new array with each value doubled.

function maps(x){
    const y = [];
    for (let i = 0; i < x.length; i++) {
      y.push(x[i] * 2);
    } return y;
};

// Codewars Problem 2:
// Make a simple function called greet that returns the most-famous "hello world!"

function greet() {
    return "hello world!"
};

// Codewars Problem 3:
/*Timmy & Sarah think they are in love, but around where they live, they will only 
know once they pick a flower each. If one of the flowers has an even number of 
petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return 
true if they are in love and false if they aren't.*/

function lovefunc(flower1, flower2){
    if (flower1 % 2 == flower2 % 2) {
      return false
    } else {
      return true
    };
};

// Codewars Problem 4:
/*Your classmates asked you to copy some paperwork for them. You know that there 
are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.*/

function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0
    } else {
      return n * m
    };
};