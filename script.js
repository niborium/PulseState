let state = {};
let listeners = [];
let history = [];

export function getState() {
  return { ...state };
}

export function setState(newState) {
  if (newState === state) {
    return;
  }
  history.push(state);
  state = newState;
  listeners.forEach((listener) => listener(state));
}

export function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

export function undo() {
  if (history.length === 0) {
    return;
  }
  const previousState = history.pop();
  state = previousState;
  listeners.forEach((listener) => listener(state));
}

export function clearHistory() {
  history = [];
}

export function batchUpdate(updateFunction) {
  const batchState = updateFunction({ ...state });
  setState(batchState);
}
