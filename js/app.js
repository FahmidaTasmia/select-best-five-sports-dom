const nameArray=[];

function display(playerName){
    const tableBody =document.getElementById('players-cart');
    tableBody.innerHTML="";

for(let i= 0; i<playerName.length; i++){
if(playerName.length<=5){
    const name = nameArray[i].playerName;
const tr = document.createElement('tr');
tr.innerHTML= `
<th>${i+1}</th>
<td> ${name}</td>

`
tableBody.appendChild(tr);

}

else{
    alert("nothing found with your input")
}
}

return playerName;
}

function addToCart(name){
    
    const playersName = name.parentNode.parentNode.children[0].
    innerText;
    const playersObject ={
        playerName : playersName,
       
    }
    nameArray.push(playersObject);
   display(nameArray);
}

