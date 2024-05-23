import "./style.css";
import html from "./index.html";
import _ from "lodash";
import * as app from "./app.js";
import * as dom from "./dom.js";

console.log(localStorage.length);
console.log(app.defaultProject);

if (localStorage.length === 0) {
    localStorage["Default"] = JSON.stringify(app.defaultProject);
}
if (localStorage.Default) {
    dom.displayProject(JSON.parse(localStorage.Default));
} else {
    dom.displayProject(JSON.parse(localStorage.getItem(localStorage.key(0))));
}
dom.displayNav();

const addTaskButton = document.querySelector("#add-task");
addTaskButton.addEventListener("click", () => {
    dom.createNewTaskDialog();
    //const addedTask = new app.Task(...app.getNewTaskDetails());
});

const addProjectButton = document.querySelector("#add-project");
addProjectButton.addEventListener("click", () => {
    dom.createNewProjectDialog();
});

/*
const projectViewButton = document.querySelector("#view-projects");
projectViewButton.addEventListener("click", () => {
    Object.keys(localStorage).forEach(function (key) {
        const testvar = JSON.parse(localStorage.getItem(key));
        console.log(testvar);
    });
    dom.displayNav();
});
*/
