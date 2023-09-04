---
title: The In Depth Process
description: Follow these steps.
---

Once we have all the necessary apps and services on our machine, we're ready to create a widget.

Here are two methods. The first one, the `install` version is new as of 2023-09-01, and is the recommended one. The other `clone` version is the original method, and is still valid. I wouldn not (and do not) use it, but it's here for reference.

## The Install Method
In this method we'll download the environment from the repository, install it, and then configure it. Most of this is done automatically when you type the following command. 

First, navigate to the directory in which you want the widget to be placed. 

Then type the following command:
```
npx @integrating-magic/create-js-in-fm-widget
```
If you are running this for the first time, you might have to install an under-the-hood package. This is stored in your node app directory. So, go ahead and install it.
![npx Install](https://im-js-in-fm-images.s3.amazonaws.com/npxInstall.png)
Otherwise, the command will run and you'll be given a few prompts. Follow those. Make sure the name of the widget is unique to the directory in which you are placing it.
The prompts will ask you the following:
```
? Name of the widget (no spaces, please)
? Description
? Author
? Version
? License
? Widget Type
? The name of the target (client) file in which the widget will be placed
? Install & initialize the repo?
```
See the sections below here to understand what each of these prompts are asking.


### Name of the Widget
Give this widget a name. It must be unique to the directory in which the widget is placed. Do not use spaces or capital letters.
### Description
Give your widget a description. 

### Author
Give your widget an author. This is the name of the person who is creating the widget. It can be your name or the name of your company.

### Version
Give your widget a version. This is the version of the widget. It's a good idea to start with `1.0.0` and then increment it as you make changes.

### License
Give your widget a license. This is the license under which the widget is released. The default is `MIT`. You can read more about licenses [here](https://choosealicense.com/).

### Widget Type
Depending on the type of widget you want to create, you can pick from the following options:
```
> JS
> React
> DataTables
> Apex
```
These options are available because there are starter files for each one of these ready for your use. If you choose `JS`, then you'll get a basic JavaScript widget. If you choose `React`, then you'll get a React widget (with Tailwind CSS). And so on.
### Install & Initialize the Repo
The last prompt there will ask you if you want to set up the widget fully by installing it and initializing it for `git` use. If you say `yes`, then the widget will be installed and ready to go. If you say `no`, then you'll have to install it yourself.


If you choose 'no' on the last question, you will NOT have a widget that installed. That's easy enough: cd into the directory and type `npm install`. That will install the widget. Then, type `npm start` to start the development server.

Additionally, if you choose 'no', the reposotry will not be set up to track the changes you're making. Also, it is not set up to be pushed to GitHub. You can initialize the repository by running the following commands:
```
cd <<your directory>>
git init
```
Then, you can add the files to the repository and push them to GitHub.

### The Beauty of the Install Method
After typing this command, all the work is done for you: the widget is named, the JS Dev Environment has been cloned to your machine and installed. All you have to do is open the widget in VSCode and start working.
## The Clone Method
This method is still valid. It's the original method. I would not (and do not) use it, but it's here for reference.
### Grab the JS Dev Environment

Start by getting the [repository](https://github.com/integrating-magic/js-dev-environment) from which we'll make our development environment.

Here's how to do this:

1. Go to the environment's repository link.
2. Click on the "Use This Template" button (make sure you're signed into your Github account).
   - This process will ask you to save the repository to your own Github account. Fill in the relevant information (see [here](intro/misc/what-is-repo.mdx) for more details), and then let the process work.

First, fill out the information here. There's no spaces in a repo, name, so use camel case or hypens (I prefer the latter for repo names).
![StepZero](https://im-js-in-fm-images.s3.amazonaws.com/StepZero.png)

Let that process run after clicking the green button at the bottom. Once you do that, you'll be presented with this repository on your GitHub account.
![StepOne](https://im-js-in-fm-images.s3.amazonaws.com/stepOne.png)

### Clone to Your Machine

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


### Reveal the Environment

Now that we have the repository cloned to our local machine, we can open it in VSCode and begin to work in it.

1. Open VSCode.
2. Choose File / Open
3. Navigate to where the repository folder is located.
4. Select the folder name.
5. Click "Open".
   ![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/SelectRepo.png)

And now you are inside the enviornment.
![Step Two](https://im-js-in-fm-images.s3.amazonaws.com/InEnv.png)

### Install the Environment

Now that the environment has been revealed, we need to install it on our machines. Don't worry. This is just an install that downloads the JavaScript dependencies to the environment (that is contained in the folder). Here's how to do so:

1. Open the terminal inside of VSCode. Press the control + tilde keys.
2. Type `npm install`.
   - This command will download all the dependencies from the `package.json` file. It takes a few minutes. A few `WARN` notes might show up in the terminal. That's fine. There's nothing that will break in this version.

![Package JSON](https://im-js-in-fm-images.s3.amazonaws.com/packageFile.png)
Now, the enviornment is installed. We can now start it up (one more step) and then use it.

### Configure the Widget

Inside the  `widget.config.js` file, update the widget name to match what you are building. The name of the widget will eventually be deployed to FileMaker inside the "HTML" table, and will identify each widget uniquely. You can learn more about this file in [Under the Hood](/docs/under-the-hood.mdx). But for now, update the widget name and the file name from the defaults of "jsDev".

![config.js](https://im-js-in-fm-images.s3.amazonaws.com/configjs.png)

### Start up the Development Server

For this to work, we need to run a development server. So, in the terminal, let's type `npm start`. This command will

1. Compile the files together, building them into a `index.html` file.
2. Serve this file to the URL `localhost:1234`.

![Package JSON](https://im-js-in-fm-images.s3.amazonaws.com/npmStart.png)

And now the FileMaker app (go ahead and open it) will see the code in VSCode and will reflect all the changes you write.
