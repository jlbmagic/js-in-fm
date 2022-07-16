---
title: Getting started
pageTitle: JS in FM
description: Learn all about building JavaScript widgets for FileMaker
---

Learn all about building JavaScript widgets for FileMaker {% .lead %}

{% quick-links %}

{% quick-link title="Preparing Your Machine" icon="installation" href="/" description="Get your computer set up to use this environment." /%}

{% quick-link title="The JS Dev Environment" icon="presets" href="/" description="Develop, Render, and Deploy Fil" /%}

{% quick-link title="Working with Libraries" icon="plugins" href="/" description="Review patterns of code and thought, and see good examples of working with Libraries." /%}

{% quick-link title="JS Learning Path" icon="theming" href="/" description="Explore what in the JS language to learn." /%}

{% /quick-links %}

Explore all that can be done with JavaScript in FileMaker.

---

## Quick start

If your computer has Git and Node.js installed on it already, and if you're familiar with Visual Studio Code, then jump right on down to installing and using the JS Dev Environment.

### Get the Template

The JS Dev Environment is found here. Create a new repository in your Github account from this template and then clone it to your machine. Install it with the following command:

```shell
npm install
```

### Start the server

Next, start the development server with the command

```shell
npm start
```

### Open the .fmp12 file

Finally, open the jsDev.fmp12 file. It will load into development mode, and what you develop in VSCode will render in the web viewer.

## Develop the code

Once you have the environment set up, you can write JavaScript, HTML, and CSS to achieve whatever goal you're striving. You can install JavaScript libraries, write vanilla JS, and much more. Most likely you'll want to get data from the parent FileMaker app. Read this page to learn about this.

Probably you'll want to connect this environment to a real client file. Here's how to do that.

### The HTML

The `index.html` file is your starting point. Here you can add divs to the structure. If you're ready to begin, you can remove the <h1> and <h2> divs and write your own html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      @import './src/style.css';
    </style>
    <title>JSDev</title>
  </head>
  <body>
    <h1>Alright. You're set.</h1>
    <h2>Now build something amazing!</h2>
    <button type="button">Click Me!</button>

    <script type="module">
      import './src/index.js'
    </script>
  </body>
</html>
```

### The JavaScript

The `index.js` file comes with a basic function that will run when the button is clicked. Remove that and get to work! See the libraries and JS learning path sections for more ideas.

```js
const btn = document.querySelector('button')
btn.onclick = function () {
  alert('You ran some JavaScript')
}
```

This is really all you need to write some JavaScript for FileMaker, to solve client problems with JS!

---

## Rendering the code

While in development mode, what you write in the code editor will render in the FileMaker app.

### Refresh the web viewer

Likely when you're updating the JavaScript, after you save the changes (always save the file), the web viewer might stop rendering the code. That's because the JS is significiantly different than before so you will have to reload the code into the web viewer. Simply press the button "Load Webviewer" (or hit the shortcut `command+1` (MacOS) `control+1` (Windows)). This will reload the code into the web viewer, and the changes you've written will be visible.

### Observe the bugs

Also rendered are the bugs or any console logs you have in your code, and these bugs/logs are found in the console of the web viewer browser. To access the console inside the browser dev tools, simply right click on the web viewer and choose "Inpect Element". Navigate to the console tab.

If you don't already have this console enabled, follow this guide. This is a one time process.

See this page for more details about how the environment renders what you're typing.

---

## Deploying the code to FileMaker

When you're finished developing the code, and when you like how it looks and operates, you will need to deploy the code to your FileMaker file.

---

## Getting help

I'm (Jeremy) am here to help you get started in this environment. Please reach out [here](https://savvycal.com/magic-man/js-dev-startup) if you'd like some support in getting this up and running.

---

### Submit an issue

If you would like to make a change to the environment, please clone the source, make your changes, and make a pull request. I'll be happy to review and accept your changes.

---

### Join the community

There's a great community working with this environment. The [JS in FM Community]("https://community.jsinfm.com/home") is the place to discuss this environment and to ask for help. So join the community and be part of this ever-growing group.
