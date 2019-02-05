import React from "react";
import ReactDOM from "react-dom";
import {getToDos} from "./services-api/todoDataService";
import {ToDoState, ToDoStore} from "./stores/ToDoStore";
import "./styles/site.css";
import { HomeView } from "./views/HomeView/HomeView";

const state = new ToDoState();
const store = new ToDoStore(state);
store
    .actions
    .todoMutators
    .populateToDoData(getToDos());
ReactDOM.render(React.createElement(HomeView, {store}), document.getElementById("root"));