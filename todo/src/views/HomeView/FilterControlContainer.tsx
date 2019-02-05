import {inject, observer} from "mobx-react";
import React from "react";
import {FilterControl, FilterControlProps} from "../../components/FilterControl";
import {HomeViewProps} from "./HomeView";

const mapStoreToProps = (injected: HomeViewProps) => ({
    showCompleted: injected.store.viewSelectors.showCompleted,
    toggleShowCompleted: injected.store.actions.toggleShowCompleted
});

export const FilterControlContainer = inject(mapStoreToProps)(
    observer(FilterControl)
);