import React from "react";
import ReactDOM from "react-dom";
import {ToDoDataService} from "./services-api/todoDataService";
import {Store} from "./store-types/store";
import "./styles/site.css";
import {HomeView} from "./views/HomeView/HomeView";
import {HomeViewState} from "./views/HomeView/Store/_____State/HomeViewState";
import {HomeViewSelectors} from "./views/HomeView/Store/__ViewSelectors/HomeViewSelectors";
import {HomeViewActions} from "./views/HomeView/Store/_Actions/HomeViewActions";

const state = new HomeViewState();
const actions = new HomeViewActions(state);
const viewSelectors = new HomeViewSelectors(state);
const store = new Store(state, actions, viewSelectors);
store
    .actions
    .populateToDOs(ToDoDataService.getToDos());
ReactDOM.render(React.createElement(HomeView, {store}), document.getElementById("root"));