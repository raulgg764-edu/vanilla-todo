const addTaskForm=document.querySelector("form");

addTaskForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  addTask();
})

function addTask(){
  const taskList = document.querySelector("#task-list");
  const taskTitle=document.querySelector("#title");
  const taskDetails=document.querySelector("#task");

  if(taskTitle.value===""||taskDetails.value==="")
    return
  
 
  const card = document.createElement("article");
  const cardTitle = document.createElement("h2");
  const cardDetails = document.createElement("p");
  const cardDelete=document.createElement("button");

  
  card.classList.add("task-card")
  cardDelete.classList.add("delete-task")
  cardTitle.classList.add("task-title");
  cardDetails.classList.add("task-details");

  cardDelete.addEventListener("click",(e)=>{
    removeTask(e.target);
  })

  cardTitle.innerHTML=taskTitle.value;
  cardDetails.innerHTML=taskDetails.value;
  cardDelete.innerHTML="✖";

  card.appendChild(cardTitle);
  card.appendChild(cardDelete);
  card.appendChild(cardDetails);
  taskList.appendChild(card);

  taskDetails.value="";
  taskTitle.value="";
}

function removeTask(btn){
  btn.parentElement.remove();
}

