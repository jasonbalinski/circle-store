import {ToDo} from "../entities/todo";

export class ToDoService {
    public static visibleToDos(todos : Map < string, ToDo >, showCompleted : boolean): Map <string, ToDo> {
        if(showCompleted) {
            return todos;
        }
        else {
            // this is a terribly innefficient way to do this.  Don't do this.  For
            // illustration only.
            return ToDoService.mapToDos(Array.from(todos.values()).filter((td) => {
                return !td.done;
            }));
        }
    }

    public static mapToDos(todos : ToDo[]): Map <string, ToDo> {
        return new Map(todos.map((td): [string, ToDo] => [td.name, td]));
    }
}