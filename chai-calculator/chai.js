const waterCup= 200;
const milkCup= 50;
const teaLeavesCup= 1;
const sugarCup= 2;
let numCups=3;
function calculateChaiIngredients(numberOfCups) {
    water=waterCup *numCups;
    milk=milkCup * numCups;
    tealeaves=teaLeavesCup * numCups;
    sugar=sugarCup *numCups;

}
console.log("To make Kenyan chai, you will need:")
console.log("Water:"+water+" "+"ml")