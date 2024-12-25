import reducer from './reducer';
import * as actions from './actionCreators';
import initialState from './state';

describe('Async Reducer', () => {
  it('should update state when pendingAction is dispatched', () => {
    // nothing in the state;
    expect(initialState).toEqual({ status: 'idle', data: null, error: null });

    const expectedState = {
      ...initialState,
      status: 'pending',
    };

    const action = actions.pendingActionCreator();

    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should add error to state when rejectedAction is dispatched', () => {
    const error = new Error('Failed Async Action');

    const expectedState = {
      status: 'rejected',
      error,
      data: null,
    };

    const action = actions.rejectedActionCreator(error);

    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should add data to state when resolvedAction is dispatched', () => {
    const data = {
      id: 1,
      title: 'VVIP',
      quantity: 10,
      price: 100,
    };

    const expectedCurrentState = {
      data,
      error: null,
      status: 'resolved',
    };

    const action = actions.resolvedActionCreator(data);

    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedCurrentState);
  });
});