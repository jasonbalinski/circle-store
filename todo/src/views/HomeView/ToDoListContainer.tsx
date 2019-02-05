import {inject, observer} from "mobx-react";
import React from "react";
import {ToDoList, TodoListProps} from "../../components/ToDoList";
import {HomeViewProps} from "./HomeView";

const mapStoreToProps = (injected: HomeViewProps) => ({
    todos: injected.store.selectors.visibleToDos,
    updateToDoState: injected.store.actions.todoMutators.updateToDo
});

export const ToDoListContainer = inject(mapStoreToProps)(
    observer(ToDoList)
);