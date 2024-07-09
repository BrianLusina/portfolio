/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useReducer, useCallback } from 'react';
import { IDLE, LOADING_STATES } from '@constants';
import asyncReducer from './reducer';
import * as actions from './actionCreators';
import initialState from './state';

/**
 * UseAsync hook used to perform asynchronous actions
 * @param {AsyncState} state state of reducer
 * @returns New state of reducer and run function to run async action
 */
export default function useAsync<T>(state = initialState): {
  status: LOADING_STATES;
  data: T | null | undefined;
  error: Error | undefined | null;
  // eslint-disable-next-line no-unused-vars
  run: (promise: Promise<T>) => void;
} {
  const [currentState, dispatch] = useReducer(asyncReducer, {
    // @ts-ignore
    status: IDLE,
    // @ts-ignore
    data: null,
    // @ts-ignore
    error: null,
    ...state,
  });

  const run = useCallback(async (promise: Promise<T>) => {
    if (!promise) {
      return;
    }

    dispatch(actions.pendingActionCreator());

    promise.then(
      (data: T) => dispatch(actions.resolvedActionCreator(data)),
      (error: Error) => dispatch(actions.rejectedActionCreator(error)),
    );
  }, []);

  return { ...currentState, run };
}