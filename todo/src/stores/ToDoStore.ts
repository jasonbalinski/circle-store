import {action, computed, IObservable, observable, ObservableMap} from "mobx";
import {ToDo} from "../entities/todo";
import {mapToDos, visibleToDos} from "../services-local/todoService";
import {Store} from "../store-types/store";
import {StoreExtension} from "../store-types/storeInterfacer";

/** Note - in a larger app I'd put these
 * all in seperate files. But for example
 * purposes I think it's easier to see
 * them all together.
 */

export class ToDoState {
    /**app data */
    @observable public ToDoData : ToDo[] = [];

    /**app state data */
    @observable public AppState = {
        storeReady: observable.box(false),
        showCompleted: observable.box(false)
    };
}

export class TodoMutators extends StoreExtension < ToDoState > {
    @action public populateToDoData = (todos : ToDo[]) => {
        this.state.ToDoData = observable.array(todos);
    }

    @action public updateToDo = (name: string, status: boolean) => {
        /** TODO: this is terrible, use a Map or something more optimized here. */
        const todo = this.state.ToDoData.find((td) => td.name === name);
        if (todo) {
            todo.done = status;
        }
    }
}

export class TodoSelectors extends StoreExtension < ToDoState > {
    /**This is computed to avoid redoing the map function every time the getter is called */
    @computed public get allToDos(): Map < string,
    ToDo > {
        return mapToDos(this.state.ToDoData);
    }
}

export class AppStateMutators extends StoreExtension < ToDoState > {
    @action public setStoreReady(newValue : boolean) {
        this
            .state
            .AppState
            .storeReady
            .set(newValue);
    }
    @action public setShowCompleted(newValue : boolean) {
        this
            .state
            .AppState
            .showCompleted
            .set(newValue);
    }
    @action public toggleShowCompleted = () => {
        this
            .state
            .AppState
            .showCompleted
            .set(!this.state.AppState.showCompleted.get());
    }
}

export class AppStateSelectors extends StoreExtension < ToDoState > {
    get storeReady(): boolean {
        return this
            .state
            .AppState
            .storeReady
            .get();
    }

    get showCompleted(): boolean {
        return this
            .state
            .AppState
            .showCompleted
            .get();
    }
}

export class Actions extends StoreExtension < ToDoState > {
    public appStateMutators = new AppStateMutators(this.state);
    public todoMutators = new TodoMutators(this.state);
}

export class ViewSelectors extends StoreExtension < ToDoState > {
    public appStateSelectors = new AppStateSelectors(this.state);
    public todoSelectors = new TodoSelectors(this.state);

    /**note this is at the viewSelectors layer, because it uses data from multiple selectors */
    @computed public get visibleToDos() {
        return visibleToDos(this.todoSelectors.allToDos, this.appStateSelectors.showCompleted);
    }
}

export class ToDoStore implements Store < ToDoState > {
    public actions = new Actions(this.state);
    public selectors = new ViewSelectors(this.state);
    constructor(private state : ToDoState) {}
}