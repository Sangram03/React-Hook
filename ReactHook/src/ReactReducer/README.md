# ⚛️ Understanding `useReducer` in React

## 📘 Definition

**`useReducer`** is a React Hook that is used for **state management** in functional components, especially when the state logic is **complex**, **involves multiple sub-values**, or **depends on previous state**. It is an alternative to `useState`.

---

## 🔧 Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

* **`state`**: The current state.
* **`dispatch`**: A function to send actions to the reducer.
* **`reducer`**: A function that determines how the state changes based on the action.
* **`initialState`**: The initial value of the state.

---

## 🧠 How it Works

`useReducer` takes in a **reducer function** and an **initial state**. When you call `dispatch(action)`, the reducer runs and returns the **new state**.

---

## 🧩 Example: Counter

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;
```

---

## ✅ When to Use `useReducer`

Use `useReducer` instead of `useState` when:

* The state logic is **complex** or **multi-step**
* The next state depends on the **previous state**
* You want to **group related state updates** under a common logic (e.g., in a form or large app)
* You want a more **predictable, testable structure** like Redux

---

## 🔁 Reducer Pattern

The **reducer function** is a pure function that takes the current state and an action and returns a new state.

```js
function reducer(state, action) {
  switch (action.type) {
    // define actions
  }
}
```

---

## 📎 Related Concepts

* `useState`: Simpler alternative for small local state
* `Redux`: A global state manager built on the reducer pattern
* `useContext`: Combine with `useReducer` for global state handling

---

## 🧪 Bonus Tip: Lazy Initialization

```js
const init = (initialCount) => {
  return { count: initialCount };
};

const [state, dispatch] = useReducer(reducer, 0, init);
```

---

