import { action, mutator } from 'satcheljs';
import { getStore } from './store';

export const addTodo = action(
    'ADD_TODO',
    (text: string) => ({ text: text })
);

export const updateToDo = action(
    'Mark_ToDo_Done',
    (todoId: number, done: boolean) => ({ id: todoId, done: done })
);

mutator(addTodo, (actionMessage) => {
    getStore().todos.push({
        id: Math.round(Math.random() * 100),
        text: actionMessage.text,
        done: false
    });
});

mutator(updateToDo, (actionMessage) => {
    const todo = getStore().todos.find((td) => td.id === actionMessage.id);
    if (todo) {todo.done = actionMessage.done};
});

addTodo('Task 1');
addTodo('Task 2');