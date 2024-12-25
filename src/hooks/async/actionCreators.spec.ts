import {
    pendingActionCreator,
    rejectedActionCreator,
    resolvedActionCreator,
  } from './actionCreators';
  import { PENDING_ACTION_TYPE, REJECTED_ACTION_TYPE, RESOLVED_ACTION_TYPE } from './actionTypes';
  
  describe('Async ActionCreators', () => {
    it('should create a pendingAction', () => {
      const actualAction = pendingActionCreator();
  
      const expectedAction = {
        type: PENDING_ACTION_TYPE,
        data: null,
        error: null,
      };
  
      expect(actualAction).toEqual(expectedAction);
    });
  
    it('should create a rejectedAction', () => {
      const error = new Error('some error');
      const actualAction = rejectedActionCreator(error);
  
      const expectedAction = {
        type: REJECTED_ACTION_TYPE,
        error,
        data: null,
      };
  
      expect(actualAction).toEqual(expectedAction);
    });
  
    it('should create a resolvedAction', () => {
      const data = {
        id: 'someId',
        information: 'some info',
      };
  
      const actualAction = resolvedActionCreator(data);
  
      const expectedAction = {
        type: RESOLVED_ACTION_TYPE,
        data,
        error: null,
      };
  
      expect(actualAction).toEqual(expectedAction);
    });
  });