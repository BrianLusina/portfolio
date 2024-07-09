import { LOADING_STATES } from '@constants';
import { IDLE_ACTION_TYPE } from './actionTypes';

export type AsyncState<T> = {
  status: LOADING_STATES;
  data: T | null | undefined;
  error: Error | null | undefined;
};

const initialState: AsyncState<unknown> = {
  status: IDLE_ACTION_TYPE,
  data: null,
  error: null,
};

export default initialState;
