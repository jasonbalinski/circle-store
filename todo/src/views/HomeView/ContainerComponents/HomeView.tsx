import {observer, Provider} from "mobx-react";
import React from "react";
import {Store} from "../../../store-types/store";
import { HomeViewState } from "../Store/_____State/HomeViewState";
import {ViewSelectors} from "../Store/__ViewSelectors/ViewSelectors";
import {Actions} from "../Store/_Actions/Actions";
import {FilterControlContainer} from "./FilterControlContainer";
import {ToDoListContainer} from "./ToDoListContainer";

export interface HomeViewProps {
    store : Store <HomeViewState, Actions, ViewSelectors>;
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