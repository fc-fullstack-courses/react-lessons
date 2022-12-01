import ACTION_TYPES from './actionTypes';

// action creator
export function increment() {
  const action = { type: ACTION_TYPES.INCREMENT };
  return action;
}

export function changeStep(step) {
  return { type: ACTION_TYPES.CHANGE_STEP, payload: +step };
}
