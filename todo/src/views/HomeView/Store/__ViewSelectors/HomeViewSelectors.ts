import {computed} from "mobx";
import { ToDo } from "../../../../entities/todo";
import { ToDoService } from "../../../../services-local/todoService";
import {StoreExtension} from "../../../../store-types/StoreExtension";
import {HomeViewState} from "../_____State/HomeViewState";
import {AppStateSelectors} from "../___Selectors/AppStateSelectors";
import {TodoSelectors} from "../___Selectors/ToDoSelectors";

/**
/** In a small app to reduce boilerplate, it is reasonable to make the
 * selector classes themselves public. In larger applications it will
 * be cleaner to implement as shown below, with stubs for each method.
 * If it grows to a very large number, they could be organized into
 * objects as needed to make the interface reasonable.
 */
export class HomeViewSelectors extends StoreExtension < HomeViewState > {
    private appStateSelectors = new AppStateSelectors(this.state);
    private todoSelectors = new TodoSelectors(this.state);

    /**note the difference between this method and the others.
     * this one references multiple observables in the state, and so
     * this logic will sit up a level from the individual selectors.
     * The actual logic is stored in the ToDoService which is reusable
     * by other stores.
     */
    @computed public get visibleToDos() {
        return ToDoService.visibleToDos(this.todoSelectors.allToDos, this.appStateSelectors.showCompleted);
    }

    public get storeReady():boolean {
        return this.appStateSelectors.storeReady;
    }

    public get showCompleted():boolean {
        return this.appStateSelectors.showCompleted;
    }

    public get allToDos():Map<string, ToDo> {
        return this.todoSelectors.allToDos;
    }
}