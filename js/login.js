document.getElementById('button-login').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('button click');

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    
    if(phoneNumber === '5' && pinNumber === '1234'){
      console.log('you are login');
      window.location.href = '/home.html'
      
        
    }
    else{
        alert('Wrong phone number or Pin')
    }

})