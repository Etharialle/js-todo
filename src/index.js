import "./style.css";

// this code to be moved to app.js
// Class definitions
class Task {
    constructor(
        title,
        description,
        dueDate,
        priority, // int 0-3
        labels,
        status, // enum (0 = not started, 1 = in progress, 2 = finished)
        project
    ) {
        this.title = title; // String
        this.description = description; // String
        this.dueDate = dueDate; // Date
        this.priority = priority; // Int
        this.labels = labels; // Object (array of strings)
        this.status = status; //
        this.project = project; // String - title of project
    }
}

class Project {
    constructor(title, description, taskList) {
        this.title = title; // String
        this.description = description; // String
        this.taskList = taskList; // Array of tasks
    }
}

const defaultProject = new Project(
    "Default",
    "This is the default project where new tasks go if an alternate project isn't chosen",
    []
);
// test code
//const taskOne = new Task(
//    "first task",
//    "a description of the task",
//    "5/20/2024",
//    0,
//    "test",
//    0,
//    "default"
//);

// need to get data from input fields and store in array
function getNewTaskDetails() {
    const newTaskDetails = document.querySelectorAll("input");
    // parse data into array
    const newTaskArray = [
        "first task",
        "a description of the task",
        "5/20/2024",
        0,
        "test",
        0,
        "default",
    ];
    console.log(newTaskArray);
    return newTaskArray;
}
function addTaskToProject(addedTask) {
    // start with default project
    defaultProject.taskList.push(addedTask);
}

const testButton = document.querySelector("#test");
testButton.addEventListener("click", () => {
    const addedTask = new Task(...getNewTaskDetails());
    addTaskToProject(addedTask);
    console.log(defaultProject);
});

//taskOne.title = "edited title for task one";
//console.log(taskOne);
