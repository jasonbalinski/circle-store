import {observer, Provider, inject} from "mobx-react";
import { todo } from "../entities/todo";
import { ReactElement } from "react";
import React from 'react';
import { ToDoStore, ToDoState } from "../stores/ToDoStore";

interface listViewProps {
    store: ToDoStore;
}

export const ListView = observer((props: listViewProps) => 
    <div>
        <span className="ListTitle">My to do list</span>
        <Provider store={props.store}>
            <ToDoListContainer />
        </Provider>
    </div>
);

interface todoListProps {
    todos?: Map<string, todo>;
}

export const ToDoListContainer = 
    inject((injected: listViewProps) => ({
        todos: injected.store.selectors.visibleToDos
    }))(
    observer((props: todoListProps) => 
    <div>
        <ToDoList todos={props.todos} />
    </div>
));

@observer
export class ToDoList extends React.Component <todoListProps, {}> {
    constructor(props : todoListProps) {
        super(props);
    }

    render() {
        const content = this.createToDoItems();
        return (
            <div>{content}</div>
        )
    }

    private createToDoItems(): JSX.Element[] {
        const result: JSX.Element[] = [];
        if (this.props.todos) {
            this.props.todos.forEach((td) => {
                result.push(
                    <div key={td.name}><ToDoItem td={td} /></div>
                )
            })
        }
        return result;
    }
}

export interface todoItemProps {
    td: todo;
}

export const ToDoItem = observer((props: todoItemProps) => 
    <div>
        <div className="todoCheckBox">{props.td.done.toString()}</div>
        <div className="todoItem">{props.td.name}</div>
    </div>
);