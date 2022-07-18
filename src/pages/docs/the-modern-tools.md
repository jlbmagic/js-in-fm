---
title: The Modern Tools in Use
description: Follow these steps.
---

To take full advantage of the JavaScript Development Environment, you need to know a bit about the tools we use. They're described as 'modern' here because that's what they are: tools used all over the world by developers of all kinds.

As custom app developers in FileMaker, we don't have to worry about these too much. But as we dip into JavaScript, GitHub and Visual Studio Code are invaluable. So let's learn a bit about them and provide a good reference for your continued study.

## Claris FileMaker Pro

This first tool is really the end result. We're building widgets to fit inside our FileMaker apps. And you probably already know a lot about FileMaker Pro. However, when working with JS, there's a few things to make sure you understand.

When FileMaker 19.0 was released, we were given solutions to many problems we had to deal with before. Now, in FileMaker 19.3 and higher, almost every struggle or limitation we had is gone. Here are those:

1. [FileMaker 19.3](https://support.claris.com/s/article/Claris-FileMaker-Pro-19-3-1-Windows-Microsoft-Edge-support?language=en_US) removed Internet Explorer 11 as the underlying webkit for the web viewer in FileMaker Pro for Windows. IE11 is an old browser that doesn't support modern JavaScript. Instead, Microsoft Edge it the engine beneath what we do, and that's much more modern.
2. A script can easily both cause a function to run and send data to the JS with which we're working. Using the script step [`Perform JavaScript in a Web Viewer`](https://help.claris.com/en/pro-help/content/perform-javascript-in-web-viewer.html) we can target a web viewer, a function inside that code, and pass it data.
3. FileMaker Pro, when we load code with some HTML/JS, will inject a JS library that adds functionality to our code base. The only two functions it [adds](https://help.claris.com/en/pro-help/content/scripting-javascript-in-web-viewers.html) are called `FileMaker.PerformScript( script, parameter )` and `FileMaker.PerformScriptWithOption ( script, parameter, option )`. These functions are pretty similiar in functionality: what they do is trigger a FileMaker script to run passing in some optional data.
4. The script step [`Execute FileMaker Data API`](https://help.claris.com/en/pro-help/content/execute-filemaker-data-api.html) is extremely useful for getting data from any context (any layout) and returning the found set of records in JSON format. Most JS libraries ask for the data to be rendered to be in JSON, and there's tons of built-in functions that work with JSON. So this step saves us the complexity of rolling our own way to construct data into JSON.

## GitHub

This [development environment](https://github.com/integrating-magic/js-dev-environment) is stored in GitHub, so it's important to know a bit about GitHub and the Git process.
There are thousands of blog posts about GitHub, and I recommend you simply [Google](https://www.google.com/search?q=what+is+github&ei=wyLVYuDtFr-fqtsP0NWUIA&ved=0ahUKEwig28aNi4L5AhW_j2oFHdAqBQQQ4dUDCA8&uact=5&oq=what+is+github&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMggIABCxAxCRAjIFCAAQkQIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOhIILhDHARDRAxDIAxCwAxBDGAI6FAguEMcBENEDEMgDELADEAoQQxgCOgQIABBDOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEIMBENQCOgoIABCxAxCDARBDOggIABCABBCxAzoICC4QsQMQgwE6CAgAELEDEIMBOggILhCABBCxAzoECAAQA0oECEEYAEoECEYYAVCJB1ilE2CNFWgCcAF4AYABYIgBwQiSAQIxNJgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz) the word. Here's [one](https://kinsta.com/knowledgebase/what-is-github/) I refer to once in a while.

For us, GitHub is the online cloud location where our code is stored. The specific repository (or repo) holds all of the files we are working with for a widget, and there's a connection between what we do on our machine and the storage space in the cloud.

## Git

[Git](https://git-scm.com/) is the process by which we can track changes, undo changes, and save changes to the repo in GitHub. Again, there's a ton of information out there about Git.

As we work with the development environment or the starter templates, there's a few `git` processes we'll use. Most of these are handled with buttons in VSCode, but you could also use the terminal to do so.

- `commit`: when we commit changes, we're creating a sort of 'save point' in the repository. All the changes made in all the files in that commit are bundled together. To me, each commit represents a feature or a bug fix. And it sets these commits in sort of a queue to be later pushed.
- `push`: With this command we're taking all the commits we've set and pushing them up to the storage place of the repository (in this case GitHub). This sends those changes and removes all the commits from the queue. They're not deleted; they list of commits to push is just blanked out.
- `pull`: this command pulls the latest code base from GitHub and puts it onto the local machine. This is useful when you're working on the same code base on two different computers. After coding on one computer, you use the `git push` command to push changes from that machine up. Then on the 2nd computer, use `git pull` to retrieve those changes.

There are other commands, but again, VSCode handles most of these operations with a user interface. We'll look at that separately.

## Visual Studio Code

VS Code is the recommended code editor. It is full of features that make our JS developing lives easier. Its auto-complete, auto-formatting, and wide library of extensions takes away a lot of the stress of writing code for an app.

There's a lot to know about [VSCode](https://code.visualstudio.com/). We could spend hundreds of hours learning about it. For now, I'd suggest you read the following documentation to learn more about it. Eventually I'll have a list of the extensions I use for my VSCode work.

- [7 Essential Features of Visual Studio Code for Web Developers](https://medium.com/@bretcameron/7-essential-features-of-visual-studio-code-for-web-developers-be77e235bf62)
- [10 Features of VSCode Every Developer Should Know](https://blog.cloudanalogy.com/10-features-of-vs-code-every-developer-should-know/)]
- [VS Code Top-Ten Pro Tips](https://www.youtube.com/watch?v=u21W_tfPVrY)

### Components of VSCode

This environment is built to utilize what VSCode offers. So here is a brief walk through of the main sections that are used all the time.

NOTE: in the images here, the panels are on the right side. Yours will probably be on the left (that is the default). You can update it if you like.

#### The File Explorer

The file explore section shows the entire structure of the repository's directory.

![The File Explorer](https://im-js-in-fm-images.s3.amazonaws.com/vscodeFileExplorer.png)

- Starting at the top you see the name of the repo with the open arrow.
- Inside this director are all the folders and files.
- You can click on a file to open it in the code editor portion.
- You can also drag a file from the Explorer to the editor portion, and in doing so determine where in the space it goes.
- You can drag external files into this structure using this panel.
- Installing the Extension "Open in Application" allows you to right-click on a file–say the jsDev.fmp12 file–and open it in the file's default app.

This panel also contains a few other sections: Outline, Timeline, and NPM Scripts

- If the NPM Scripts panel isn't active, you can make it so by going to Preferences / Settings and searching for NPM Scripts". Enable this option.
- The Outline panel is useful as it lays out the structure of each file, showing you where objects, functions, headings, and much more are located without all the extra code.

#### Track Changes

This panel contains a lot of good information about how the files have changed over time.
![Track Changes](https://im-js-in-fm-images.s3.amazonaws.com/vscodeChanges.png)

In this panel you can:

- view what files have had changes made in them since the last commit.
- save changes as one commit, writing a commit message.
- undo the changes you made to one or many files.
- see the file history
- see the branches associated with this repository
- see and link to the remote url.

There's a lot here, and we'll have to get into more over time. For now the most useful section is the "Source Control" part of this panel.

#### Search

VSCode allows you to search or search & replace acaross all the files. This panel gives you that functionality. It's useful when finding a function or variable or component.
![The File Explorer](https://im-js-in-fm-images.s3.amazonaws.com/vscodeSearch.png)

#### Extensions

The Extensions panel allows you to add a ton of functionality to your workspace.
![Extensions](https://im-js-in-fm-images.s3.amazonaws.com/vscodeExtensions.png)

VSCode is full of community-written extensions that give the developer a better user experience. Here's a list of extensions that I use, though there's a ton more.

- **Auto Rename Tag** - this allows me to rename the opening tag in the HTML and have its closing pair also rename.
- **Better Comments** - improve your code commenting by annotating with alert, informational, TODOs, and more!
- **ESLint** - Integrates ESLint JavaScript into VS Code. This needs to work with the ESLint dependency (part of the JS Dev Environment)
- **Github Copilot** - this is the AI extension that can write code for me. It's almost always okay to use. It's a paid extension but super useful.
- **GitLens** — Git supercharged - Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories
- **Highlight Matching Tag** - Highlights matching closing and opening tags
- **Indent-Rainbow** - Makes indentation easier to read
- **npm Intellisense** - Visual Studio Code plugin that autocompletes npm modules in import statements
- **Open in Application** - Open an arbitrary file in its default app, or the app you want.
- **Prettier** - Code Formatter - Open an arbitrary file in its default app, or the app you want.
- **Sync Scroll** - Make split panels scroll synchronically

Here's a cool one written by Josh Willing: [FileMaker VSCode](https://marketplace.visualstudio.com/items?itemName=jwillinghalpern.filemaker-vscode). It contains FileMaker syntax and snippets you can write using VSCode's features and then copy into a FileMaker calculation.

There's a ton more, and I'll probably add more here.

#### The Terminal

![Extensions](https://im-js-in-fm-images.s3.amazonaws.com/vscodeTerminal.png)

#### Preferences / Settings

Everything in VSCode can be adjusted. In the Preferences / Settings section you can use the interface to toggle or change values of many different settings. Check this out, explore it and see what you can change. I might make a suggestion or two along the way.
![Extensions](https://im-js-in-fm-images.s3.amazonaws.com/vscodeSettings.png)
