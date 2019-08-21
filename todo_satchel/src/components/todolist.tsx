import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react';
import { getStore } from '../views/HomeView/Store/store';
import { TodoListCheckboxComponent } from './todoCheckBox';
import { updateToDo } from '../views/HomeView/Store/actions';

@observer
export class TodoListComponent extends React.Component<any, any> {
    render() {
        return(
            <div>
                {getStore().todos.map(todo => (
                    <div key={todo.id}>
                        {`${todo.text} - `} <TodoListCheckboxComponent checked={todo.done} updateState={this.updateState} todoId={todo.id} />
                    </div>
                ))}
            </div>
        );
    }

    private updateState = (e: ChangeEvent<HTMLInputElement>): void => {
        const id = e.target.getAttribute("data-todoid") || 0;
        updateToDo(+id, e.target.checked);
    }
}
