//declare the variable for success Message
const successMsg = "Success! Number has been recharged";

//declare a variable for the initial prompt
var enterNum = prompt ("Welcome to TIIDELab quickteller:\n \n1. Airtime-Self\n2. Airtime-Others\n3. Data\n4. Transfer");

//if option 1 is chosen, this happens:
if (enterNum == 1) {
   var airtimeSelf = prompt ("Enter amount\n \n1. 1000\n2. 500\n3. 200\n4.100\n5. Others");
   if (airtimeSelf <= 4){
       alert (successMsg);
   } else if (airtimeSelf == 5) {
       var amountRecharge = prompt("enter recharge amount:");
       if (amountRecharge.length >= 2) {
           var successOther = alert(successMsg + " with " + amountRecharge + "NGN");
       } else prompt("Please enter up to 2 digits");
       alert(successOther);
   }
}

//if option 2 is chosen, then this
else if (enterNum == 2) {
    prompt ("Enter recipient's number:");
    prompt ("Enter recipient's network provider:\n \n1.MTN\n2. Airtel\n3. Glo\n4. 9mobile");
    var amountRecharge = prompt("enter recharge amount:");
    if (amountRecharge.length >= 2) {
           var successOther = alert(successMsg + " with " + amountRecharge + "NGN");
    } else prompt("Please enter up to 2 digits");
       alert(successOther);
}

//if option 3 is chosen, this happens
else if (enterNum == 3) {
    var network = prompt ("Enter network provider:\n \n1. MTN\n2. Airtel\n3. Glo\n4. 9mobile");
    var dataPlan = prompt ("Enter data plan:\n \n1. Daily\n2. Weekly\n3. Monthly");
    if (dataPlan == 1) {
        prompt ("Enter daily plan:\n \n1. 50MB for 100NGN\n2. 100MB for 200NGN\n3. 250MB for 400NGN");
        alert ("You have successfully subscribed to a daily data plan");
    } else if (dataPlan == 2) {
        prompt ("Enter weekly plan:\n \n1. 500MB for 700NGN\n2. 750MB for 1000NGN\n3. 1000MB for 1200NGN");
        alert ("You have successfully subscribed to a weekly data plan");
    } else if (dataPlan == 3) {
        prompt ("Enter monthly plan:\n \n1. 1200MB for 1500NGN\n2. 1500MB for 1700NGN\n3. 2000MB for 2000NGN");
        alert ("You have successfully subscribed to a monthly data plan");
    }
}

//if option 4 is chosen, then this
else if (enterNum == 4) {
    prompt ("Enter recipient's bank:\n \n1. Access bank\n2. Citi bank\n3. Eco bank\n4. First bank\n5. Gtbank\n6. Jaiz bank \n7. UBA\n8. Union bank\n9. Zenith bank");
    var accountNumber = prompt ("Enter recipient's account number:");
    if (accountNumber.length === 10) {
        var transferAmount = prompt ("Enter transfer amount:");
        let isCorrect = confirm ("Are you sure you want to send " + transferAmount + " to " + accountNumber);
        if (isCorrect === true) {
           alert ("Your transfer is successful");
        } 
    } else prompt("enter a valid account number");
}
