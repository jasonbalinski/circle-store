/* need privates declared before publics here */
/* tslint:disable:member-ordering */

import {StoreExtension} from "../../../../store-types/StoreExtension";
import {HomeViewState} from "../_____State/HomeViewState";
import {AppStateMutators} from "../____Mutators/AppStateMutators";
import {TodoMutators} from "../____Mutators/ToDoMutators";

/**
/** In a small app to reduce boilerplate, it is reasonable to make the
 * mutator classes themselves public. In larger applications it will
 * be cleaner to implement as shown below, with stubs for each method.
 * If it grows to a very large number, they could be organized into
 * objects as needed to make the interface reasonable.
 */

export class Actions extends StoreExtension < HomeViewState > {
    private appStateMutators = new AppStateMutators(this.state);
    private todoMutators = new TodoMutators(this.state);

    public setStoreReady = this.appStateMutators.setStoreReady;
    public setShowCompleted = this.appStateMutators.setShowCompleted;
    public toggleShowCompleted = this.appStateMutators.toggleShowCompleted;

    public populateToDOs = this.todoMutators.populateToDoData;
    public updateToDo = this.todoMutators.updateToDo;
}