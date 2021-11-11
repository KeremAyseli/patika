function add() {
    var questList = document.getElementById("questList");
    var questItem = document.createElement("li");
    if (document.getElementById("todo") == "") {
        alert("Lütfen bir değer giriniz")
    }
    else {
        if(questList.childElementCount%2==0){
            questItem.className="list-group-item-light";
        }
        else{
            questItem.className="list-group-item-white";
        }
        let idOfli="questItem"+questList.childElementCount;
        questItem.id=idOfli;
        questItem.addEventListener("click", deleteItem);
        questItem.addEventListener("click", deleteItemLocalStroage);
        questItem.textContent = document.getElementById("todo").value;
        questList.appendChild(questItem);
        localStorage.setItem(idOfli, document.getElementById("todo").value);
    }

}
function deleteItem() {
    var questList = document.getElementById("questList");
    questList.removeChild(this.id);
}
function getItemLocalStroage() {
    var questList = document.getElementById("questList");
    for (var i = 0; i < localStorage.length; i++) {
        var questItem = document.createElement("li");
        questItem.className="list-group-item-light";
        questItem.id=localStorage.key(i);
        questItem.addEventListener("click", deleteItem);
        questItem.addEventListener("click", deleteItemLocalStroage);
        questItem.textContent = localStorage.getItem(localStorage.key(i));
        questList.appendChild(questItem);
    }
}
function clearAll() {
    localStorage.clear();
    var questList = document.getElementById("questList");
    questList.innerHTML="";
}
function deleteItemLocalStroage() {
    var questList = document.getElementById("questList");
    console.log(this.id);
    localStorage.removeItem(this.id);
}

deleteItem();
add();