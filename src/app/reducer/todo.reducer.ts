import TodoState, { initializeState } from './todo.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as TodoActions from './todo.action';
import Todo from '../models/todo.model';

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(TodoActions.getTodoAction, state => state),

    on(TodoActions.createTodoAction, (state: TodoState, todo: Todo) => {
        return {...state, todos: [...state.todos, todo], TodoError: null}
    }),

    on(TodoActions.successGetTodoAction, (state: TodoState, {payload}) => {
        return {...state, todos: payload};
    }),

    on(TodoActions.successCreateTodoAction, (state: TodoState, {payload}) => {
        return {...state, todos: [...state.todos, payload], TodoError: null};
    }),

    on(TodoActions.errorTodoAction, (state: TodoState, error: Error) => {
        console.log('Error: ', error);
        return {...state, TodoError: error};
    })
);

export function todoReducer(state: TodoState | undefined, action: Action) {
    return reducer(state, action);
}