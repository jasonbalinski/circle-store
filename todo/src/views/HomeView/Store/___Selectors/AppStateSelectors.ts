import {StoreExtension} from "../../../../store-types/StoreExtension";
import {HomeViewState} from "../_____State/HomeViewState";

export class AppStateSelectors extends StoreExtension < HomeViewState > {
    get storeReady() : boolean {
        return this
            .state
            .AppState
            .storeReady
            .get();
    }

    get showCompleted() : boolean {
        return this
            .state
            .AppState
            .showCompleted
            .get();
    }
}