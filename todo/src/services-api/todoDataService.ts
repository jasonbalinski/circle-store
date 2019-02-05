import {createToDo, ToDo} from "../entities/todo";

export function getToDos(): ToDo[] {
    const todos : ToDo[] = [];
    todos.push(createToDo("Get milk"));
    todos.push(createToDo("Get cereal"));
    todos.push(createToDo("Get eggs"));
    todos.push(createToDo("Get bacon"));
    todos.push(createToDo("Get bananas", true));
    todos.push(createToDo("Get avacados", true));
    return todos;
}