import {StoreExtension} from "./storeInterfacer";

/**Type S is the state type for the app */
export interface Store < S > {
    actions: StoreExtension < S >;
    selectors: StoreExtension < S >;
}