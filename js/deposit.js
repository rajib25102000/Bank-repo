document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    depositFiled.value = "";
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number')
        return;
    }
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositeAmountString = depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountString)

    const currentDippositAmount = previousDepositeAmount + newDepositAmount;
    depositTotal.innerText = currentDippositAmount;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    const currentBalanceAmount = previousBalanceAmount + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceAmount;
  
})