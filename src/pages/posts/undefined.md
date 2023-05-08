---
layout: "../../layouts/BlogPost.astro"
title: "Javascript and 'undefined'"
description: "Javascript Explained 101"
publishDate: "8 May 2023"
---

'undefined' that mean the variable hasn't been set

If you don't declare variable:

```javascript
console.log(a)
```

You will get error:

> Uncaught ReferenceError: a is not defined

That's because that initial execution context creation, that creation phase, when it went through it didn't find a var a so it never set up the memory space. So when it went to execute this code it said hey, I don't have a in memory at all. That's it.
