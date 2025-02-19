document.getElementById('btn-cash-out-money').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('hello world');
    const cashOut = document.getElementById('cash-money-input').value;
    const cashOutNumber = parseFloat(cashOut)
    console.log(cashOutNumber);
    const CashOutPin = document.getElementById('cash-input-pin').value;
    console.log(cashOut);
    if(CashOutPin === '1234'){
        console.log('cashout money');
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance)
        console.log(balanceNumber);
      const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('current-balance').innerText = newBalance
        
    }
    else{
        alert('Fiald to cashout')
    }

    
    
})