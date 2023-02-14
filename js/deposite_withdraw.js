document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field')
    const depositString = depositField.value
    const depositNum = parseFloat(depositString)
    const depositAmount = document.getElementById('deposit-amount')
    const totalDeposit = depositAmount.innerText
    const totalDepositNum = parseFloat(totalDeposit)
    const balanceBox = document.getElementById('balance')
    const balance = balanceBox.innerText
    const balanceNum = parseFloat(balance)
    depositField.value = '';
    if (isNaN(depositNum)) {
        alert('Please enter a number');
        return;
    }

        depositAmount.innerText = totalDepositNum + depositNum;
        balanceBox.innerText = balanceNum + depositNum
    
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawString = withdrawField.value
    const withdrawNum = parseFloat(withdrawString)
    const withdrawAmount = document.getElementById('withdraw-amount')
    const totalWithdraw = withdrawAmount.innerText
    const totalWithdrawNum = parseFloat(totalWithdraw)
    const balanceBox = document.getElementById('balance')
    const balance = balanceBox.innerText
    const balanceNum = parseFloat(balance)
    withdrawField.value = '';

    if (isNaN(withdrawNum)) {
        alert('Please enter a number')
        return;
    }
    if (balanceNum < withdrawNum) {
        alert('You do not have sufficient money')
        return;
    }

    withdrawAmount.innerText = totalWithdrawNum + withdrawNum;
    balanceBox.innerText = balanceNum - withdrawNum
})   