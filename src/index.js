import "./style.css";
import * as app from "./app.js";

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener("click", () => {
    const addedTask = new app.Task(...app.getNewTaskDetails());
    app.addTaskToProject(addedTask);
    console.log(addedTask);
    console.log(JSON.parse(localStorage[addedTask.project]));
});

const addProjectButton = document.querySelector("#add-project");
addProjectButton.addEventListener("click", () => {
    const addedProject = new app.Project(
        "Test Project",
        "This is a test project to check button and class",
        []
    );
    localStorage[addedProject.title] = JSON.stringify(addedProject);
    //console.log(addedTask);
    console.log(JSON.parse(localStorage[addedProject.title]));
});

const projectViewButton = document.querySelector("#project-storage");
projectViewButton.addEventListener("click", () => {
    Object.keys(localStorage).forEach(function (key) {
        console.log(JSON.parse(localStorage.getItem(key)));
    });
});

const removeTaskButton = document.querySelector("#remove-task");
removeTaskButton.addEventListener("click", () => {
    app.removeTaskFromProject("Default-3");
});
