import { todo, createToDo } from "../entities/todo";
import { string } from "prop-types";

export function getToDos(): todo[] {
    const todos: todo[] = [];
    todos.push(createToDo("Get milk"));
    todos.push(createToDo("Get cereal"));
    todos.push(createToDo("Get eggs"));
    todos.push(createToDo("Get bacon"));
    todos.push(createToDo("Get bananas", true));
    todos.push(createToDo("Get avacados", true));
    return todos;
}