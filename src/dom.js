import { newElement } from "./helper";
import * as app from "./app.js";
import starSrc from "./assets/star-plus-outline.svg";
import eyeSrc from "./assets/eye-plus-outline.svg";
import forkSrc from "./assets/source-fork.svg";

export function displayProject(storageProject) {
    const parentContainer = document.querySelector("#project-view");
    parentContainer.replaceChildren();
    const projectTitle = newElement("h3", "", storageProject["title"]);
    const taskGrid = newElement("div", "task-grid");

    parentContainer.appendChild(projectTitle);

    for (const task of storageProject["taskList"]) {
        const taskCard = newElement("div", "card border-gradient");
        const taskTitle = newElement("h4", "", task["title"]);
        const taskDescription = newElement("p", "", task["description"]);
        const taskDueDate = newElement("p", "", "Due Date: " + task["dueDate"]);
        const taskPriority = newElement(
            "p",
            "",
            "Priority: " + task["priority"]
        );
        const taskLabels = newElement("p", "", "Labels: " + task["labels"]);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskLabels);

        const cardButtons = newElement("div", "icon-container");
        const star = newElement("img", "icons");
        const eye = newElement("img", "icons");
        const fork = newElement("img", "icons");
        star.src = starSrc;
        eye.src = eyeSrc;
        fork.src = forkSrc;
        cardButtons.appendChild(star);
        cardButtons.appendChild(eye);
        cardButtons.appendChild(fork);
        taskCard.appendChild(cardButtons);
        taskGrid.appendChild(taskCard);
    }
    parentContainer.appendChild(taskGrid);
}

export function createNewTaskDialog() {
    // create new elements
    const parentContainer = document.querySelector("main");
    const newTaskDialog = newElement("dialog");
    const closeButton = newElement("button", "buttons", "Close");
    const newTaskDialogHeading = newElement("h3", "", "Add New Task");
    const newTaskTitle = newElement("input", "", "", "title");
    const newTaskTitleLabel = newElement("label", "", "Task Title");
    const newTaskDescription = newElement("input", "", "", "description");
    const newTaskDescriptionLabel = newElement("label", "", "Task Description");
    const newTaskDueDate = newElement("input", "", "", "due-date");
    const newTaskDueDateLabel = newElement("label", "", "Due Date");
    const newTaskPriority = newElement("select", "", "", "priority");
    const newTaskPriorityLabel = newElement("label", "", "Priority");
    // priority dropdown options
    const pZero = newElement("option", "", "P0");
    const pOne = newElement("option", "", "P1");
    const pTwo = newElement("option", "", "P2");
    const pThree = newElement("option", "", "P3");
    // end priority dropdown options
    const newTaskLabels = newElement("input", "", "", "labels");
    const newTaskLabelsLabel = newElement("label", "", "Labels");
    const newTaskStatus = newElement("select", "", "", "status");
    const newTaskStatusLabel = newElement("label", "", "Status");
    // status dropdown options
    const notStarted = newElement("option", "", "Not Started");
    const inProgress = newElement("option", "", "In Progress");
    const completed = newElement("option", "", "Completed");
    // end status dropdown options
    const newTaskProject = newElement("input", "", "", "project");
    const newTaskProjectLabel = newElement("label", "", "Project");
    const addButton = newElement("button", "buttons", "Add Task");
    const buttonDiv = newElement("div", "flex-container");

    // add for tags to labels
    newTaskTitleLabel.htmlFor = "title";
    newTaskDescriptionLabel.htmlFor = "description";
    newTaskDueDateLabel.htmlFor = "due-date";
    newTaskPriorityLabel.htmlFor = "priority";
    newTaskDueDateLabel.htmlFor = "labels";
    newTaskStatusLabel.htmlFor = "status";
    newTaskDueDateLabel.htmlFor = "project";

    // set input types
    newTaskTitle.type = "text";
    newTaskDescription.type = "text";
    newTaskDueDate.type = "date";

    // option value assignments
    pZero.value = "P0";
    pOne.value = "P1";
    pTwo.value = "P2";
    pThree.value = "P3";
    notStarted.value = "Not Started";
    inProgress.value = "In Progress";
    completed.value = "Completed";

    // add elements to DOM
    newTaskPriority.appendChild(pZero);
    newTaskPriority.appendChild(pOne);
    newTaskPriority.appendChild(pTwo);
    newTaskPriority.appendChild(pThree);
    newTaskStatus.appendChild(notStarted);
    newTaskStatus.appendChild(inProgress);
    newTaskStatus.appendChild(completed);
    newTaskDialog.appendChild(newTaskDialogHeading);
    newTaskDialog.appendChild(newTaskTitleLabel);
    newTaskDialog.appendChild(newTaskTitle);
    newTaskDialog.appendChild(newTaskDescriptionLabel);
    newTaskDialog.appendChild(newTaskDescription);
    newTaskDialog.appendChild(newTaskDueDateLabel);
    newTaskDialog.appendChild(newTaskDueDate);
    newTaskDialog.appendChild(newTaskPriorityLabel);
    newTaskDialog.appendChild(newTaskPriority);
    newTaskDialog.appendChild(newTaskLabelsLabel);
    newTaskDialog.appendChild(newTaskLabels);
    newTaskDialog.appendChild(newTaskStatusLabel);
    newTaskDialog.appendChild(newTaskStatus);
    newTaskDialog.appendChild(newTaskProjectLabel);
    newTaskDialog.appendChild(newTaskProject);
    buttonDiv.appendChild(addButton);
    buttonDiv.appendChild(closeButton);
    newTaskDialog.appendChild(buttonDiv);
    parentContainer.appendChild(newTaskDialog);

    // Button logic
    newTaskDialog.showModal();
    closeButton.addEventListener("click", () => {
        newTaskDialog.close();
    });
    addButton.addEventListener("click", () => {
        let newTaskArray = [];
        newTaskArray.push(document.querySelector("#title").value);
        newTaskArray.push(document.querySelector("#description").value);
        newTaskArray.push(document.querySelector("#due-date").value);
        newTaskArray.push(document.querySelector("#priority").value);
        newTaskArray.push(document.querySelector("#labels").value);
        newTaskArray.push(document.querySelector("#status").value);
        newTaskArray.push(document.querySelector("#project").value);
        const addedTask = new app.Task(...newTaskArray);
        app.addTaskToProject(addedTask);
        console.log(addedTask);
        const storageProject = JSON.parse(localStorage[addedTask.project]);
        displayProject(storageProject);
        newTaskDialog.close();
    });
}
