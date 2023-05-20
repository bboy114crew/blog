---
layout: "../../layouts/BlogPost.astro"
title: "Promise vs Callback"
description: "Javascript Explained 101"
publishDate: "21 Apr 2020"
---

Promises, Web APIs, the Callback & Microtask Queues and Event loop allow us to defer our actions until the ‘work’ (an API request, timer etc) is completed and continue running our code line by line in the meantime.

It's kind of the control is in the opposite of directions. We're giving away our function, versus we're receiving a value that has not come to be just yet.

```javascript
// may not know what onLoaded will do with the callback we pass it
onLoaded((stuff) => {
	doSomething(stuff)
})

// control stays with us to start composing logic as if the
// value was already there
onLoaded.then((stuff) => {
	doSomething(stuff)
})
```
