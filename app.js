const billAmount = document.querySelector("#billamount");
const cashGiven = document.querySelector("#cashgiven");
const checkButton = document.querySelector("#checkButton");
const message = document.querySelector("#errormessage");
const noOfNotes = document.querySelectorAll(".noofnotes");
const nextButton = document.querySelector("#next")
const notesInData = [2000,500,100,20,10,5,1];
const changeTable = document.querySelector(".change-table")
const cashGivenArea = document.querySelector("#cash-section")

cashGivenArea.style.display = "none";
changeTable.style.display = "none";

nextButton.addEventListener("click",function validateForward(){
     if (billAmount.value > 0){
         cashGivenArea.style.display= "block";
         hideMessage()
     }else{
       showMessage("Invalid Input")
       cashGivenArea.style.display = "none";
       changeTable.style.display = "none";
     }
}) 

checkButton.addEventListener("click",function validateCashAndAmountBill(){
    if ( cashGiven.value >= billAmount.value ){
        changeTable.style.display="block"
        const ammountToGiveBack = cashGiven.value - billAmount.value;
        changeHandler(ammountToGiveBack)
        hideMessage()
    } else {
         showMessage("want to wash a plate?")
         changeTable.style.display = "none" 
    }

})

function hideMessage(){
    message.style.display = "none"
}


function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg ;
}

function changeHandler(ammountToGiveBack){
    for (i=0;i < notesInData.length; i++ ){
        const numberOfNotes =  Math.trunc(ammountToGiveBack / notesInData[i]);
        ammountToGiveBack = ammountToGiveBack % notesInData[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}