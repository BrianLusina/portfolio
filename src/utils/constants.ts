export const IDLE = 'idle';
export const LOADING = 'loading';
export const SUCCESS = 'success';
export const FAILED = 'failed';
export const ERROR = 'error';
export const RESOLVED = 'resolved';
export const REJECTED = 'rejected';
export const PENDING = 'pending';

export type LOADING_STATES =
  | typeof IDLE
  | typeof FAILED
  | typeof ERROR
  | typeof SUCCESS
  | typeof REJECTED
  | typeof RESOLVED
  | typeof PENDING
  | typeof LOADING;
