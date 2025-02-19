// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', ()=>{
    console.log('show cahs out button');
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
    
})
document.getElementById('btn-show-add-money').addEventListener('click', ()=>{
    console.log('show cahs out button');
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('add-money-form').classList.remove('hidden')
    
})


