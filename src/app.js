export class Task {
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

export class Project {
    constructor(title, description, taskList) {
        this.title = title; // String
        this.description = description; // String
        this.taskList = taskList; // Array of tasks
    }
}

export const defaultProject = new Project(
    "Default",
    "This is the default project where new tasks go if an alternate project isn't chosen",
    []
);

// need to get data from input fields and store in array
export function getNewTaskDetails() {
    const newTaskDetails = document.querySelectorAll("input");
    // parse data into array
    const newTaskArray = [
        "delete test task",
        "a task to be deleted",
        "5/21/2024",
        0,
        "test",
        0,
        "Test Project",
    ];
    return newTaskArray;
}
export function addTaskToProject(addedTask) {
    if (localStorage[addedTask.project]) {
        const storageProject = JSON.parse(
            localStorage.getItem(addedTask.project)
        );
        storageProject.taskList.push(addedTask);
        localStorage[storageProject.title] = JSON.stringify(storageProject);
    } else {
        console.log("project doesn't exist, setting project to default");
        addedTask.project = "Default";
        if (localStorage[defaultProject.title]) {
            const storageProject = JSON.parse(
                localStorage.getItem(defaultProject.title)
            );
            storageProject.taskList.push(addedTask);
            localStorage[storageProject.title] = JSON.stringify(storageProject);
        }
        defaultProject.taskList.push(addedTask);
        localStorage[defaultProject.title] = JSON.stringify(defaultProject);
    }
}

// delete task
/*
1) get project from localStorage
2) display tasks.  each task should get an id of "project.title-project.tasklist.index"
3) splice array 

*/
export function removeTaskFromProject(taskId) {
    //taskId is string
    //sample taskId = Default-2
    const taskIdSplit = taskId.split("-");
    const storageProject = JSON.parse(localStorage.getItem(taskIdSplit[0]));
    storageProject.taskList.splice(taskIdSplit[1], 1);
    localStorage[storageProject.title] = JSON.stringify(storageProject);
}
