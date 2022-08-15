---
title: Connecting to Your FileMaker App
description: Easily connect this dev environment to the FileMaker app you're working on for your client(s).
---

The dev environment comes with a FileMaker file called "jsDev.fmp12". This works just fine when you want to play with JavaScript or a JS library. Indeed, even if you're trying to build a widget for a client you can use this file for some time. But at some point you need to connect the client file to this environment. It's pretty simple to do. You can connect the two together in just a few simple steps.

## The true meaning of 'Connect'

When we use the word 'connect', we really mean setting things up in your client file to work with the code in the code editor. That way you can see how the widget will look on a particular layout. Also you get to use real data from relevant tables.

Don't worry: the connection is in no way permenant. And once you've completed the development, you can discard the repository (I wouldn't but you can), and no ill effects will arise.

The connection only happens during active development of the widget.

## Setting up the client file

To prep the client file for this environment, do four things:

1. Copy the "HTML" table into the client file. Create one record in this table.
2. Copy the script folder (and all its scripts) called "Web Viewer Scripts" into the client file.
3. Get the objects from the dev environment to your client file. There's three of them: the web viewer, the "Load" script and the toggle button bar. Copy all those things to a new layout in your client file or paste them onto an existing layout. Resize and reposition as necessary.
4. In the code editor, find the `scripts` folder and the `upload.js` file. On line 4 there, change the name of the file from "JSDev.fmp12" to the file name you've placed this environment into.

Now start up the dev server by hitting that toggle and then load the web viewer (make sure the dev server in the editor is running). Now, what you're typing in the code editor will show up in the web viewer in your client file.

Here's a video showing how this is done.
[![Play the Connecting Video](https://im-js-in-fm-images.s3.amazonaws.com/Connecting.png)](https://youtu.be/hE90-Sc_hQc)

## Keep in mind . . .

This is a pretty simple process, but there's a few things to keep in mind:

1. Copy the FileMaker stuff in the exact order. It's necessary to ensure there's no issue with script step errors or missing objects. This process harkens back to the old days, and many people have written about it.
2. Side note: I could have made this an add-on but it's actually more complex to work with an add-on created from a template such as this.
3. Of course you don't _have_ to copy/paste things from the jsDev file, but it sure is easier than doing it on your own.
4. If you would rather skip the `HTML` table because you already have a 'Preferences' table, feel free to skip that and instead create a field in your table for the HTML. You would just need to update a few scripts ("UploadHTML" and "Load Webviewer") to point to that script when updating/getting the code from the field.
5. Remember context: if your web viewer is on a layout with a different context than the `HTML` table (or your `Preferences` one), conside how to get the HTML from that field in the "Load Webviewer" script. I would personally use ExecuteSQL or I'd open a new window as a card to get the data out of the field during this script's run. You know how to deal with context should the event arise.
