---
layout: "../../layouts/BlogPost.astro"
title: "Understanding Reactivity"
description: "Reactivity 101"
publishDate: "24 Apr 2023"
---

Reactivity and Reactive Programming have historically been hard words to nail down to a particular concept. Mostly that Reactivity in software is generally seen as a desirable trait and has described everything from the responsiveness of real-time applications to specific flavors of functional programming.

## So, what is Reactive Programming?
To declaratively express the relationship between values that change over time.

> a = b + c
>
> where the value of a updates whenever the value of b or c changes.

## Reactivity in Frameworks

KnockoutJS (2010)
```javascript
var ViewModel = function(first, last) {
  this. firstName = ko.observable(first);
  this.lastName = ko.observable(last);

  this. fullName = ko.pureComputed(function() {
    return this.firstName() + " " + this.lastName();
  }, this);
};

ko.applyBindings (new ViewModel("Planet", "Earth"));
```

Mobx + React(2015)
```javascript

import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Timer extends React.Component {
  @observable secondsPassed = 0;

  componentWillMount() {
    setInterval(() => {
      this.secondsPassed++;
    }, 1000);
  }

  render() {
    return <span>Seconds passed: {this.secondsPassed}</span>;
  }
}

React. render(<Timer />, document.body);
```

Svelte 3 (2019)
```javascript
<script>
  let count = 1;

  $: doubled = count * 2;
  $: quadrupled = doubled * 2;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
Count: {count}

</button>

<p>{count} x 2 = {doubled}</p>

<p>{doubled} x 2 = {quadrupled}</p>

```

Vue Composition (2020)
```javascript
<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    return {
      readersNumber,
      book
    }
  }
};
</script>

```


Signals

Getter, Setter, and a value
Also known as Observable, Ref, Atom, Behavior

[Exposing Signals as Getter/Setters in Vue](https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts#L146)


