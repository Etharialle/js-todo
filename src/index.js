import "./style.css";
import html from "./index.html";
import * as app from "./app.js";
import * as dom from "./dom.js";

dom.displayProject(JSON.parse(localStorage["Default"]));

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener("click", () => {
    dom.createNewTaskDialog();
    //const addedTask = new app.Task(...app.getNewTaskDetails());
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
