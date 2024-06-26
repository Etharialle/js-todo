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
    updateProject() {
        console.log("this is a test");
        console.log(this);
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
export function removeTaskFromProject(index, task) {
    // make the sortby key a variable so the task can be sorted by date, priority, etc.
    const storageProject = JSON.parse(localStorage.getItem(task.project));
    storageProject["taskList"] = _.sortBy(storageProject["taskList"], [
        "dueDate",
    ]);
    storageProject.taskList.splice(index, 1);
    localStorage[storageProject.title] = JSON.stringify(storageProject);
}

export function removeProject(projectTitle) {
    if (localStorage.getItem(projectTitle)) {
        localStorage.removeItem(projectTitle);
    } else {
        console.log("Project doesn't exist");
    }
}
