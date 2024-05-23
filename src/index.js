import "./style.css";
import html from "./index.html";
import _ from "lodash";
import * as app from "./app.js";
import * as dom from "./dom.js";

dom.displayProject(JSON.parse(localStorage["Default"]));
dom.displayNav();

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener("click", () => {
    dom.createNewTaskDialog();
    //const addedTask = new app.Task(...app.getNewTaskDetails());
});

const addProjectButton = document.querySelector("#add-project");
addProjectButton.addEventListener("click", () => {
    const addedProject = new app.Project(
        "Another Test Project",
        "This is a test project to check button and class",
        []
    );
    localStorage[addedProject.title] = JSON.stringify(addedProject);
    console.log(JSON.parse(localStorage[addedProject.title]));
});

const projectViewButton = document.querySelector("#view-projects");
projectViewButton.addEventListener("click", () => {
    Object.keys(localStorage).forEach(function (key) {
        const testvar = JSON.parse(localStorage.getItem(key));
        console.log(testvar);
    });
    dom.displayNav();
});
