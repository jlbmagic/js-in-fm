---
title: Under the Hood
description: Learn how to integrate multiple different widgets in your application.
---

The repository is made up of a few JS libraries that do the work for us, giving us the development server and the deployment method. All of these have been tested and scoured for security issues. I use these in all my work and haven't had any issues. Here's the description of each of them.

## Parcel

[Parcel](https://parceljs.org/) is a JS library that makes it easy to build a web application. It's a great way to get started with JS, and it works perfectly for our needs. Here's what it does:

1. Creates the Development server that we're using and that FileMaker is reading.
2. Bundles up the code into an inlined file in the `dist` folder.

Read more about Parcel. It's pretty awesome.

## package.json

![Index HTML](https://im-js-in-fm-images.s3.amazonaws.com/packagejson.png)
This package.json file is what makes this whole repository work. It contains information about the project such as author, version, description, and my email.

### scripts

There's also a `scripts` section that contains the scripts that we'll use to build the application.

```js
{
   "scripts":{
      "start":"parcel index.html  --no-source-maps",
      "browserslist":"> 0.5%, last 2 versions, not dead",
      "build":"parcel build index.html",
      "upload":"node ./scripts/upload",
      "deploy-to-fm":"npm run build && npm run upload",
      "openfile":"node ./scripts/openFileOnServer",
      "test":"echo \"Error: no test specified\" && exit 1"
   }
}
```

Let's review each script.

- `start`: This is the script that starts the development server. It's the default script that runs when you run `npm start`.
- `build`: This script builds the application. It's the default script that runs when you run `npm build`.
- `upload`: This script uploads the application FileMaker, causing the "uploadToHTML" FileMaker script to run.
- `deploy-to-fm (known previously as 'build:upload')`: This script runs both the `build` and `upload` scripts.

The other scripts are not really necessary. The `openfile` script should open the file on the server, but, at present, the actual working code is missing. And `test` is not used. We're not running tests on our code (yet).

### dependencies

In this starter dev environment, there are no dependencies. But as soon as we install packages such as C3 or Datatables, the list of those will go in this property. When the code is bundled and deployed into FileMaker, libraries we're using (as part of the `import` process) from here will be part of the inlined code.

### devDependencies

Dev Dependencies only are used during the development process. Parcel is one of those. These libraries are _not_ packaged up when you run `npm deploy-to-fm (known previously as 'build:upload')`. and deploy the code to FileMaker.

## widget.config.js
This file is a simple (for now) place to set up a configuration for this widget and its use. 
![widget.config.js](https://im-js-in-fm-images.s3.amazonaws.com/configjs.png)
The two items you need to update are the `widgetName` and the `file`. Both of these are unique to you.
The `widgetName` property in the  object determine in which record the widget is stored in the FileMaker file. The "UploadToHTML" script will receive the value from this property and go and try to find a record with that value in the "Name" field in the HTML table. If it finds the record, the code is updated. If it doesn't find a record, it creates one.
