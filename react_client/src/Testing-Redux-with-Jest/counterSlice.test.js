import reducer, { increment, incrementByAmount, fetchDummyData } from './counterSlice';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ value: 0, status: 'idle' });
  });

  it('should handle increment', () => {
    const state = reducer({ value: 0, status: 'idle' }, increment());
    expect(state.value).toBe(1);
  });

  it('should handle incrementByAmount', () => {
    const state = reducer({ value: 2, status: 'idle' }, incrementByAmount(5));
    expect(state.value).toBe(7);
  });

  it('should handle fetchDummyData.fulfilled', () => {
    const action = {
      type: fetchDummyData.fulfilled.type,
      payload: 5
    };
    const state = reducer({ value: 2, status: 'loading' }, action);
    expect(state.status).toBe('succeeded');
    expect(state.value).toBe(7);
  });
});
