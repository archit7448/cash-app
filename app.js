const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-Button")
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelector(".no-of-notes")

const notesInData = [2000,500,100,20,10,5,1];

checkButton.addEventListener("clicked" , function validateBillandCashAmount(){
    hideMesage();
    if (billAmount.value > 0 ){
        if (cashGiven.value >= billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value ;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("cash given is lower than bill amount");
        }
     }else{
        showMessage("Invalid bill amount")
     }
} );

function calculateChange(amountToBeReturned){

    for(i=0; i < notesInData.length ; i++ ){
        
       var noOfNotes = Math.trunc(amountToBeReturned/notesInData[i]);

       amountToBeReturned = amountToBeReturned % notesInData[i] ;

       notesInData.innerText = noOfNotes
    }
}

function hideMesage(){
    message.style.display = "none" ;
}

function showMessage(msges){
    message.style.display = "none" ;
    message.innerText = msges ;
}