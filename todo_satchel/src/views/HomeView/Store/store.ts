import { createStore } from 'satcheljs';
import { ToDo } from '../../../types/todo'

export interface HomeViewStore {
    todos: ToDo[];
}

export const getStore = createStore <HomeViewStore>(
    'HomeViewStore',
    {todos: []}
);