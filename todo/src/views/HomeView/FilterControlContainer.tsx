import {inject, observer} from "mobx-react";
import React from "react";
import {FilterControl, FilterControlProps} from "../../components/FilterControl";
import {HomeViewProps} from "./HomeView";

export const FilterControlContainer = inject((injected : HomeViewProps) => {
    return (
        {showCompleted: injected.store.selectors.appStateSelectors.showCompleted, toggleShowCompleted: injected.store.actions.appStateMutators.toggleShowCompleted}
    );
})(observer((props : FilterControlProps) => (
    <FilterControl
        showCompleted={props.showCompleted}
        toggleShowCompleted={props.toggleShowCompleted}
    />
)));