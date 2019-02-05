import { observable } from "mobx";
import { ToDo } from "../../../../entities/todo";

export class HomeViewState {
    /**app data */
    @observable public ToDoData : ToDo[] = [];

    /**app state data */
    @observable public AppState = {
        storeReady: observable.box(false),
        showCompleted: observable.box(false)
    };
}
