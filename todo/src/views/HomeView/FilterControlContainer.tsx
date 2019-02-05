import {inject, observer} from "mobx-react";
import React from "react";
import {FilterControl, FilterControlProps} from "../../components/FilterControl";
import {HomeViewProps} from "./HomeView";

const mapStoreToProps = (injected: HomeViewProps) => ({
    showCompleted: injected.store.selectors.appStateSelectors.showCompleted,
    toggleShowCompleted: injected.store.actions.appStateMutators.toggleShowCompleted
});

export const FilterControlContainer = inject(mapStoreToProps)(
    observer(FilterControl)
);