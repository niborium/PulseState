let state = {};
let listeners = [];
let history = [];

export function getState() {
  return state;
}

export function setState(newState) {
  history.push(state);
  state = newState;
  listeners.forEach((listener) => listener(state));
}

export function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function undo() {
  if (history.length > 0) {
    const previousState = history.pop();
    state = previousState;
    listeners.forEach((listener) => listener(state));
  }
}

export function clearHistory() {
  history = [];
}

export function batchUpdate(updateFunction) {
  const previousState = state;
  state = { ...state, ...updateFunction(state) };
  setState(state);
}

export function persistState(key) {
  const storedState = localStorage.getItem(key);
  if (storedState) {
    state = JSON.parse(storedState);
    listeners.forEach((listener) => listener(state));
  }
  subscribe((state) => {
    localStorage.setItem(key, JSON.stringify(state));
  });
}
