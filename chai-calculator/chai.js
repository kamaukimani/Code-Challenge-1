const readline = require('readline');

const waterCup= 200;        // milliliters
const milkCup= 50;          // milliliters
const teaLeavesCup= 1;      //tablespoon
const sugarCup= 2;         //teaspoon

function calculateChaiIngredients(numberOfCups) {
    const water=waterCup *numberOfCups;       // Calculate total amount of water needed (in ml)
    const milk=milkCup * numberOfCups;        // Calculate total amount of milk needed (in ml)
    const tealeaves=teaLeavesCup * numberOfCups;  // Calculate total amount of tea leaves needed (in tablespoons)
    const sugar=sugarCup *numberOfCups;      // // Calculate total amount of sugar needed (in teaspoons)


    // Display the calculated quantities of each ingredient and a message to the user

    console.log(`To make ${numberOfCups} cups of Kenyan chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Teal Leaves (Majani): ${tealeaves} tablespoons`);
    console.log(`Sugar: ${sugar} teaspoons`)
    console.log("Enjoy your Chai Bora!")
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (input) => {
    const numberOfCups = parseFloat(input);


     // Input validation: check if input is a number and greater than 0

     if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups !");
        rl.close();
        return;
     }
    calculateChaiIngredients(numberOfCups);
  rl.close();
});