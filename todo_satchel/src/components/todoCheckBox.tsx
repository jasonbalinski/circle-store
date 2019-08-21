import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react';

export interface TodoListCheckboxComponentProps {
    checked: boolean;
    todoId: number;
    updateState: (e: ChangeEvent<HTMLInputElement>) => void;
}

@observer
export class TodoListCheckboxComponent extends React.Component<TodoListCheckboxComponentProps, {}> {
    render() {
        return (
            <>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.updateState} data-todoid={this.props.todoId} />
            </>
        )
    }
}