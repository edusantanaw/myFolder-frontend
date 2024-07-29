import { createReducer, on } from '@ngrx/store';
import { authenticate } from './user.actions';

const initialState = {
  token: null,
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(authenticate, (state) => state)
);
