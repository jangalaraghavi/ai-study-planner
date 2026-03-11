function addTask(){

let subject = document.getElementById("subject").value;
let hours = document.getElementById("hours").value;

let taskList = document.getElementById("taskList");

let li = document.createElement("li");

li.textContent = subject + " - " + hours + " hour study";

taskList.appendChild(li);

}
