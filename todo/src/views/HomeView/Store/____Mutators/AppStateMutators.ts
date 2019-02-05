import {action} from "mobx";
import {StoreExtension} from "../../../../store-types/StoreExtension";
import {HomeViewState} from "../_____State/HomeViewState";

export class AppStateMutators extends StoreExtension < HomeViewState > {
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
