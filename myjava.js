const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputbox.value == '') {
        alert("Please fiil out the!");
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}


listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
