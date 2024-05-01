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

type ResolvedAction = {
  type: typeof RESOLVED_ACTION_TYPE;
  data: unknown;
} & Omit<Action, 'data'>;

export type AsyncActions = PendingAction | RejectedAction | ResolvedAction;