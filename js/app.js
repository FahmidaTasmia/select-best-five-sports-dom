const nameArray = [];

function display(playerName) {
    const tableBody = document.getElementById('players-cart');
    tableBody.innerHTML = "";
    if (nameArray.length <= 5) {
        for (let i = 0; i < playerName.length; i++) {

            const name = nameArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <th>${i+1}</th>
        <td> ${name}</td>
        
        `
            tableBody.appendChild(tr);

        }
    } else {
        alert('sorry ! the system cant expect more then five');
    }

}



function addToCart(event) {

    const playersName = event.parentNode.parentNode.children[0].
    innerText;
    const playersObject = {
        playerName: playersName,

    }
    nameArray.push(playersObject);
    display(nameArray);
}








