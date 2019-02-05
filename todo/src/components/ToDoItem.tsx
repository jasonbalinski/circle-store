import {observer} from "mobx-react";
import React from "react";
import { render } from "react-dom";
import {ToDo} from "../entities/todo";

export interface TodoItemProps {
    td: ToDo;
    updateToDoStatus: (name: string, value: boolean) => void;
}

@observer
export class ToDoItem extends React.Component<TodoItemProps, {}> {
    constructor(props: TodoItemProps) {
        super(props);
    }

    public render() {
        return (
            <div className="todoItem">
            <div className="todoCheckBox">
                <input
                    type="checkbox"
                    checked={this.props.td.done}
                    data-name={this.props.td.name}
                    onChange={this.onChange}
                />
            </div>
            <div className="todoText">{this.props.td.name}</div>
        </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = (e.target as HTMLInputElement).getAttribute("data-name");
        const value = (e.target as HTMLInputElement).checked;
        this.props.updateToDoStatus(name!, value);
    }
}