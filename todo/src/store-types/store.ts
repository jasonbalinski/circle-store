import {StoreExtension} from "./StoreExtension";

/**
 * Types:
 * S - state
 * A - actions
 * V - ViewSelectors
 */
export class Store<S,A,V> {
    constructor(protected state:S, public actions: A, public viewSelectors: V) {}
}