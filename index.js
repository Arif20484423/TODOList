let tit;
let desc;
let itemJsonArr;
retable();
$("#inpform").submit(function (e) {
    e.preventDefault();
});
document.getElementById('add').addEventListener('click', () => {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArr = [];

        tit = document.getElementById('title').value;
        desc = document.getElementById('desc').value;

        if (tit.length == 0) {
            alert('Title is mandatory for adding item to list');
        }
        else {
            itemJsonArr.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
            document.getElementById('title').value = "";

            document.getElementById('desc').value = "";

        }

    }
    else {
        itemsJsonStr = localStorage.getItem('itemsJson');
        itemJsonArr = JSON.parse(itemsJsonStr);
        tit = document.getElementById('title').value;
        desc = document.getElementById('desc').value;
        if (tit.length == 0) {
            alert('Title is mandatory fro adding item to list');
        }
        else {

            itemJsonArr.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
            document.getElementById('title').value = "";
            document.getElementById('desc').value = "";
        }

    }
    retable();
})

function retable() {
    let tbody = document.getElementById('tbody');
    itemsJsonStr = localStorage.getItem('itemsJson');
    itemJsonArr = JSON.parse(itemsJsonStr);
    let str = "";
    if (itemJsonArr == null) {
        tbody.innerHTML = str;
    }
    else {
        itemJsonArr.forEach((element, index) => {
            str += ` 
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button id="delete"  onclick="deleted(${index})" class="btn btn-primary">Delete</button></td>
                </tr>`;

        });

        tbody.innerHTML = str;
    }

}

function deleted(i) {
    itemsJsonStr = localStorage.getItem('itemsJson');
    itemJsonArr = JSON.parse(itemsJsonStr);
    itemJsonArr.splice(i, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    retable();
}
document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear();
    console.log('shdcb');
    retable();
})