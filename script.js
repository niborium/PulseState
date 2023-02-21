let state;
const listeners = new Set();
const history = [];

export function getState() {
  return state;
}

export function setState(newState) {
  history.push(state);
  state = newState;
  listeners.forEach((listener) => listener(state));
}

export function subscribe(listener) {
  listeners.add(listener);
  return function unsubscribe() {
    listeners.delete(listener);
  };
}

export function undo() {
  if (history.length > 0) {
    const previousState = history.pop();
    setState(previousState);
  }
}

export function clearHistory() {
  history.length = 0;
}
