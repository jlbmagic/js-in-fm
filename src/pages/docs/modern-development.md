---
title: Modern Development
description: More about developing in a modern way.
---

## Refine our understanding
This section is about refining our understanding of what is happening in the JS Dev Environment. You can skip over this and use what we talk about, but this section provides a deeper understanding of how to develop and why we are doing it as is recommended. 

The information here is about the current best practices of web development and how those tie into the underlying framework of the JS Dev Environment.

## Starts with Parcel JS
The JS Dev Environment is built on [Parcel JS]("https://parceljs.org/). Parcel is a web application bundler, differentiated by its developer experience. It offers a zero-config experience, and is a great way to get started with modern web development.

Parcel JS was chosen way back when because it is a modern application bundler, one that I (Jeremy) found accessible. Its website talks about it being "zero configuration". That appealed to me just starting out working with JS in FM in a modern way. There are other application bundlers like Vite and Webpack. But Parcel is the one I picked and plan on sticking with it for the foreseeable future.

Parcel works with the current development best practices, so the framework is useful for us. We just need to know those best practices and how to use them with Parcel.

## Past development 
In the past, JS widgets were small, performing only small tasks. So the code could easily fit within one file.

When widgets grew complex, content delivery networks (CDNs) were created to deliver many files to the HTML document that needed them in order to do the tasks. We used the <link> and <script> tags to bring in the files from the CDN. But this method only handled some of the complexity of the code. 

```html
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" src="./styles/index.css'>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./index.js"></script>
</head> 
````
A JS library might have many files served from the CDN, but we too suddenly might build many files that we need to serve to the HTML document. Again, a <link> tag to a CSS or JS file in the project might suffice, but it had its limitiations. Especialy for us FileMaker developers. The more files we have in a project, the more fields we need in a table and the more substitutions we need to make. 

### Modern development
We (well not us FileMaker developers) do not have to rely on CDNs anymore for our JS libraries, nor do we have to use the <link> tag much anymore to bring our own files into the HTML document. Instead, we can use what has been around since well before 2015: JS modules.

This modern way of development gave us FileMaker developers a huge advantage: we don't have to rely on many fields or many `Insert Text` script steps to put our code into one long string for the web viewer. We can use this module system and a bundler app to do the work for us to bring all the code together for the web viewer. 

### JS Modules
[EcmaScript Modules]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules") are the most current way to develop JS. Introduced in 2015 with the release of EcmaScript 6 (and, incidently, not available to us FileMaker developers until FileMaker 19.3), modular development encourages us to break our code into smaller pieces and then use the features of JS to bring those pieces together in the HTML document. We can finally have complex apps with many files and and not have to worry about the complexity of bringing them all together. Modules–and the syntax involved–do the work for us.

The basic syntax involves two keywords: `import` and `export`. We use `export` to make a variable, function, or class available to other files. We use `import` to bring that variable, function, or class into the file we are working on.

With this type of development, any thing we write in separate files can be brought into the main file.

Again, this is a major advantage for us FileMaker developers.

### Importing into the JS document

Here is an example of one widget containing modules and how they are brought together.

#### The index.js file
```js
// importing from the node_modules folder
import React, { useState, useRef, useEffect } from "react";
import FMGofer from "fm-gofer";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  TimelineViews,
  TimelineMonth,
  Inject,
  Month,
  ResourcesDirective,
  ResourceDirective,
  Resize,
} from "@syncfusion/ej2-react-schedule";
import "./timeline-resources.css";
import { extend, isNullOrUndefined, Ajax } from "@syncfusion/ej2-base";
import { DataManager, WebApiAdaptor, DataAdaptor } from "@syncfusion/ej2-data";
import { useQuery } from "@tanstack/react-query";

// importing from the project folder
import * as dataSource from "./datasource.json";
import fixData from "./utils";
```

In the index.js file, we are importing many things from many files or dependencies. We are importing some JavaScript, some CSS, some JSON. This would be way too hard to manage in FileMaker. But with the module system, we can do it easily.

At the bottom of the index.js file import section there is an `import fixData from './utils'`. This file is a separate one that contains the function `fixData`. The function was written and then exported.

#### The utils.js file
```js
const fixData = (data) => {
  // const newData = query?.data?.foundSet;
  const finalData = data?.map((one) => {
    const newObj = {
      Id: one.recordId,
      Subject: one.fieldData.Subject,
      StartTime: one.fieldData.StartDate + " " + one.fieldData.StartTime,
      EndTime: one.fieldData.StartDate + " " + one.fieldData.EndTime,
      // Location: one.fieldData.Location,
      Description: one.fieldData.Description,
      RoomId: one.fieldData.RoomId,
    };
    return newObj;
  });
  console.log(finalData);
  return finalData;
};
export default fixData;
```
The basic syntax for all of these is the keyword `import` and then defining what to import and from where. The top many imports are coming from the node_modules folder. The bottom imports are coming from the project folder.

What we want to import is written after the `import` keyword and is either surrounded by {} or not. How it is written depends on how it is exported from the file. Importing the `fixData` function is not surrounded by {} because it was exported with the `export default` syntax. 

Usually the base or core of the library is not surrounded by {} because it is exported with the `export default` syntax. 

And usually the supplementary functions or variables. are surrounded by {} because they are exported with the `export` syntax.

### Importing into the HTML document

And here an example of importing CSS and JS into the index.html file.
#### The index.html file
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
        <!-- CSS libraries that were installed into this project -->
        @import "node_modules/materialize-css/dist/css/materialize.min.css";
        @import "node_modules/bootstrap/dist/css/bootstrap.min.css";
         <!-- The local CSS style sheet -->
        @import "./src/style.css";
    </style>
    <title>JSDev</title>
  </head>
  <body>
   <div id="here"></div>
      <div  id="there"></div>
      <div id="imgbg" class="imgbg">Here's tdddhe stuff</div>
      <div id="imgjs"></div>
    <script type="module">
      import "./src/index.js";
    </script>
  </body>
</html>
```
In the HTML document we are doing two things: Importing CSS and importing JS. 

The CSS is imported with the `@import` keyword 

The JS is imported with the `import` keyword. The surrounding <script> tag needs to be specified as "type=module" in order to use the `import` keyword.

In this way you can import _anything_ into the HTML document. What you import will be globally scoped to the document. This means that the file you imported here will be available to every other file in the project, or more accurately, every element that is renedered in the web viewer.

The order in which you import the CSS or JS is important. HTML documents load into the borwser from top to bottom. So the last CSS file, loaded last, will overwrite any conflicting styles previously loaded.  I recommend loading the dev envrionment `style.css` file last as that is the local file.

### Developing with CommonJS

## Features of Parcel
Parcel JS is used in the JS Dev Environment because it supports the modern module way of developing. Parcel JS also is the bundler which takes the many files and reduces it to what the web viewer needs, that is a single file.

Parcel has other features that make it worthy of being a modern development tool. These all help us in FileMaker tremendously and make our coding efficient and productive. 

Here are some feature highlights.

### Dependency resolution
Parcel JS automatically finds all dependencies and brings them together into one string (for us). If a C3 charting library, for example, also needs D3, Parcel will find D3 in the node_modules folder and bring it into the single string. It handles all of that for us.

### Hot module replacement
Parcel JS has a feature called hot module replacement. This means that when we make a change to a file, Parcel will automatically update the web viewer. We don't have to refresh the web viewer to see the changes. This is a huge advantage for us FileMaker developers.

### Tree shaking
Parcel JS has a feature called tree shaking. This means that it will only bring in the parts of a library that are used. If we only use one function from a library, Parcel will only bring in that function. This is a huge advantage for us FileMaker developers.

### Optimizations
Parcel minifies our code and makes it as small as possible. It does three things:
1. Eliminates whitespace and returns
2. Eliminates comments
3. Renames variables to be as short as possible


### Asset management
Parcel JS has a feature called asset management. This means that it can handle all types of files, not just JS. It can handle CSS, images, and fonts. This is a huge advantage for us FileMaker developers.