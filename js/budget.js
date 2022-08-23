document.getElementById('btn-calculator').addEventListener('click',function(){

    const playerField = document.getElementById('player-field');
    const previousPlayerExpense = parseInt(playerField.value);
    const newPlayerExpense = nameArray.length*previousPlayerExpense
    console.log(newPlayerExpense);
    const totalPlayerExpense = document.getElementById('player-expense');
    totalPlayerExpense.innerText = newPlayerExpense;
})

document.getElementById('btn-total-calculate').addEventListener('click',function(){
    const managerField =document.getElementById('manager-field');
    const managerFieldValue =parseInt(managerField.value);
    const coachField = document.getElementById('Coach-field');
    const coachFieldValue = parseInt(coachField.value);
    const totalManagerAndCoachExpense = managerFieldValue + coachFieldValue;
    console.log(totalManagerAndCoachExpense);


    const playerField = document.getElementById('player-field');
    const previousPlayerExpense =  nameArray.length* parseInt(playerField.value);

    const newTotalExpense =  parseInt(totalManagerAndCoachExpense+ previousPlayerExpense);
    console.log(newTotalExpense);

    const total = document.getElementById('total-expense');
    total.innerText=newTotalExpense;
    

})





