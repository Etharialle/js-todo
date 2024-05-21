import { newElement } from "./helper";
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
    const parentContainer = document.querySelector("main");
    const newTaskDialog = newElement("dialog");
    const closeButton = newElement("button", "buttons", "Close");
    const newTaskDialogHeading = newElement("h3", "", "Add New Task");

    const newTaskTitle = newElement("input", "", "", "title");
    const newTaskTitleLabel = newElement("label", "", "Task Title");
    newTaskTitleLabel.htmlFor = "title";
    const newTaskDescription = newElement("input", "", "", "description");
    const newTaskDescriptionLabel = newElement("label", "", "Task Description");
    newTaskDescriptionLabel.htmlFor = "description";
    const newTaskDueDate = newElement("input", "", "", "due-date");
    const newTaskDueDateLabel = newElement("label", "", "Due Date");
    newTaskDueDateLabel.htmlFor = "due-date";
    newTaskTitle.type = "text";
    newTaskDescription.type = "text";
    newTaskDueDate.type = "date";

    newTaskDialog.appendChild(newTaskDialogHeading);
    newTaskDialog.appendChild(newTaskTitleLabel);
    newTaskDialog.appendChild(newTaskTitle);
    newTaskDialog.appendChild(newTaskDescriptionLabel);
    newTaskDialog.appendChild(newTaskDescription);
    newTaskDialog.appendChild(newTaskDueDateLabel);
    newTaskDialog.appendChild(newTaskDueDate);

    newTaskDialog.appendChild(closeButton);
    parentContainer.appendChild(newTaskDialog);

    newTaskDialog.showModal();
    closeButton.addEventListener("click", () => {
        console.log("test close");
        newTaskDialog.close("blah");
    });
}
