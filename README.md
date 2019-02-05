# circle-store
In this repo, you'll find a simple todo app that implements the circle-store pattern I've laid out for React and MobX.  It was created using TypeScript, React and MobX via CreateReactApp --TypeScript, then adding MobX and enabling decorators.  That is the only configuration that was done. You should be able to clone it and run 'npm start' to see it working locally.  Functionally it's very simple allowing you to mark todo's complete or not complete, and filter them based on that property (top right checkbox).

## Overview of the circle pattern
The pattern is so named because of the unidirectional path modifications to application state will take:

`--> Actions --> Modifiers --> Store --> Selectors --> ViewSelectors --> UX -`
`^__________________________________________________________________________|`

This is a store implementation using MobX to create observable state inside that store, with minimal configuration and library dependencies. No libraries outside of MobX plus what CreateReactApp includes are required to implement this pattern.

### Parts of the store

#### Simple two value type store components visualized

<pre>
                                  State                                
          selectorA  ←  observableA   observableB  →  selectorB        
              |              ↑             ↑              |            
              |              |             |              |
              |          mutatorA       mutatorB          |
              |                 ↑       ↑                 |
              |                  Actions                  |
              |                     ↑                     |
              |              ---------------              |
              |              |Store -> (UI)|              |
              |              ---------------              |
              |                     ↑                     |
              |------------>  ViewSelector <--------------|
</pre>

#### State
##### (Observables)
Application state in this pattern is extremely lightweight.  There should be one observable for each type of state data, whether internal state or api state.  Most internal api state can be kept in a single observable object, which allows easy, fast access into all of the state values for the view.

All data in State observables should be simple Interfaced plain JavaScript objects - in other words they should not be classes with any logic on them. This allows the entire state to be serialized for testing, troubleshooting, UI undo scenarios, etc.

Be aware of how MobX treats various data types.  It is recommended to box primitives to avoid inadvertantly losing observable functionality when updating state.

It is allowable in this pattern to use direct API interfaces for your data types stored in state.  Those data types should then be transformed by the selectors on the way to the UI to a UI specific interface or class to avoid coupling the actual UI to the api data types. This allows preservation of the original API data shape and is useful in the case where entities may need to be modified, then sent back to the API with changes.

#### Mutators
##### (MobX Actions)
There should be one Mutator class per observable in the app state (note you might store many related values in a single state observable). Mutators are the only thing allowed to modify state directly. They should always be Mobx actions.

#### Actions 
##### (Async/Await lives here)
There should be a single Action class per view. Actions represent the intent of the UI to modify data. They expose mutators to the application via the store.  They also allow chaining multiple actions or layering API calls via a data service with action calls to update state.  For this reason, Actions are the only place in the store structure that async is recommended. An example could be awaiting a call to the the Data service for initial data hydration, then calling a mutator to populate a state observable with that data.

#### Selectors
##### (MobX Computeds)
Selectors are the inverse of Mutators. There should be one Selector class per observable in the app state (note you might store many related values in a single state observable). Selectors are the only thing allowed to read state directly. If any logic is included beyond a simple getter, selectors should usually be MobX computeds.

#### ViewSelectors
##### (MobX Computeds)
ViewSelectors are the inverse of Actions.  They are the UI's surface for reading any application state, including API data.  Similar to the relationship of Actions to Mutators, ViewSelectors can reference multiple Selector classes.  Consider an application filtering data where the filter state is in one AppState observable, and the data is in another.  The actual filtering logic would be implemented in a reusable service outside the view folder, and a ViewSelector method would be implemented that ties it all together. See the computed for visibleToDos in the HomeViewSelector.ts file in the repo for an example of this.

#### Store
The store class is a simple generic wrapper for an Action and ViewSelector class.  It can be constructed anywhere in the startup logic for a given view, like so: 
<pre>
const state = new HomeViewState();
const actions = new HomeViewActions(state);
const viewSelectors = new HomeViewSelectors(state);
const store = new Store(state, actions, viewSelectors);
</pre>
Note that becasue the state is always serializable, it could be pulled from anywhere. It could even be deserialized from an API call itself, allowing the app state to even be built server side if it's more efficient for the app.

## How to get the most out of this pattern in large projects - reusable code

### Container Pattern
By making use of the container pattern, all UI components are decoupled from the store, allowing them to be easily reused.  Only containers are allowed to talk to the store. Containers must not emit any HTML, they should only be passing props to presentation components that do the work of presenting HTML.

### Folder structure matters!
The code in this sample project has been carefully laid out to maximize code re-use.  The only code tied to a given view (and therefore store) is the minimal stub code to setup the state and store extensions (selectors/actions/mutators/viewSelectors) and the *container components.*

Everything else can be reused.  All significant logic for the state mutation and pivoting/reformatting for UI consumption is held in services.  All UI components are decoupled completely from the store and can be freely reused by creating another container component based on another store. Data services can be reused to populate other stores. Basically - any folders (excluding views of course) at the root of src are there so they can be leveraged again.

## Other considerations and principals

### Inject only what you need
If you read the MobX documentation for inject quickly, you may come away thinking the best thing to do is to inject your entire store into any component that needs it.  This is in my experience a bad idea.  It's a great way to couple your entire UI to the store, and also leave yourself open to inadvertantly calling things you didn't intend to.  Instead, use the extended function utility of inject to inject only what your component requires.  You can find examples of this in the todo app anywhere there's an inject statement. (Which of course only happens in containers!)

### Keep it simple
You may notice while browsing this sample code that some components are laid out functionally (i.e. not classes).  This is intentional. You should prefer the most simple abstractions when creating components, and classes are a rather unnecessary complication for simple stateless components - so don't use one unless you need one.

On the flip side, don't go crazy trying to make your components stateless.  Use classes when they make sense!
