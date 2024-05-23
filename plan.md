# Todo App

## Requirements

-   [x] User shall be able to create a task (todo)
-   [x] User shall be able to create a project
-   [x] Each project shall be an object
-   [x] Each project shall include:
    -   [x] title
    -   [x] description of project
    -   [x] array of tasks (todos)
-   [x] Each task shall be an object
-   [x] Each task shall include:
    -   [x] title
    -   [x] description
    -   [x] due date
    -   [x] priority
    -   [x] labels
    -   [x] status
-   [ ] One module for application logic:
    -   [x] Creating new tasks
    -   [x] Changing status of tasks
    -   [x] Changing priority of task
    -   [x] Changing labels of tasks
    -   [ ] Creating new projects
-   [x] One module for DOM manipulation
-   [ ] User interface shall be able to:
    -   [x] View all projects
    -   [x] View all tasks in each project (list view, title, due date, priority)
    -   [x] Expand a task to view/edit details
    -   [x] Delete a todo
-   [x] Use localStorage to store tasks and projects
-   [x] Use modal for adding new tasks
-   [ ] Use modal for adding new projects
-   [x] Use modal for editing tasks

## Todo objects

Use a class for todo objects

```
class todo  {
    constructor(title, description, dueDate, priority, labels, status, project) {
        this.title = title; // String
        this.description = description; // String
        this.dueDate = dueDate; // Date
        this.priority = priority; // Int
        this.labels = labels; // Object (array of strings)
        this.status = status;
        this.project = project;
    }
}

class project {
    constructor(todoList) {
        this.title = title;
        this.description = description;
        this.todoList = todoList;
    }
}
```

## Color Palette

-   background: rgb(2, 96, 110)
-   navbar: rgb(77, 194, 223)
-   font color: rgb(0, 0, 0)
-   accent: rgb(243, 220, 102)
-   other colors:
    -   rgb(255, 151, 38)
    -   rgb(151, 105, 61)
    -   rgb(52, 135, 155)
    -   rgb(255, 255, 255)

## Work Log

5/20/2024

-   Moved class definitions and new task functions to app.js.
-   Added delete task function
-   Added add project button

5/19/2024 - Got localstorage working

5/18/2024 - Tested adding new task to default project
