import {StoreExtension} from "./StoreExtension";

/**
 * Simple generic store class. Serves as a strongly typed
 * public interface into the store, hiding actual state
 * but publishing actions and viewSelectors.
 *
 * Types:
 * S - state
 * A - actions
 * V - ViewSelectors
 */
export class Store<S,A,V> {
    constructor(private state:S, public actions: A, public viewSelectors: V) {}
}