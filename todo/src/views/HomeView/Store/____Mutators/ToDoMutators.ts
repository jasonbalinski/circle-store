import {action, observable} from "mobx";
import {ToDo} from "../../../../entities/todo";
import {StoreExtension} from "../../../../store-types/StoreExtension";
import {HomeViewState} from "../_____State/HomeViewState";

export class TodoMutators extends StoreExtension < HomeViewState > {
    @action public populateToDoData = (todos : ToDo[]) => {
        this.state.ToDoData = observable.array(todos);
    }

    @action public updateToDo = (name : string, status : boolean) => {
        /** TODO: this is terrible, use a Map or something more optimized here. */
        const todo = this
            .state
            .ToDoData
            .find((td) => td.name === name);
        if (todo) {
            todo.done = status;
        }
    }
}