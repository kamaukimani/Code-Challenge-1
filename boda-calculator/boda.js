
const readline = require('readline');
const baseFare=50;
const chargePerKm=15;

function calculateBodaFare(distanceInKm){
  const totalFare = baseFare + (distanceInKm * chargePerKm);
  const chargeInKm=distanceInKm*chargePerKm;

  console.log("Uko kwote? Io nikm:"+" "+distanceInKm);
  console.log("Ukikalia Pikipiki: KES"+" "+baseFare);
  console.log("Mpaka Uko: KES"+" "+chargeInKm);
  console.log("Total: KES"+" "+totalFare);
  console.log("Panda Pikipiki!");
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (input) => {
    const distanceInKm = parseFloat(input);
    calculateBodaFare(distanceInKm);
  rl.close();
});



