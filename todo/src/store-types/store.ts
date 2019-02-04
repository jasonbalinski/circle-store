import { storeExtension } from "./storeInterfacer";

/**Type S is the state type for the app */
export interface Store<S> {
    actions: storeExtension<S>;
    selectors: storeExtension<S>;
}