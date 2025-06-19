  // Import readline module to handle user input from the terminal
const readline = require('readline');

const minAmount=10;
const maxAmount=70;
const transactionFee=0.015;


  //Function to calculate and display transaction fee and total amount
function estimateTransactionFee(amountToSend) {
    
    let interest=amountToSend*transactionFee;
    if(interest<10) {
        interest=minAmount;
    }else
    if(interest>70){
        interest=maxAmount
    }
    // Calculate total amount (amount + transaction fee)
    const totalAmount=amountToSend+interest;
 
    // Display results to the user

    console.log(`Sending :KES ${amountToSend}`);
    console.log(`Calculated Transaction fee: ${interest}`);
    console.log(`Total amount to be debited:KES ${totalAmount}`);

    console.log("Send Money Securely!")
  
  }
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user to enter the amount to send
rl.question("Unatuma Ngapi? (KES): ", (input) => {
    const amountToSend = parseFloat(input);

     // Input validation: check if input is a number and greater than 0
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Enter a valid amount.");
        rl.close();
        return;
    };

    estimateTransactionFee(amountToSend);
  rl.close();
});

