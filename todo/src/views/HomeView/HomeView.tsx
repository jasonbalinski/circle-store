import {observer, Provider} from "mobx-react";
import React from "react";
import {ToDo} from "../../entities/todo";
import {ToDoStore} from "../../stores/ToDoStore";
import {FilterControlContainer} from "./FilterControlContainer";
import {ToDoListContainer} from "./ToDoListContainer";

export interface HomeViewProps {
    store : ToDoStore;
}

export const HomeView = observer((props : HomeViewProps) => (

    <Provider store={props.store}>
        <div>
            <FilterControlContainer/>
            <span className="listTitle">My to do list</span>
            <ToDoListContainer/>
        </div>
    </Provider>
));