/**
 * Abstract class used to create mutators, selectors, actions and viewSelectors.
 * Keeps a private reference to the state so that it can me accessed by the methods
 * defined on each of those components, but always keeps the state hidden from
 * react components.
 */
export abstract class StoreExtension<T> {
    constructor(protected state:T) {}
}