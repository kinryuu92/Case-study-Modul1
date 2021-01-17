
    let list = loadData()

    function display(){
    let str = "<tr>"+
    "<th id='class'>PLAYER NAME</th>"+
    "<th id='class'>POSITION</th>"+
    "<th id='class'>AGE</th>"+
    "<th id='class'>WAGE</th>"+
    "<th id='class'>SKILL</th>"+
    "<th id='class'>COUNTRY</th>"+
    "<th id='class'>IMAGE</th>"+
    "<th colspan='2' id='class'>Action</th>"+
    "</tr>"
    for (let i = 0; i < list.length; i++) {
    str += `<tr>
                <td>${list[i][0]}</td>
                <td>${list[i][1]}</td>
                <td>${list[i][2]}</td>
                <td>${list[i][3]}</td>
                <td>${list[i][4]}</td>
                <td>${list[i][5]}</td>
                <td><img src="${list[i][6]}" alt=""</td>
                <td class="upda" ><button onclick="updatePlayer(${i})">Update</button> </td>
                <td class="dele"><button onclick="deletePlayer(${i})">Delete</button> </td>
            </tr>`;
}
    document.getElementById('list').innerHTML = str;
    saveData()
}
    display()
    function addPlayer(){
    let name = document.getElementById("player's-name").value
    let position = document.getElementById("player's-position ").value
    let age = document.getElementById("player's-age").value
    let wage = document.getElementById("player's-wage").value
    let skill = document.getElementById("player's-skill").value
    let country = document.getElementById("player's-country").value
    let img = document.getElementById("player's-img").value
    if (name !="" && position !="" && age !="" && wage !="" && skill !="" && country !=""){
    let player = [name, position, age, wage, skill, country, img];
    list.push(player);
    display();
    resetInput();
}else {
    alert("please input name");
}
}
    function updatePlayer(index){
    let newName = prompt("Input new name: ",list[index][0]);
    let newPosition = prompt("Input new position: ",list[index][1]);
    let newAge = prompt("Input new age: ",list[index][2]);
    let newWage = prompt("Input new wage: ",list[index][3]);
    let newSkill = prompt("Input new skill: ",list[index][4]);
    let newCountry = prompt("Input new country: ",list[index][5]);
    let newImg = prompt("Input new img: ",list[index][6]);
    let player = [newName, newPosition, newAge, newWage, newSkill, newCountry, newImg];
    list[index] = player;
    display(player);
}
    function deletePlayer(index) {
    list.splice(index, 1);
    display()
}
    function resetInput(){
    name = document.getElementById("player's-name").value = ""
    name = document.getElementById("player's-position ").value = ""
    name = document.getElementById("player's-age").value = ""
    name = document.getElementById("player's-wage").value = ""
    name = document.getElementById("player's-skill").value = ""
    name = document.getElementById("player's-country").value = ""
    name = document.getElementById("player's-img").value = ""
}
function saveData() {
    localStorage.setItem('player', JSON.stringify(list));
}
function loadData() {
    if (localStorage.hasOwnProperty('player')){
        let data = JSON.parse(localStorage.getItem('player'));
        return data;
    }else {
        return []
    }
}

function showMenuHtml(){
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += `<div class="card">
<img src="${list[i][6]}" alt="player" style="...">
<h1>${list[i][0]}</h1> 
        <p><button>Information</button></p>
</div>`;
    }
    document.getElementById('list').innerHTML = str;
}

let today = new Date();
let date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let dateTime = time + "<br>"+ date ;
document.getElementById("hvn").innerHTML = dateTime;


