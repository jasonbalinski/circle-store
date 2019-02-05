import {observer} from "mobx-react";
import React from "react";
import {ToDo} from "../entities/todo";

export interface TodoItemProps {
    td : ToDo;
}

export const ToDoItem = observer((props : TodoItemProps) => (
    <div className="todoItem">
        <div className="todoCheckBox">{props
                .td
                .done
                .toString()}</div>
        <div className="todoText">{props.td.name}</div>
    </div>
));