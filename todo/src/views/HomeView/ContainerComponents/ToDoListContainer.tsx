import {inject, observer} from "mobx-react";
import React from "react";
import {ToDoList} from "../../../components/ToDoList";
import {HomeViewProps} from "./HomeView";

const mapStoreToProps = (injected : HomeViewProps) => ({
    todos: injected.store.viewSelectors.visibleToDos,
    updateToDoState: injected.store.actions.updateToDo
});

export const ToDoListContainer = inject(mapStoreToProps)(observer(ToDoList));