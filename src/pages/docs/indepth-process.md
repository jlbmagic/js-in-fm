---
title: The In Depth Process
description: Follow these steps.
---

Once we have all the necessary apps and services on our machine, we're ready to grab a copy of the environment, set it up, and get it started.

Here's how.

## Grab the JS Dev Environment

Start by getting the [repository](https://github.com/integrating-magic/js-dev-environment) from which we'll make our development environment.

Here's how to do this:

1. Go to the environment's repository link.
2. Click on the "Use This Template" button (make sure you're signed into your Github account).
   - This process will ask you to save the repository to your own Github account. Fill in the relevant information (see [here](intro/misc/what-is-repo.mdx) for more details), and then let the process work.

First, fill out the information here. There's no spaces in a repo, name, so use camel case or hypens (I prefer the latter for repo names).
![StepZero](https://im-js-in-fm-images.s3.amazonaws.com/StepZero.png)

Let that process run after clicking the green button at the bottom. Once you do that, you'll be presented with this repository on your GitHub account.
![StepOne](https://im-js-in-fm-images.s3.amazonaws.com/stepOne.png)

## Clone to Your Machine

Next, we need to clone the repository. That is, we need to get all the code down from GitHub to your local machine will keeping a link between the local and remote. To do that, click on the "Code" button and click the clipboard icon. We'll use that copied URL in the next section.

VSCode makes this process pretty easy. So open the app and follow these steps.

1. In the Start section of the home screen, click "Clone Git Repository"
   ![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/VScodeFront.png)
2. A dialog will appear in the top center of the window. Paste the URL there. Confirm the command that's highlighted.
   ![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/Clone.png)
3. VSCode will ask you for a location of the repositry. Find a folder for this repo to go into.
   ![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/location.png)
4. VSCode will then clone the repo to that location. All of the files on Github in your instance will be transferred to your machine.
5. Finally, open the repository in VSCode by clicking "Open" in the bottom right.
   ![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/Open.png)


## Reveal the Environment

Now that we have the repository cloned to our local machine, we can open it in VSCode and begin to work in it.

1. Open VSCode.
2. Choose File / Open
3. Navigate to where the repository folder is located.
4. Select the folder name.
5. Click "Open".
   ![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/SelectRepo.png)

And now you are inside the enviornment.
![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/InEnv.png)

## Install the Environment

Now that the environment has been revealed, we need to install it on our machines. Don't worry. This is just an install that downloads the JavaScript dependencies to the environment (that is contained in the folder). Here's how to do so:

1. Open the terminal inside of VSCode. Press the control + tilde keys.
2. Type `npm install`.
   - This command will download all the dependencies from the `package.json` file. It takes a few minutes. A few `WARN` notes might show up in the terminal. That's fine. There's nothing that will break in this version.

![Package JSON](https://im-js-in-fm-images.s3.amazonaws.com/packageFile.png)
Now, the enviornment is installed. We can now start it up (one more step) and then use it.

## Configure the Widget

Inside the  `widget.config.js` file, update the widget name to match what you are building. The name of the widget will eventually be deployed to FileMaker inside the "HTML" table, and will identify each widget uniquely. You can learn more about this file in [Under the Hood](/docs/under-the-hood.mdx). But for now, update the widget name and the file name from the defaults of "jsDev".

![config.js](https://im-js-in-fm-images.s3.amazonaws.com/configjs.png)

## Start up the Development Server

For this to work, we need to run a development server. So, in the terminal, let's type `npm start`. This command will

1. Compile the files together, building them into a `index.html` file.
2. Serve this file to the URL `localhost:1234`.

![Package JSON](https://im-js-in-fm-images.s3.amazonaws.com/npmStart.png)

And now the FileMaker app (go ahead and open it) will see the code in VSCode and will reflect all the changes you write.
