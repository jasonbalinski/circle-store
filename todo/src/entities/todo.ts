export interface todo {
    name:string;
    done: boolean;
}

export function createToDo (name: string, done: boolean = false): todo {
    return {name: name, done: done};
}