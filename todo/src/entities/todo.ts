export interface ToDo {
    name:string;
    done: boolean;
}

export function createToDo(name: string, done: boolean = false): ToDo {
    return {name, done};
}