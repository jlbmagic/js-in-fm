---
title: Deploy the Code
description: Easily deploy the code from the code editor to your FileMaker file.
---

The process to deploy (or redeploy as is the case) is very simple. With a few steps you can bundle up all the code you're writing in VSCode and place it into the FileMaker file in which the widget will reside. Here's how you do it.
You only have to do the "Prepare & Confirm" section once. You might have already done this when you [connected](/docs/connecting-to-fm) the dev environment to your client file.

## Prepare & Confirm your target file

Make sure that the code will go into the correct FileMaker file. Go to the `upload.js` file in the `scripts` folder of this repo and update line 4 to the file name you're targeting.

Also make sure the `HTML` table (or the `Preferences` table ) has one record in it.

Remember that the `UploadHTML` script will run during this process (triggered by the next step).

Finally, prepare the file to have this script run by the dev environment. In Advanced Settings of Manage Security, update the extended privileges of each privilege set that will deploy the code. Likely just the `Full Access` account is necessary.
Toggle the extended privilege "fmurlscript".

![Toggle the extended privilege](https://im-js-in-fm-images.s3.amazonaws.com/fmurlscript.png)

## Stop the server

In VSCode stop the development server from running by pressing `control + C` in the Terminal. (If the Terminal window isn't showing, type `control + tilda` to open the Terminal.)
![Stopped server](https://im-js-in-fm-images.s3.amazonaws.com/stoppedServer.png)

## Run the command

In the terminal type the following:

```bash
npm run deploy-to-fm (known previously as 'build:upload')
```

After a few seconds FileMaker will confirm to you that the code was uploaded to the correct field.

## Test it out

Toggle the "Dev Mode" off on the layout you're working on. Then press the "Load Web viewer" script. The web viewer should load with the same code you were writing over in VSCode.

You don't have to but you could quit VSCode to confirm. Just know that as long as the development server isn't running in VSCode, you can keep the app open and still get the code to work in FileMaker

## Redeploy as necessary

This process can be done as many times as you need to update the widget to fix bugs, add features, or update the configuration. Just follow this process.

## Under the hood (if you must know)

Part of the strength of this development environment is that it has the JS library Parcel. Read about that [here](/docs/under-the-hood#Parcel).
Parcel takes all your code, even the code spread in different files, and compiles it. During the compile process, the code is:

- make the file as small as possible by removing spaces, returns, semi-colons.
- minify the code by changing the names of variables and functions. A function named "loadChart" might be converted to "a". The bundler takes care of all of this.
- If you have any commented out code, that would be removed.

Finally, this process takes the many files that you've written and combines them into one file. We call it "inlined".
Most web developers don't care about this, but we do. Ultimately this code will end up in a field, so it needs to be one file. Don't worry there's no worry about this: we're not going to get anywhere close to the limit of a text field.

## Keep in mind . . .

1. Make sure you have updated line 4 in the `upload.js` file in the code base.
2. Make sure the HTML table doesn't have any open records.
3. There should be one record in the HTML table. (If you don't, the script will fail.).
