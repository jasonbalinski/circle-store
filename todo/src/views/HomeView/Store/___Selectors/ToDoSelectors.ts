import {computed} from "mobx";
import {ToDo} from "../../../../entities/todo";
import {mapToDos} from "../../../../services-local/todoService";
import {StoreExtension} from "../../../../store-types/StoreExtension";
import {HomeViewState} from "../_____State/HomeViewState";

export class TodoSelectors extends StoreExtension < HomeViewState > {
    /**This is computed to avoid redoing the map function every time the getter is called */
    @computed public get allToDos() : Map < string,
    ToDo > {
        return mapToDos(this.state.ToDoData);
    }
}
