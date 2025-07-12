# React-Hook
## 🧩 React State Overview :

### 🔄 React Hook — Definition

**React Hooks** are **built-in functions** that let you “hook into” **React state and lifecycle features** in **function components** — without writing a class.

---

### 🧠 Simple Definition:

> **Hooks are special functions that let you use React features like state, lifecycle, and context in functional components.**

---

### ✅ Common React Hooks

| Hook                    | Purpose                                              |
| ----------------------- | ---------------------------------------------------- |
| `useState()`            | Add state to a functional component                  |
| `useEffect()`           | Run side effects (e.g. fetch data, subscriptions)    |
| `useContext()`          | Access values from React Context                     |
| `useRef()`              | Reference DOM elements or persist values             |
| `useReducer()`          | Manage complex state logic (like Redux)              |
| `useMemo()`             | Optimize performance by memoizing values             |
| `useCallback()`         | Memoize functions to avoid unnecessary re-renders    |
| `useLayoutEffect()`     | Like `useEffect` but runs synchronously after render |
| `useImperativeHandle()` | Customize ref exposed to parent                      |

---

### 📦 Example: `useState` and `useEffect`

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initialize state

  useEffect(() => {
    console.log('Component mounted or count changed:', count);
  }, [count]); // runs every time 'count' changes

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

---



| 🔢 **No** | 🗂️ **Module Name**                | 🔗 **Solution Link** ☕ |
|:--------:|:----------------------------------:|:----------------------:|
| 01       | **UseState** 📚🔢     | [View Code](https://github.com/Sangram03/React-Hook/tree/main/ReactHook/src/ReactUseState) |
| 02       | **UseReducer** 📖📔   | [View Code](https://github.com/Sangram03/React-Hook/tree/main/ReactHook/src/ReactReducer) |
| 03       | **UseEffect** 🔫🔖    |  [View Code](https://github.com/Sangram03/React-Hook/tree/main/ReactHook/src/ReactEffect) |


