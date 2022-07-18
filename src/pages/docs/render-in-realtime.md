---
title: Render in Realtime
description: Follow these steps.
---

As you develop your code in VSCode, you can see exactly how the code will render inside of the web viewer. Whether you're using the `jsDev.fmp12` file or your own client file, this environment allows you to see what's going on.

## View your bugs

Inevitably you'll have bugs in your code. As we do development, and as the code is loaded into the web viewer, the console of the web viewer will display those errors. Be sure to enbable that. Here's a great blog post on what to do from Beezwax: [How to enable WebKit and JavaScript debugging in FileMaker Web Viewers](https://blog.beezwax.net/how-to-enable-webkit-and-javascript-debugging-in-filemaker-web-viewers/)
![The web viewer console](https://im-js-in-fm-images.s3.amazonaws.com/Console.png)

Here's how to do this:

1. Completely quit FileMaker. Nothing should be open.
2. Open the Terminal
3. Paste in this command: `defaults write com.filemaker.client.pro12 WebKitDebugDeveloperExtrasEnabled -bool YES` (without the ``)
4. Open FileMaker
5. Right Click on a web viewer and choose "Inspect Element"

## Keep in mind . . .

1. You must save the file you're working on when you're done writing code you want to view. Get used to pressing `command+s` or `control+s`.
2. If you're working heavy in the JavaScript, the web viewer will need to be reloaded. Simply press the "Load Webviewer" button or `command / control + 1` and the web viewer will reload.
