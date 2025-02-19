document.getElementById('btn-add-money').addEventListener('click', (event)=>{
    event.preventDefault()
    console.log('add money buttoo');

    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
    
    if(inputPinNumber === '1234'){
        console.log('adding money to you account');

        const balance = document.getElementById('current-balance').innerText;
       
       const addMoneyNumber = parseFloat(addMoneyInput);
       const balanceNumber = parseFloat(balance);
       console.log(balanceNumber);
       
       console.log(addMoneyNumber);
       const newBalance = addMoneyNumber + balanceNumber;
       console.log(newBalance);
        document.getElementById('current-balance').innerText=newBalance
       
       
       
        
        
    }
    else{
        alert('fail to add money please try again')
    }
    
})