---
title: Don't push, concat
date: 2019-10-10
path: /dont-push-concat
---

This is something I always knew, but for some reason, I keep on forgetting,
hopefully writting about it will help it sink in.

JavaScript arrays (among others) have two distinct ways of adding items, we can
either `.push` or `.concat`. The former will actually modify the original array
by adding the new item to it, the latter will create a completely new array that
is a copy of the original with the new item added to the end.

So, we all know that immutability is not only a desire, it's a necessity, using
`.concat` will take us one step closer to JS bliss.
