import { observable, IObservable, ObservableMap, action, computed } from "mobx";
import { Store } from "../store-types/store";
import { todo } from "../entities/todo";
import { storeExtension } from "../store-types/storeInterfacer";
import { visibleToDos, mapToDos } from "../services-local/todoService";

/** Note - in a larger app I'd put these
 * all in seperate files. But for example 
 * purposes I think it's easier to see 
 * them all together.
 */

export class ToDoState {
    /**app data */
    @observable public ToDoData: todo[] = [];
    
    /**app state data */
    @observable public AppState = {
        storeReady: observable.box(false),
        showCompleted: observable.box(false)
    };
}

export class todoMutators extends storeExtension<ToDoState> {
    @action populateToDoData(todos: todo[]) {
        this.state.ToDoData = observable.array(todos);
    }
}

export class todoSelectors extends storeExtension<ToDoState> {
    /**This is computed to avoid redoing the map function every time the getter is called */
    @computed public get allToDos(): Map<string, todo> {
        return mapToDos(this.state.ToDoData);
    }
}

export class appStateMutators extends storeExtension<ToDoState> {
    @action setStoreReady(newValue: boolean) {
        this.state.AppState.storeReady.set(newValue);
    }
    @action setShowCompleted(newValue: boolean) {
        this.state.AppState.showCompleted.set(newValue);
    }
}

export class appStateSelectors extends storeExtension<ToDoState> {
    get storeReady(): boolean {
        return this.state.AppState.storeReady.get();
    }

    get showCompleted(): boolean {
        return this.state.AppState.showCompleted.get();
    }
}

export class actions extends storeExtension<ToDoState> {
    public appStateMutators = new appStateMutators(this.state);
    public todoMutators = new todoMutators(this.state);
}

export class viewSelectors extends storeExtension<ToDoState> {
    public appStateSelectors = new appStateSelectors(this.state);
    public todoSelectors = new todoSelectors(this.state);

    /**note this is at the viewSelectors layer, because it uses data from multiple selectors */
    @computed public get visibleToDos(){
        return visibleToDos(this.todoSelectors.allToDos, this.appStateSelectors.showCompleted);
    }
}

export class ToDoStore implements Store<ToDoState> {
    constructor (private state: ToDoState){ }
    public actions = new actions(this.state);
    public selectors = new viewSelectors(this.state);
}