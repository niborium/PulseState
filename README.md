# PulseState

PulseState is a state management library that allows you to manage and update the state of your application, and provides the ability to subscribe to state changes through event listeners. It also includes a simple state history feature, which allows you to undo changes to the state and restore previous versions of the state. PulseState supports storing any type of data in the state object, and exports the state management functions as an ES module.

## Features

- **Manage and update application state:** PulseState provides an easy-to-use interface for managing and updating the state of your application. You can use the `getState` and `setState` functions to get and update the current state, respectively.
- **Subscribe to state changes:** PulseState allows you to subscribe to changes in the application state through event listeners. You can use the `subscribe` function to add a listener function to the set of listeners subscribed to state changes, and use the returned `unsubscribe` function to remove the listener when you're done.
- **Undo changes to the state:** PulseState includes a simple state history feature that allows you to undo changes to the state and restore previous versions of the state. You can use the `undo` function to go back to a previous state, and the `clearHistory` function to clear the state history.
- **Store any type of data:** PulseState supports storing any type of data in the state object. You can use `setState` to set the state to a string, number, array, or any other type of data that JavaScript supports.

## Functions

- `getState()`: returns a copy of the current state object
- `setState(newState)`: sets the state object to the provided `newState` object and calls all listeners subscribed to state changes
- `subscribe(listener)`: adds a listener function to the set of listeners subscribed to state changes, and returns an `unsubscribe` function that removes the listener when called
- `undo()`: sets the state object to the previous state object on the `history` array, and calls all listeners subscribed to state changes
- `clearHistory()`: clears the `history` array of previous state objects

## Getting Started

To get started with PulseState, you can install it using npm:  
`npm install pulsestate`

Then, you can import the state management functions as an ES module in your code:

```javascript
import { getState, setState, subscribe, undo, clearHistory } from 'pulsestate';

setState('hello world');

subscribe((state) => {
  console.log('State changed:', state);
});

setState(42);

undo();
```

## License

PulseState is licensed under the MIT License.

Feel free to customize the file to fit your project's needs, and don't hesitate to let me know if you have any other questions!
