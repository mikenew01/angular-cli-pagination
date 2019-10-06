import Todo from '../models/todo.model';

export default class TodoState {
    todos: Array<Todo>;
}

export const initializeState = () => {
    return { todos: Array<Todo>() };
};