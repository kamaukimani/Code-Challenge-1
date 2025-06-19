
// Import readline module to accept user input from the terminal

const readline = require('readline');
const baseFare=50;      //in KES
const chargePerKm=15;  // in KES

// Function to calculate total fare based on distance
function calculateBodaFare(distanceInKm){
  const totalFare = baseFare + (distanceInKm * chargePerKm);  //add base fare to amount chrged according to the killometres
  const chargeInKm=distanceInKm*chargePerKm;  // calculates the amount charged as per KMs travelled 

  // Output detailed fare breakdown to the user

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${chargeInKm}`);
  console.log(`Total: KES ${totalFare}`);

  
  console.log("Panda Pikipiki!");
}

// Set up readline interface for command-line input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user how many kilometers they will travel

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (input) => {
    const distanceInKm = parseFloat(input);

    // Input validation: ensure input is a valid number and greater than 0
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Enter a valid number");
    rl.close();
    return;
  };
    calculateBodaFare(distanceInKm);
  rl.close();
});



