
---

### 📘 Definition of `useEffect` in React

> **`useEffect`** is a React Hook that allows you to perform **side effects** in functional components, such as fetching data, setting up event listeners, or updating the DOM. It runs **after** the component renders and can optionally clean up when the component unmounts or before the effect runs again.

---

### ✅ One-Line Summary:

> `useEffect` lets you run code after rendering and manage side effects in React functional components.

---

Let me know if you want an example or visualization to go along with it!

---

# ⚛️ `useEffect` Hook in React

## 📘 What is `useEffect`?

**`useEffect`** is a built-in React Hook that lets you perform **side effects** in functional components. Side effects include things like:

* Fetching data from an API
* Updating the DOM manually
* Setting up subscriptions or timers
* Working with local storage
* Listening to events

---

## 📦 Import Syntax

```js
import { useEffect } from 'react';
```

---

## 🔧 Basic Syntax

```js
useEffect(() => {
  // Your side effect code here

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

---

## 🧠 How it Works

* Runs the **effect function** after the component renders.
* The **dependency array** tells React when to re-run the effect.

  * If empty `[]`, it runs **only once** after the initial render.
  * If dependencies are listed, it re-runs when any of them change.
  * If omitted, it runs **after every render**.

---

## 📍 Example 1: Run Once on Mount

```jsx
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []);
```

---

## 🌐 Example 2: API Call

```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []); // Only run once
```

---

## 🔁 Example 3: With Dependency

```jsx
useEffect(() => {
  console.log(`The count is now: ${count}`);
}, [count]);
```

---

## 🧹 Cleanup Function

Useful for:

* Removing event listeners
* Clearing intervals/timeouts
* Unsubscribing from services

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running interval");
  }, 1000);

  return () => clearInterval(interval); // Cleanup
}, []);
```

---

## 🚨 Common Mistakes

* **Forgetting dependencies** can lead to stale or incorrect behavior.
* **Using async functions directly in `useEffect`** is not allowed — define and call inside.

```js
// ❌ Don't do this
useEffect(async () => { ... });

// ✅ Do this
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(...);
    // ...
  };
  fetchData();
}, []);
```

---

## ✅ Best Practices

* Always declare what your effect **depends on**.
* Cleanup when setting up subscriptions or timers.
* Use multiple `useEffect`s for unrelated logic.

---

## 📎 Related Hooks

* `useLayoutEffect`: Like `useEffect`, but fires **synchronously** after DOM mutations.
* `useState`: Often used together with `useEffect`.

---

