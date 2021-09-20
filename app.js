const billAmount = document.querySelector("#billamount");
const cashGiven = document.querySelector("#cashgiven");
const checkButton = document.querySelector("#checkButton");
const message = document.querySelector("#errormessage");
const noOfNotes = document.querySelectorAll(".noofnotes");

const notesInData = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click" , function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0 ){
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value ;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("cash given is lower than bill amount");
        }
     } else {
        showMessage("Invalid bill amount")
     }
} );

function calculateChange(amountToBeReturned) {

    for( let i=0; i < notesInData.length ; i++ ){
        
       const numberOfNotes = Math.trunc(amountToBeReturned / notesInData[i]);

       amountToBeReturned = amountToBeReturned % notesInData[i] ;

       noOfNotes[i].innerText = numberOfNotes
    }
}

function hideMessage(){
    message.style.display = "none" ;
}

function showMessage(msg){
    message.style.display = "none" ;
    message.innerText = msg;
}