
---

## 🧠 Initial Setup:

```js
const [state , dispatch] = useReducer(reducer, { count: 0, showText: true });
```

So initially:

```js
state = {
  count: 0,
  showText: true
}
```

---

## 🖱️ User Clicks the Button:

### Button `onClick` calls:

```js
dispatch({ type: "INCREMENT" });
dispatch({ type: "toggleShowText" });
```

---

## ✅ First Dispatch — `{ type: "INCREMENT" }`

The `reducer` function runs:

```js
case "INCREMENT":
  return { count: state.count + 1, showText: state.showText };
```

### At this point:

```js
// state.count = 0 → 1
// state.showText = true (unchanged)

new state = {
  count: 1,
  showText: true
}
```

---

## ✅ Second Dispatch — `{ type: "toggleShowText" }`

The `reducer` function runs again, this time on the **new state** from above:

```js
case "toggleShowText":
  return { count: state.count, showText: !state.showText };
```

### At this point:

```js
// state.count = 1 (unchanged)
// state.showText = !true → false

new state = {
  count: 1,
  showText: false
}
```

---

## 🖼️ UI After Click:

```html
<h1>1</h1>
<!-- The text is hidden because showText is false -->
```

---

## 🔁 Next Click:

Repeat:

* `count` goes from 1 → 2
* `showText` goes from false → true

### Resulting State:

```js
{ count: 2, showText: true }
```

---

## 🧾 Summary of State Transitions on Each Click:

| Click #     | Count | Show Text? |
| ----------- | ----- | ---------- |
| 0 (Initial) | 0     | ✅ Yes      |
| 1           | 1     | ❌ No       |
| 2           | 2     | ✅ Yes      |
| 3           | 3     | ❌ No       |
| 4           | 4     | ✅ Yes      |
| ...         | ...   | ...        |

---

