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

![Index HTML](/img/indexhtmlImg.png)
This file is the main file for the web page. It's the file that gets loaded when the user visits the page. It contains links to both external library sources (CDNs) or to local files–those in the `src` folder.

Additionally, the JavaScript is imported from the `index.js` file.

And finally, the `<body>` tag contains the elements that will be rendered on the page and possibly manipulated by the JS.

#### ./src/index.js

![Index HTML](/img/src_index_js.png)
The magic happens in this file. All the functionality you wish to build is in here.

If you're working with a JavaScript library, you might import it here; otherwise it is linked to from the `index.html` file.

#### ./src/style.css

This css page is where you'll put all your styles. If you're using a JS library, you want to make sure this file is imported into the `index.html` file _after_ the library's css files. That will ensure your styles override what the library provides.

### FileMaker File

![Index HTML](/img/FMFile.png)
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

![Index HTML](/img/ScriptWorkspace.png)
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

## Under the Hood: the Repo

The repository is made up of a few JS libraries that do the work for us, giving us the development server and the deployment method. All of these have been tested and scoured for security issues. I use these in all my work and haven't had any issues. Here's the description of each of them.

### Parcel

[Parcel](https://parceljs.org/) is a JS library that makes it easy to build a web application. It's a great way to get started with JS, and it works perfectly for our needs. Here's what it does:

1. Creates the Development server that we're using and that FileMaker is reading.
2. Bundles up the code into an inlined file in the `dist` folder.

Read more about Parcel. It's pretty awesome.

### Package.json

![Index HTML](/img/packagejson.png)
This package.json file is what makes this whole repository work. It contains information about the project such as author, version, description, and my email.

#### scripts

There's also a `scripts` section that contains the scripts that we'll use to build the application.

```js
{
   "scripts":{
      "start":"parcel index.html  --no-source-maps",
      "browserslist":"> 0.5%, last 2 versions, not dead",
      "build":"parcel build index.html",
      "upload":"node ./scripts/upload",
      "build:upload":"npm run build && npm run upload",
      "openfile":"node ./scripts/openFileOnServer",
      "test":"echo \"Error: no test specified\" && exit 1"
   }
}
```

Let's review each script.

`start`: This is the script that starts the development server. It's the default script that runs when you run `npm start`.
`build`: This script builds the application. It's the default script that runs when you run `npm build`.
`upload`: This script uploads the application FileMaker, causing the "uploadToHTML" FileMaker script to run.
`build:upload`: This script runs both the `build` and `upload` scripts.

The other scripts are not really necessary. The `openfile` script should open the file on the server, but, at present, the actual working code is missing. And `test` is not used. We're not running tests on our code (yet).

#### dependencies

In this starter dev environment, there are no dependences. But as soon as we install packages such as C3 or Datatables, the list of those will go in this property. When the code is bundled and deployed into FileMaker, libraries we're using (as part of the `import` process) from here will be part of the inlined code.

#### devDependencies

Dev Dependencies only are used during the development process. Parcel is one of those. These libraries are _not_ packaged up when you run `npm build:upload`. and deploy the code to FileMaker.



We'll add more to this list as we go along.