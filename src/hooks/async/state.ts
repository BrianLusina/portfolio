import {
    IDLE_ACTION_TYPE,
    PENDING_ACTION_TYPE,
    REJECTED_ACTION_TYPE,
    RESOLVED_ACTION_TYPE,
  } from './actionTypes';
  
  type status =
    | typeof IDLE_ACTION_TYPE
    | typeof PENDING_ACTION_TYPE
    | typeof REJECTED_ACTION_TYPE
    | typeof RESOLVED_ACTION_TYPE;
  
  export type AsyncState = {
    status: status;
    data: unknown | null | undefined;
    error: Error | null | undefined;
  };
  
  const initialState: AsyncState = {
    status: IDLE_ACTION_TYPE,
    data: null,
    error: null,
  };
  
  export default initialState;