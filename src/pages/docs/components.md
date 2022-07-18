---
title: Components
description: Follow these steps.
---

The JS Dev Environment (JDE) runs on the barest of items. While a lot will be added to this, what comes out of the box is sufficent for you to begin to work with JS. Here is the list of elements.

## Web Page Structure

The web page structure is pretty simple. There's an `index.html` file at the top level of the directory. In the `src` folder, there's a `index.js` file and the `style.css` file.

The `src` folder is where you'll put any additional .js or .css files. And these files are linked either to the `index.html` file or to the `index.js` file.

Let's look at these files in more detail:

#### ./index.html

![Index HTML](https://im-js-in-fm-images.s3.amazonaws.com/indexhtmlImg.png)
This file is the main file for the web page. It's the file that gets loaded when the user visits the page. It contains links to both external library sources (CDNs) or to local files–those in the `src` folder.

Additionally, the JavaScript is imported from the `index.js` file.

And finally, the `<body>` tag contains the elements that will be rendered on the page and possibly manipulated by the JS.

#### ./src/index.js

![Index HTML](https://im-js-in-fm-images.s3.amazonaws.com/src_index_js.png)
The magic happens in this file. All the functionality you wish to build is in here.

If you're working with a JavaScript library, you might import it here; otherwise it is linked to from the `index.html` file.

#### ./src/style.css

This css page is where you'll put all your styles. If you're using a JS library, you want to make sure this file is imported into the `index.html` file _after_ the library's css files. That will ensure your styles override what the library provides.

### FileMaker File

![Index HTML](https://im-js-in-fm-images.s3.amazonaws.com/FMFile.png)
The FileMaker file that comes with this environment, named JSDev.fmp12, is also pretty basic. It contains enough scripting and layout objects to connect the web viewer to the development server of this setup. Here's what it contains:

1. An HTML table with a few fields and a few layouts
2. A web viewer.
3. A set of scripts used to load the web viewer & then load the code into a FileMaker field.
4. Links to the [JS in FM Community](https://community.jsinfm.com/home) and this documentation.

Let's review each one in detail:

#### HTML table & Layouts

THe HTML table contains a few fields and one record.

THe HTML field contains some basic html code. The code comes from the web structure code.

#### Web Viewer

The web viewer on the JSDev layout is ready to read the code from either the dev environment or the HTML field. It's named "web". The name is used in the Load Webviewer script.

The web viewer has anchoring on all four sides.
It's blank by default. The "Load WebViewer" script loads this web viewer with the code from the HTML field or the dev server.

#### Scripts

![Index HTML](https://im-js-in-fm-images.s3.amazonaws.com/ScriptWorkspace.png)
There's only a few scripts as part of this JS Dev file, and you'll eventually want to copy the "Web Viewer Scripts" folder into your own FileMaker file when you're ready to hook up this environment to a client file. Here's a description of the scripts:

1. Load WebViewer: This script is the primary one you'll call each time you want to load the web viewer. It should be called from a button or a script trigger.
2. Load Data: This script is used in the Load WebViewer Script to get the data. In this script, get the data in some manner. I prefer the Execute Data API script step.

In the Dev folder:

1. uplodadToHTML: This script is called by the deployment process in VSCode. It grabs the inlined version of your HTML/JS and places the text into the HTML field.
2. Set to Dev Mode: This script is used to set a global variable ($$Dev) to 1 or "".

:::info When Copying these scripts
There's two scripts that require fixing if you copy them into a file that doesn't have the HTML table: Load Web Viewer (Line 6) and uplodadToHTML (lines 29 & 31). I do recommend you copy the table into your client file first then copy these scripts.
:::

#### Links

The few links at the bottom left are there to direct you to this documentation and the [JS in FM Community](https://community.jsinfm.com/home). Join us there and talk more about this environment.

### When the JSDev.fmp12 file opens

The JSDev file opens in "Dev Mode". That means that the web viewer will look for the development server "http://localhost:1234" and load the code from there. You can trigger this script and update the variable's value by clicking the button on the Dev layout.

When you copy the scripts into your file, you don't need to add the onOpen script trigger; instead you can just paste the button from the Dev file into yours.

## Under the Hood

See the [under the hood](/docs/under-the-hood) section if you want to know all about the nitty gritty. But it's not that important.
