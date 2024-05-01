/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useReducer, useCallback } from 'react';
import asyncReducer from './reducer';
import * as actions from './actionCreators';
import initialState, { AsyncState } from './state';

/**
 * UseAsync hook used to perform asynchronous actions
 * @param {AsyncState} state state of reducer
 * @returns New state of reducer and run function to run async action
 */
export default function useAsync(state: AsyncState = initialState): {
  status: 'idle' | 'pending' | 'rejected' | 'resolved';
  data: unknown | null | undefined;
  error: Error | undefined | null;
  // eslint-disable-next-line no-unused-vars
  run: (promise: Promise<unknown>) => void;
} {
  const [currentState, dispatch] = useReducer(asyncReducer, {
    // @ts-ignore
    status: 'idle',
    // @ts-ignore
    data: null,
    // @ts-ignore
    error: null,
    ...state,
  });

  const run = useCallback(async (promise: Promise<unknown>) => {
    if (!promise) {
      return;
    }

    dispatch(actions.pendingActionCreator());

    promise.then(
      (data: unknown) => dispatch(actions.resolvedActionCreator(data)),
      (error: Error) => dispatch(actions.rejectedActionCreator(error)),
    );
  }, []);

  return { ...currentState, run };
}