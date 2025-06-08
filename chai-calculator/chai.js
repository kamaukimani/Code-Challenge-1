const waterCup= 200;
const milkCup= 50;
const teaLeavesCup= 1;
const sugarCup= 2;
let numCups=3;

function calculateChaiIngredients(numberOfCup) {
    let numberOfCups=prompt("Enter the number of chai cups you want to make:",6);
    water=waterCup *numberOfCups;
    milk=milkCup * numCups;
    tealeaves=teaLeavesCup * numCups;
    sugar=sugarCup *numCups;

}
console.log("To make Kenyan chai, you will need:");
console.log("Water:"+water+" "+"ml");
console.log("Milk:"+milk+" "+"ml");
console.log("Teal Leaves:"+tealeaves+" "+"tablespoons");
console.log("Sugar:"+water+" "+"teaspoons")
console.log("Enjoy your Chai Bora!")