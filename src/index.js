import "./style.css";

// this code to be moved to app.js
class Todo {
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
        this.status = status;
        this.project = project;
    }
}

class Project {
    constructor(todoList) {
        this.title = title;
        this.description = description;
        this.todoList = todoList;
    }
}

const taskOne = new Todo(
    "first task",
    "a description of the task",
    "5/20/2024",
    0,
    "test",
    0,
    "default"
);

taskOne.title = "edited title for task one";
console.log(taskOne);
