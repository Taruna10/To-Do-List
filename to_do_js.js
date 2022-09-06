var plus_sign=document.getElementById("d1");
var taskContainer = document.getElementById("task_input_container");
var itemContainer = document.getElementById("item_input_container");
var noTasks=document.getElementById("noTasks");
var closeTask = document.getElementById("closeTaskInput");
var closeItem = document.getElementById("closeItemInput");
var addTaskbtn = document.getElementById("add_task_button");
var addItembtn = document.getElementById("add_item_button");

var count = 0;

function openAddTask(){
    taskContainer.style.visibility = "visible";
}



function closeAddTask(){
    taskContainer.style.visibility = "hidden";
}

function closeAddItem(){
    itemContainer.style.visibility = "hidden";
    addItembtn.parentElement.innerHTML = `<button id="add_item_button">+ Add Item</button>`;
    addItembtn = document.getElementById("add_item_button");
}

function getTask() {
    var task = document.getElementById("task");
    var res = task.value;
    task.value = "";
    return res;
}

function getItem() {
    var item = document.getElementById("item");
    var res = item.value;
    item.value = "";
    return res;
}

function disable_item(item){
    var check = item.querySelector("input");
    check.disabled = true;

    item.querySelector("span").classList.add("strike");
}

function addItem(x){
    var card_title = document.getElementById(x);
    var card = card_title.parentElement;
    var item_Container = card.getElementsByClassName("card_body")[0];

    var item = document.createElement("div");
    item.className = "item";
    var itemContent = `
            <input type="checkbox" id="">
            <span>${getItem()} &nbsp;</span>
        `;
    item.innerHTML = itemContent;
    item_Container.appendChild(item);

    item.querySelector("input").addEventListener("click",function(){
        disable_item(item);
    })
    closeAddItem();
}

function openAddItem(cardHeading){
    var x = cardHeading.id;
    itemContainer.style.visibility = "visible";
    addItembtn.addEventListener("click",function(){
        addItem(x);
    });
}


var count = -1;

function addTask(){
    count = count + 1;
    closeAddTask();
    noTasks.style.display = "none";
    var card = document.createElement("div");
    card.className = "card_div";
    
    var cardContent = 
    `<div class="card_title" id=${count}>
        <p> ${getTask()}</p>
     </div>
     <div class="card_body">
     </div>`;

    card.innerHTML = cardContent;
    container.appendChild(card);

    var cardHeading = document.getElementsByClassName("card_title")[count];
    cardHeading.addEventListener("click", function(){
        openAddItem(cardHeading);
    });
}


plus_sign.addEventListener("click",openAddTask);
addTaskbtn.addEventListener("click", addTask);

closeTask.addEventListener("click", closeAddTask);

closeItem.addEventListener("click", closeAddItem);