---
title: The JavaScript We Use
description: Here's the JS that FileMaker developers regularly use.
---

As a FileMaker developer, we use some of the JS language, but we don't use it all. Since we're doing the same things over and over (see the learning path) we use the same JS over and over.

This list will grow as people in this world use more JavaScript, but for now here's a general list of exact JS things you can look at. Of course this list is out of context of actually solving client problems, but there's still some good info here, and I encourage you to review it.

By the way, there's two sources of documentation I recommend:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (use the navigation on the left).
- [W3Schools](https://www.w3schools.com/js/default.asp)

I prefer the first one as it's the official documentation. The second one is a bit more user-friendly but along with readability comes ads.

## The Document Object Model (DOM)

There are a lot of functions built into JS that work with the actual HTML that is rendered in the web viewer (the DOM). It's good to review these and know how to, say, select a div with an id of "chart". With these DOM functions you can actually construct divs with your JS to

Here's the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

And here are some common functions I use:

- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
- [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerHTML)
- [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
- [style](https://developer.mozilla.org/en-US/docs/Web/API/Element/style)
- [window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

I'm sure there are more in that section. As you get familiar with the documentation, you'll find it easy to look up something new when you're looking for the solution.

## Array & Object Methods

We FileMaker developers will manipulate data a lot. We'll transform arrays and objects into something that we need for our code. So it's worth exploring the methods that are available on objects and array.

- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## Prepping Data

As data comes from FileMaker to the JS we need to prep it for use in the JS. And vice versa. There's two built in JS methods that handle this for us:

- [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## String Methods

We often need to manipulate strings. So JS has built in methods for that. Here's a few:

- [String.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [String.charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [String.substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- [String.substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

## Operators

JavaScript has a robust set of operators that we use to make assignments or do comparisons or do some math.

### Math Operators

- [+ (Addition)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [- (Subtraction)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [\* (Multiplication)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [/ (Division)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [% (Modulus)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Modulus)
- [++ (Increment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [-- (Decrement)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)

n### Comparisons

- [=== (Equality)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [!== (Inequality)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
- [< (Less than)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
- [<= (Less than or Equal)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
- [> (Greater than)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [>= (Greater than or equal)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)

- [&& (Logical And)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [|| (Logical Or)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [! (Logical Not)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

This list will grow as more JS is used in FileMaker.
