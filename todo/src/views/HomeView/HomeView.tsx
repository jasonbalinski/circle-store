import {observer, Provider} from "mobx-react";
import React from "react";
import {Store} from "../../store-types/store";
import {FilterControlContainer} from "./ContainerComponents/FilterControlContainer";
import {ToDoListContainer} from "./ContainerComponents/ToDoListContainer";
import {HomeViewState} from "./Store/_____State/HomeViewState";
import {HomeViewSelectors} from "./Store/__ViewSelectors/HomeViewSelectors";
import {HomeViewActions} from "./Store/_Actions/HomeViewActions";

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