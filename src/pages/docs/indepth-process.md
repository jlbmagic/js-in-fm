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
2. Click on the "Use This Template" button.
   - This process will ask you to save the repository to your own Github account. Fill in the relevant information (see [here](intro/misc/what-is-repo.mdx) for more details), and then let the process work.

First, fill out the information here. There's no spaces in a repo, name, so use camel case or hypens (I prefer the latter for repo names).
![StepZero](/img/StepZero.png)

Let that process run after clicking the green button at the bottom. Once you do that, you'll be presented with this repository on your GitHub account.
![StepOne](/img/stepOne.png)

## Clone to Your Machine

Next, we need to clone the repository. That is, we need to get all the code down from GitHub to your local machine will keeping a link between the local and remote. To do that, click on the "Code" button and click the clipboard icon. We'll use that copied URL in the next section.
![Step Two](/img/Clone.png)

Let's do some work now in Terminal (keeping that copied URL in mind).

Here's what to do:

1. Open Terminal.
2. Change Directory into a folder where you want this environment to be located. All of the files in that repository will be put into this place.
   - I've got all my repostories stored in a folder called "JSWork" inside my Documents folder, so the path to the directory looks like this:
     `cd /users/jeremybrown/documents/jswork`
3. Now that terminal is in that directory, type `git clone` + space, and then paste the repository URL.
   - Here's what my line looks like:
     - `git clone https://github.com/jlbmagic/this-is-my-environment.git`
   - This will clone the repository from the remote on GitHub to your local machine in that directory.
   - If this is the first time ever using Git, then you might have to install some git tools.
     - You might see a message that looks like this:
       - `The "git" command requires the command line developer tools. Would you like to install.."`
       - If that's the case, let it happen.
     - It might take 10 minutes or so.
     - When this finishes, run the `git clone` command again.

And here is the repsitory on my machine.
![Step Two](/img/InFolder.png)

## Reveal the Environment

Now that we have the repository cloned to our local machine, we can open it in VSCode and begin to work in it.

1. Open VSCode.
2. Choose File / Open
3. Navigate to where the repository folder is located.
4. Select the folder name.
5. Click "Open".
   ![Step Two](/img/SelectRepo.png)

And now you are inside the enviornment.
![Step Two](/img/InEnv.png)

## Install the Environment

Now that the environment has been revealed, we need to install it on our machines. Don't worry. This is just an install that downloads the JavaScript dependencies to the environment (that is contained in the folder). Here's how to do so:

1. Open the terminal inside of VSCode. Press the control + tilde keys.
2. Type `npm install`.
   - This command will download all the dependencies from the `package.json` file. It takes a few minutes. A few `WARN` notes might show up in the terminal. That's fine. There's nothing that will break in this version.

![Package JSON](/img/packageFile.png)
Now, the enviornment is installed. We can now start it up (one more step) and then use it.

## Start up the Development Server

For this to work, we need to run a development server. So, in the terminal, let's type `npm start`. This command will

1. Compile the files together, building them into a `index.html` file.
2. Serve this file to the URL `localhost:1234`.

![Package JSON](/img/npmStart.png)

And now the FileMaker app (go ahead and open it) will see the code in VSCode and will reflect all the changes you write.