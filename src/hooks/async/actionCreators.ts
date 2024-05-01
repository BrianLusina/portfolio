import { AsyncActions } from './actions';
import { PENDING_ACTION_TYPE, REJECTED_ACTION_TYPE, RESOLVED_ACTION_TYPE } from './actionTypes';

export const pendingActionCreator = (): AsyncActions => ({
  type: PENDING_ACTION_TYPE,
  data: null,
  error: null,
});

export const rejectedActionCreator = (error: Error): AsyncActions => ({
  type: REJECTED_ACTION_TYPE,
  data: null,
  error,
});

export const resolvedActionCreator = (data: unknown): AsyncActions => ({
  type: RESOLVED_ACTION_TYPE,
  data,
  error: null,
});
