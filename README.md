# PulseState

PulseState is a state management library that allows you to manage and update the state of your application, and provides the ability to subscribe to state changes through event listeners. It also includes a simple state history feature, which allows you to undo changes to the state and restore previous versions of the state. PulseState supports storing any type of data in the state object, and exports the state management functions as an ES module.

## Features

- **Manage and update application state:** PulseState provides an easy-to-use interface for managing and updating the state of your application. You can use the `getState` and `setState` functions to get and update the current state, respectively.
- **Subscribe to state changes:** PulseState allows you to subscribe to changes in the application state through event listeners. You can use the `subscribe` function to add a listener function to the set of listeners subscribed to state changes, and use the returned `unsubscribe` function to remove the listener when you're done.
- **Undo changes to the state:** PulseState includes a simple state history feature that allows you to undo changes to the state and restore previous versions of the state. You can use the `undo` function to go back to a previous state, and the `clearHistory` function to clear the state history.
- **Store any type of data:** PulseState supports storing any type of data in the state object. You can use `setState` to set the state to a string, number, array, or any other type of data that JavaScript supports.
- **Batch updates to the state:** PulseState includes a `batchUpdate` function that allows you to batch updates to the state and only call listeners once at the end of the batch.
- **Persist state across page refreshes:** PulseState includes a `persistState` function that allows you to persist the state across page refreshes using `localStorage`.

## Functions

- `getState()`: returns a copy of the current state object
- `setState(newState)`: sets the state object to the provided `newState` object and calls all listeners subscribed to state changes
- `subscribe(listener)`: adds a listener function to the set of listeners subscribed to state changes, and returns an `unsubscribe` function that removes the listener when called
- `undo()`: sets the state object to the previous state object on the `history` array, and calls all listeners subscribed to state changes
- `clearHistory()`: clears the `history` array of previous state objects
- `batchUpdate(updateFunction)`: takes an update function that expects the current state as its argument and returns an object with the new state values. The `batchUpdate` function creates a copy of the current state and passes it to the update function, which returns an object with the new state values. The `setState` function is then called with the new state values at the end of the batch, so listeners are only called once.
- `persistState(key)`: takes a key parameter and uses `localStorage` to persist the state across page refreshes. When the function is called, it checks `localStorage` for a saved state with the specified `key`, and sets the state to the saved state if one is found. It then subscribes to state changes and saves the state to `localStorage` whenever it changes.

## Getting Started

To get started with PulseState, you can install it using npm:  
`npm install pulsestate`

Then, you can import the state management functions as an ES module in your code:

```javascript
import {
  getState,
  setState,
  subscribe,
  undo,
  clearHistory,
  batchUpdate,
  persistState,
} from 'pulsestate';

persistState('myApp');

setState({ count: 0 });

subscribe((state) => {
  console.log('State changed:', state);
});

batchUpdate((state) => {
  return { count: state.count + 1 };
});

batchUpdate((state) => {
  return { count: state.count + 1 };
});

undo();
```

In this example, the `persistState` function is used to persist the state across page refreshes using the key `'myApp'`. Whenever the state changes, the new state is saved to `localStorage`. When the page is refreshed or reopened, the saved state is loaded and used as the initial state.

## Contributing

We welcome contributions from the community! If you'd like to contribute to PulseState, here's how to get started:

1. Fork the PulseState repository to your own GitHub account.
2. Clone your fork of the repository to your local machine.
3. Make any changes you'd like to the code, test them thoroughly, and commit your changes to your local repository.
4. Push your changes to your fork of the repository.
5. Create a pull request to submit your changes for review. Be sure to include a clear description of your changes and why they're needed.

We'll review your pull request and provide feedback. If your changes are accepted, we'll merge them into the main branch of the repository.

## Where can i read more how to use the library?  
Visit [PulseState wiki](https://github.com/niborium/PulseState/wiki).  
Here you can read brief explanation of all functions, how to work with multiple states, how to use PulseState with React context and other useful information.

## License

PulseState is licensed under the MIT License.

Feel free to customize the file to fit your project's needs, and don't hesitate to let me know if you have any other questions!
