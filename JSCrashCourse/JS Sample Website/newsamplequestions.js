/*let person = {
    name: "Ryan Norin",
    age: 19,
    country: "Australia",
}

function logData() {
    console.log(person.name + " is " + person.age + " and lives in " + person.country)
}

logData() */


/* let age = 500

if (age < 6) {
    console.log ("Free!")}
    else if (age < 18) {
    console.log ("Child Discount!")
} else if(age < 27) {
    console.log ("Student Discount!")
} else if (age < 67) {
    console.log ("Full Price.")
} else if (age > 67) {
    console.log ("Senior Citizen Discount!")
}

*/

/*let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i++) {
    console.log ("- " + largeCountries[i])
}

*/

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.pop()
largeCountries.push ( "Pakistan")
largeCountries.shift ()
largeCountries.unshift("China")


console.log (largeCountries)