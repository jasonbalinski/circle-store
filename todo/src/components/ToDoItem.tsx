import {observer} from "mobx-react";
import React from "react";
import {ToDo} from "../entities/todo";

export interface TodoItemProps {
    td: ToDo;
    updateToDoStatus: (name: string, value: boolean) => void;
}

export const ToDoItem = observer((props : TodoItemProps) => (
    <div className="todoItem">
        <div className="todoCheckBox">
            <input
                type="checkbox"
                checked={props.td.done}
                data-name={props.td.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    // TODO: refactor this out - maybe make this a class
                    const name = (e.target as HTMLInputElement).getAttribute("data-name");
                    const value = (e.target as HTMLInputElement).checked;
                    console.log("name/value", name, value);
                    props.updateToDoStatus(name!, value);
                }}
            />
        </div>
        <div className="todoText">{props.td.name}</div>
    </div>
));