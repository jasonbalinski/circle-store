import {observer, Provider} from "mobx-react";
import React from "react";
import {Store} from "../../../store-types/store";
import {HomeViewState} from "../Store/_____State/HomeViewState";
import {HomeViewSelectors} from "../Store/__ViewSelectors/HomeViewSelectors";
import {HomeViewActions} from "../Store/_Actions/HomeViewActions";
import {FilterControlContainer} from "./FilterControlContainer";
import {ToDoListContainer} from "./ToDoListContainer";

export interface HomeViewProps {
    store : Store < HomeViewState,
    HomeViewActions,
    HomeViewSelectors >;
}

export const HomeView = (props : HomeViewProps) => (
    <Provider store={props.store}>
        <div>
            <FilterControlContainer/>
            <span className="listTitle">My to do list</span>
            <ToDoListContainer/>
        </div>
    </Provider>
);