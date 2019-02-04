import React from 'react';
import ReactDOM from 'react-dom';
import { ListView } from './views/listView';
import "./styles/site.css";
import { ToDoStore, ToDoState } from './stores/ToDoStore';
import { getToDos } from './services-api/todoDataService';

const state = new ToDoState()
const store = new ToDoStore(state);
store.actions.todoMutators.populateToDoData(getToDos());
ReactDOM.render(React.createElement(ListView, {store}), document.getElementById('root'));