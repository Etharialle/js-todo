# Todo App

## Requirements

- User shall be able to create a task (todo)
- User shall be able to create a project
- Each project shall be an object
- Each project shall include:
  - title
  - description of project
  - array of tasks (todos)
- Each task shall be an object
- Each task shall include:
  - title
  - description
  - due date
  - priority
  - labels
  - status
- One module for application logic:
  - Creating new tasks
  - Changing status of tasks
  - Changing priority of task
  - Changing labels of tasks
  - Creating new projects
- One module for DOM manipulation
- User interface shall be able to:
  - View all projects
  - View all tasks in each project (list view, title, due date, priority)
  - Expand a task to view/edit details
  - Delete a todo
- Use localStorage to store tasks and projects

## Todo objects

Use a class for todo objects

```
class todo  {
    constructor(title, description, dueDate, priority, labels, status) {
        this.title = title; // String
        this.description = description; // String
        this.dueDate = dueDate; // Date
        this.priority = priority; // Int
        this.labels = labels; // Object (array of strings)
        this.status = status;
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
