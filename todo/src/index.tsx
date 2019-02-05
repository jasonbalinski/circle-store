import React from "react";
import ReactDOM from "react-dom";
import {getToDos} from "./services-api/todoDataService";
import {Store} from "./store-types/store";
import "./styles/site.css";
import {HomeView} from "./views/HomeView/ContainerComponents/HomeView";
import {HomeViewState} from "./views/HomeView/Store/_____State/HomeViewState";
import {ViewSelectors} from "./views/HomeView/Store/__ViewSelectors/ViewSelectors";
import {Actions} from "./views/HomeView/Store/_Actions/Actions";

const state = new HomeViewState();
const actions = new Actions(state);
const viewSelectors = new ViewSelectors(state);
const store = new Store(state, actions, viewSelectors);
store
    .actions
    .populateToDOs(getToDos());
ReactDOM.render(React.createElement(HomeView, {store}), document.getElementById("root"));