import { observer } from "mobx-react";
import React from "react";

export interface FilterControlProps {
    showCompleted?: boolean;
    toggleShowCompleted?: () => void;
}

export const FilterControl = observer((props: FilterControlProps) => (
    <div className="filterControl">
        <label>Show Completed?</label>
        <input type="checkbox" onChange={props.toggleShowCompleted}/>
    </div>
));