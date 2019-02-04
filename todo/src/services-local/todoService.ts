import { todo } from "../entities/todo";

export function visibleToDos (todos: Map<string, todo>, showCompleted: boolean): Map<string, todo> {
    if (showCompleted) {
        return todos;
    } else {
        // this is a terribly innefficient way to do this.  Don't do this.  For illustration only.
        return mapToDos(Array.from(todos.values()).filter((td) => {return !td.done}));
    }
}

export function mapToDos(todos: todo[]): Map<string, todo> {
    return new Map(
        todos.map((td): [string, todo] => [td.name, td])
    );
}