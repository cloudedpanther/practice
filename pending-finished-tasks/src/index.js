// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-task-form"),
  input = form.querySelector("input"),
  pending = document.querySelector(".js-pending"),
  pendingList = pending.querySelector(".js-pending-list"),
  finished = document.querySelector(".js-finished"),
  finishedList = finished.querySelector(".js-finished-list");

const PENDING_TASK = "pendingTask",
  FINISHED_TASK = "finishedTask";

let pendingArr = [],
  finishedArr = [];

let pendingIdCount = 1,
  finishedIdCount = 1;

function checkTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const taskId = parseInt(li.id, 10);
  const targetTask = pendingArr.find((element) => element.id === taskId).text;
  paintFinishedTasks(targetTask);
}
function restoreTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const taskId = parseInt(li.id, 10);
  const targetTask = finishedArr.find((element) => element.id === taskId).text;
  paintPendingTasks(targetTask);
}

function deletePendingTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanPendingTasks = pendingArr.filter(function (task) {
    return task.id !== parseInt(li.id, 10);
  });
  pendingArr = cleanPendingTasks;
  saveTasks(PENDING_TASK, pendingArr);
}
function deleteFinishedTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanFinishedTasks = finishedArr.filter(function (task) {
    return task.id !== parseInt(li.id, 10);
  });
  finishedArr = cleanFinishedTasks;
  saveTasks(FINISHED_TASK, finishedArr);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintPendingTasks(currentValue);
  input.value = "";
}

function saveTasks(storageTitle, arrayTitle) {
  localStorage.setItem(storageTitle, JSON.stringify(arrayTitle));
}

function paintPendingTasks(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const switchBtn = document.createElement("button");
  const newId = pendingIdCount++;
  li.id = newId;
  const pendingObj = {
    text: text,
    id: newId
  };
  pendingArr.push(pendingObj);
  saveTasks(PENDING_TASK, pendingArr);

  span.innerHTML = text;
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deletePendingTask);
  switchBtn.innerHTML = "✅";
  switchBtn.addEventListener("click", checkTask);
  switchBtn.addEventListener("click", deletePendingTask);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(switchBtn);
  pendingList.appendChild(li);
}

function paintFinishedTasks(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const switchBtn = document.createElement("button");
  const newId = finishedIdCount++;
  li.id = newId;
  const finishedObj = {
    text: text,
    id: newId
  };
  finishedArr.push(finishedObj);
  saveTasks(FINISHED_TASK, finishedArr);

  span.innerHTML = text;
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deleteFinishedTask);
  switchBtn.innerHTML = "⏪";
  switchBtn.addEventListener("click", restoreTask);
  switchBtn.addEventListener("click", deleteFinishedTask);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(switchBtn);
  finishedList.appendChild(li);
}

function loadTasks() {
  const pendingTask = localStorage.getItem(PENDING_TASK);
  const finishedTask = localStorage.getItem(FINISHED_TASK);

  if (pendingTask !== null) {
    const parsedPendingTask = JSON.parse(pendingTask);
    parsedPendingTask.forEach(function (task) {
      paintPendingTasks(task.text);
    });
  }
  if (finishedTask !== null) {
    const parsedFinishedTask = JSON.parse(finishedTask);
    parsedFinishedTask.forEach(function (task) {
      paintFinishedTasks(task.text);
    });
  }
  form.addEventListener("submit", handleSubmit);
}

function init() {
  loadTasks();
}

init();
