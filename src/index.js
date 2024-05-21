import "./style.css";
import html from "./index.html";
import * as app from "./app.js";

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener("click", () => {
    const addedTask = new app.Task(...app.getNewTaskDetails());
    app.addTaskToProject(addedTask);
    console.log(addedTask);
});

const addProjectButton = document.querySelector("#add-project");
addProjectButton.addEventListener("click", () => {
    const addedProject = new app.Project(
        "Test Project",
        "This is a test project to check button and class",
        []
    );
    localStorage[addedProject.title] = JSON.stringify(addedProject);
    console.log(JSON.parse(localStorage[addedProject.title]));
});

const projectViewButton = document.querySelector("#view-projects");
projectViewButton.addEventListener("click", () => {
    Object.keys(localStorage).forEach(function (key) {
        console.log(JSON.parse(localStorage.getItem(key)));
    });
});

const removeTaskButton = document.querySelector("#remove-task");
removeTaskButton.addEventListener("click", () => {
    app.removeTaskFromProject("Test Project-3");
});
