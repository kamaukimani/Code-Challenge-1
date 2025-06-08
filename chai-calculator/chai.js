const readline = require('readline');

const waterCup= 200;
const milkCup= 50;
const teaLeavesCup= 1;
const sugarCup= 2;

function calculateChaiIngredients(numberOfCups) {
    const water=waterCup *numberOfCups;
    const milk=milkCup * numberOfCups;
    const tealeaves=teaLeavesCup * numberOfCups;
    const sugar=sugarCup *numberOfCups;


console.log("To make"+" "+numberOfCups+" "+ "cups of Kenyan chai, you will need:");
console.log("Water:"+water+" "+"ml");
console.log("Milk:"+milk+" "+"ml");
console.log("Teal Leaves (Majani):"+tealeaves+" "+"tablespoons");
console.log("Sugar:"+sugar+" "+"teaspoons")
console.log("Enjoy your Chai Bora!")
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (input) => {
    const numberOfCups = parseFloat(input);
    calculateChaiIngredients(numberOfCups);
  rl.close();
});