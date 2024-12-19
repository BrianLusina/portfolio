import { PENDING_ACTION_TYPE, REJECTED_ACTION_TYPE, RESOLVED_ACTION_TYPE } from './actionTypes';

type Action = {
  data: unknown | null;
  error: null;
};

type PendingAction = {
  type: typeof PENDING_ACTION_TYPE;
} & Action;

type RejectedAction = {
  type: typeof REJECTED_ACTION_TYPE;
  error: Error;
} & Omit<Action, 'error'>;

type ResolvedAction<T> = {
  type: typeof RESOLVED_ACTION_TYPE;
  data: T;
} & Omit<Action, 'data'>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type AsyncActions = PendingAction | RejectedAction | ResolvedAction;