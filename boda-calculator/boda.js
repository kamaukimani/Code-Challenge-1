// const baseFare=50;
// let kilometer
// File: fare.js

function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES

  // Calculate total fare
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  // Output the results
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${baseFare + (distanceInKm * chargePerKm)}`);
  console.log(`Total: KES ${totalFare}`);
  console.log('\nPanda Pikipiki!');
}

// Prompt user for input
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm = parseFloat(userInput);

// Validate input and call the function
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Please enter a valid distance.");
}
