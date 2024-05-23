import { newElement } from "./helper";
import * as app from "./app.js";
import starSrc from "./assets/star-plus-outline.svg";
import eyeSrc from "./assets/eye-plus-outline.svg";
import forkSrc from "./assets/source-fork.svg";
import folderDeleteSrc from "./assets/folder-remove-outline.svg";
import folderEditSrc from "./assets/folder-edit-outline.svg";
import checkboxSrc from "./assets/checkbox-marked-outline.svg";
import taskDeleteSrc from "./assets/text-box-remove-outline.svg";
import taskEditSrc from "./assets/text-box-edit-outline.svg";

export function displayProject(storageProject) {
    const parentContainer = document.querySelector("#project-view");
    parentContainer.replaceChildren();
    const projectTitle = newElement("h3", "", storageProject["title"]);
    const taskGrid = newElement("div", "task-grid");
    storageProject["taskList"] = _.sortBy(storageProject["taskList"], [
        "dueDate",
    ]);
    console.log(storageProject.taskList);
    parentContainer.appendChild(projectTitle);

    for (const [index, task] of storageProject["taskList"].entries()) {
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
        const taskStatus = newElement("p", "", "Status: " + task["status"]);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskLabels);
        taskCard.appendChild(taskStatus);

        const cardButtons = newElement("div", "icon-container");
        const deleteTaskIcon = newElement("img", "icons");
        const editTaskIcon = newElement("img", "icons");
        const completeTaskIcon = newElement("img", "icons");
        deleteTaskIcon.src = taskDeleteSrc;
        editTaskIcon.src = taskEditSrc;
        completeTaskIcon.src = checkboxSrc;
        cardButtons.appendChild(deleteTaskIcon);
        cardButtons.appendChild(editTaskIcon);
        cardButtons.appendChild(completeTaskIcon);
        taskCard.appendChild(cardButtons);
        taskGrid.appendChild(taskCard);
        // add event listners
        editTaskIcon.addEventListener("click", () => {
            createEditTaskDialog(index, task);
        });
        deleteTaskIcon.addEventListener("click", () => {
            app.removeTaskFromProject(index, task);
            storageProject = JSON.parse(localStorage[task.project]);
            displayProject(storageProject);
        });
    }
    parentContainer.appendChild(taskGrid);
}

export function createNewTaskDialog() {
    // create new elements
    const parentContainer = document.querySelector("main");
    const newTaskDialog = newElement("dialog", "", "", "add-task-window");
    const closeButton = newElement("button", "buttons", "Close");
    const newTaskDialogHeading = newElement("h3", "", "Add New Task");
    let newTaskTitle = newElement("input", "", "", "title");
    const newTaskTitleLabel = newElement("label", "", "Task Title");
    let newTaskDescription = newElement("input", "", "", "description");
    const newTaskDescriptionLabel = newElement("label", "", "Task Description");
    let newTaskDueDate = newElement("input", "", "", "due-date");
    const newTaskDueDateLabel = newElement("label", "", "Due Date");
    let newTaskPriority = newElement("select", "", "", "priority");
    const newTaskPriorityLabel = newElement("label", "", "Priority");
    // priority dropdown options
    const pZero = newElement("option", "", "P0");
    const pOne = newElement("option", "", "P1");
    const pTwo = newElement("option", "", "P2");
    const pThree = newElement("option", "", "P3");
    // end priority dropdown options
    let newTaskLabels = newElement("input", "", "", "labels");
    const newTaskLabelsLabel = newElement("label", "", "Labels");
    let newTaskStatus = newElement("select", "", "", "status");
    const newTaskStatusLabel = newElement("label", "", "Status");
    // status dropdown options
    const notStarted = newElement("option", "", "Not Started");
    const inProgress = newElement("option", "", "In Progress");
    const completed = newElement("option", "", "Completed");
    // end status dropdown options
    let newTaskProject = newElement("input", "", "", "project");
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
        if (newTaskDialog.parentNode) {
            newTaskDialog.parentNode.removeChild(newTaskDialog);
        }
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
        if (newTaskDialog.parentNode) {
            newTaskDialog.parentNode.removeChild(newTaskDialog);
        }
    });
}

export function createEditTaskDialog(index, task) {
    // create new elements
    const parentContainer = document.querySelector("main");
    const newTaskDialog = newElement("dialog");
    const closeButton = newElement("button", "buttons", "Close");
    const newTaskDialogHeading = newElement("h3", "", "Edit Task");
    const newTaskTitle = newElement("input", "", "", "edit-title");
    const newTaskTitleLabel = newElement("label", "", "Task Title");
    const newTaskDescription = newElement("input", "", "", "edit-description");
    const newTaskDescriptionLabel = newElement("label", "", "Task Description");
    const newTaskDueDate = newElement("input", "", "", "edit-due-date");
    const newTaskDueDateLabel = newElement("label", "", "Due Date");
    const newTaskPriority = newElement("select", "", "", "edit-priority");
    const newTaskPriorityLabel = newElement("label", "", "Priority");
    // priority dropdown options
    const pZero = newElement("option", "", "P0");
    const pOne = newElement("option", "", "P1");
    const pTwo = newElement("option", "", "P2");
    const pThree = newElement("option", "", "P3");
    // end priority dropdown options
    const newTaskLabels = newElement("input", "", "", "edit-labels");
    const newTaskLabelsLabel = newElement("label", "", "Labels");
    const newTaskStatus = newElement("select", "", "", "edit-status");
    const newTaskStatusLabel = newElement("label", "", "Status");
    // status dropdown options
    const notStarted = newElement("option", "", "Not Started");
    const inProgress = newElement("option", "", "In Progress");
    const completed = newElement("option", "", "Completed");
    // end status dropdown options
    const newTaskProject = newElement("input", "", "", "project");
    const newTaskProjectLabel = newElement("label", "", "Project");
    const addButton = newElement("button", "buttons", "Update Task");
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

    // existing values
    newTaskTitle.value = task["title"];
    newTaskDescription.value = task["description"];
    newTaskDueDate.value = task["dueDate"];
    newTaskPriority.value = task["priority"];
    newTaskLabels.value = task["labels"];
    newTaskStatus.value = task["status"];
    newTaskProject.value = task["project"];

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
    //newTaskDialog.appendChild(newTaskProjectLabel);
    //newTaskDialog.appendChild(newTaskProject);
    buttonDiv.appendChild(addButton);
    buttonDiv.appendChild(closeButton);
    newTaskDialog.appendChild(buttonDiv);
    parentContainer.appendChild(newTaskDialog);

    // Button logic
    newTaskDialog.showModal();
    closeButton.addEventListener("click", () => {
        newTaskDialog.close();
        if (newTaskDialog.parentNode) {
            newTaskDialog.parentNode.removeChild(newTaskDialog);
        }
    });
    addButton.addEventListener("click", () => {
        let newTaskArray = [];
        newTaskArray.push(document.querySelector("#edit-title").value);
        newTaskArray.push(document.querySelector("#edit-description").value);
        newTaskArray.push(document.querySelector("#edit-due-date").value);
        newTaskArray.push(document.querySelector("#edit-priority").value);
        newTaskArray.push(document.querySelector("#edit-labels").value);
        newTaskArray.push(document.querySelector("#edit-status").value);
        newTaskArray.push(task["project"]);
        //get project and task, pop old task
        const addedTask = new app.Task(...newTaskArray);
        app.removeTaskFromProject(index, addedTask);
        //let storageProject = JSON.parse(localStorage[addedTask.project]);
        //storageProject.taskList.splice(index, 1);

        app.addTaskToProject(addedTask);
        //console.log(addedTask);
        const storageProject = JSON.parse(localStorage[addedTask.project]);
        displayProject(storageProject);
        newTaskDialog.close();
        if (newTaskDialog.parentNode) {
            newTaskDialog.parentNode.removeChild(newTaskDialog);
        }
    });
}

export function displayNav() {
    const projectList = document.querySelector("#project-list");
    projectList.replaceChildren();
    const localStorageArray = Object.keys(localStorage);
    localStorageArray.sort();
    localStorageArray.forEach(function (key) {
        const projectTitle = JSON.parse(localStorage.getItem(key))["title"];
        const listItem = newElement("li");
        const pTag = newElement("p", "project-title", projectTitle);
        const deleteIcon = newElement("img", "icons");
        const editIcon = newElement("img", "icons");
        deleteIcon.src = folderDeleteSrc;
        editIcon.src = folderEditSrc;
        listItem.appendChild(pTag);
        listItem.appendChild(editIcon);
        listItem.appendChild(deleteIcon);
        projectList.appendChild(listItem);
        // add event listener for delete
        // localStorage remove item where title === projectTitle
        // if
        deleteIcon.addEventListener("click", () => {
            const currentProjectView =
                document.querySelector("#project-view h3");
            console.log(currentProjectView.textContent);
            app.removeProject(projectTitle);
            if (currentProjectView.textContent === projectTitle) {
                document.querySelector("#project-view").replaceChildren();
            }
            displayNav();
        });
        pTag.addEventListener("click", () => {
            displayProject(JSON.parse(localStorage.getItem(projectTitle)));
        });
    });
}
/*
const testButton = document.querySelector("#test");
testButton.addEventListener("click", () => {
    //get local storage
    let storageProject = JSON.parse(localStorage["Test Project"]);
    storageProject = new app.Project(
        storageProject["title"],
        storageProject["description"],
        storageProject["taskList"]
    );
    storageProject.updateProject();
    dom.displayProject(storageProject);
    //if local storage project.title contains spaces then id = replace with _ else leave
});
*/
