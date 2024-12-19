import initialState, { AsyncState } from './state';
import { AsyncActions } from './actions';
import * as types from './actionTypes';

export default function asyncReducer<T>(state = initialState, action: AsyncActions): AsyncState<T> {
  switch (action.type) {
    case types.PENDING_ACTION_TYPE: {
      return { status: 'pending', data: null, error: null };
    }

    case types.REJECTED_ACTION_TYPE: {
      const { error } = action;
      return { status: 'rejected', data: null, error };
    }

    case types.RESOLVED_ACTION_TYPE: {
      const { data } = action;
      return { status: 'resolved', data, error: null };
    }

    default:
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return state;
  }
}