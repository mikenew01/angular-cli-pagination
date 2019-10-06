import {createAction, props } from '@ngrx/store';
import Todo from '../models/todo.model';

export const getTodoAction = createAction('[Todo] - Get Todo');

export const createTodoAction = createAction(
    '[Todo] - Create Todo',
    props<Todo>() 
);

export const beginGetTodoAction = createAction('[Todo] - Begin Get Todo');

export const successGetTodoAction = createAction(
    '[Todo] - Success Get Todo',
    props<{payload: Todo[]}>()
);

export const beginCreateTodoAction = createAction(
    '[Todo] - Begin Create Todo',
    props<{payload: Todo}>()
);

export const successCreateTodoAction = createAction(
    '[Todo] - Success Create Todo',
    props<{payload: Todo}>()
);

export const errorTodoAction = createAction(
    '[Todo] - Error', 
    props<Error>()
);

