const readline = require('readline');
const minAmount=10;
const maxAmount=70;
const transactionFee=0.015;

function estimateTransactionFee(amountToSend) {
    
    let interest=amount*transactionFee;
    if(interest<10) {
        interest=minAmount;
    }else
    if(interest>70){
        interest=maxAmount
    }
    const totalAmount=amount+interest;

    console.log("Sending :KES"+ " "+amount);
    console.log("Calculated Transaction fee:"+" "+interest);
    console.log("Total amount to be debited:KES"+" "+totalAmount);

    console.log("Send Money Securely!")
  
  }
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Unatuma Ngapi? (KES): ", (input) => {
    const amountToSend = parseFloat(input);
    estimateTransactionFee(amountToSend);
  rl.close();
});

