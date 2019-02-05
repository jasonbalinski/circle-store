import {inject, observer} from "mobx-react";
import React from "react";
import {ToDoList, TodoListProps} from "../../components/ToDoList";
import {HomeViewProps} from "./HomeView";

export const ToDoListContainer = inject((injected : HomeViewProps) => ({todos: injected.store.selectors.visibleToDos}))(observer((props : TodoListProps) => (<ToDoList todos={props.todos}/>)));