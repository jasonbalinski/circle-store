import {observer} from "mobx-react";
import React from "react";
import {ToDo} from "../entities/todo";
import {ToDoItem} from "./ToDoItem";

export interface TodoListProps {
    todos?: Map < string,
    ToDo >;
}

@observer
export class ToDoList extends React.Component < TodoListProps, {} > {
    constructor(props : TodoListProps) {
        super(props);
    }

    public render() {
        const content = this.createToDoItems();
        return (
            <div>{content}</div>
        );
    }

    private createToDoItems(): JSX.Element[] {
        const result : JSX.Element[] = [];
        if (this.props.todos) {
            this
                .props
                .todos
                .forEach((td) => {
                    result.push(<ToDoItem key={td.name} td={td}/>);
                });
        }
        return result;
    }
}
