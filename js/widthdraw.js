document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled = document.getElementById('widthdraw-filed')
    const withdrawFiledIstring = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(withdrawFiledIstring);
    withdrawFiled.value='';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return;
    }

    const withdrawTotal = document.getElementById('widthdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const previousWidthdrawTotal = parseFloat(withdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalElementString);
    
    if(newWithdrawAmount > previousBalanceAmount){
        alert('Please enter the valide number')
        return;
    }
    
    const currentWithdrawTotal = previousWidthdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;

    const currentBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceAmount;
})