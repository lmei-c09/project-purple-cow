# Project Purple Cow

## Description
This is an proof of concept for a counting application called "Project Purple Cow". It is build with React JS and the API "countapi" (https://countapi.xyz/). Whenever a user clicks on a button (on the webpage/site), the app sends a request to the countapi to update the current number of clicks (based on a key that was given). The current number of clicks is also displayed as well.

In short, it is a counting application that counts the number of user clicks (on the button).

## Prerequisites
- Have Node js installed (https://nodejs.org/en/)
- Have Git installed (https://git-scm.com/downloads)
- Have an IDE installed (ie. Visual Studio Code)

## How to install
To download and install this project, go to Github and when you find this repository or already on it (https://github.com/lmei-c09/project-purple-cow):
- Click on the green "**Code**" button, then a drop-down box appears and offers various ways to download this project.

### Clone it by SSH or HTTPS
- Open Git Bash in the directory/folder you want to put this project in or you can create a new one.
- Then go back to GitHub or where the repo is at and click the green "**Code**" button again.
- If you have an account and SSH setup already, click the SSH tab and copy the link below it (or click on the clipboard icon next it to copy it). Else, you can clone it by HTTPS and do the same with, but on the HTTPS tab instead.
- Then, on the directory you want to put the project in, you can clone the project down by typing in the git command: `git clone` and pasting down the link (you copied for the repo) in Git Bash and run it.
- Once it finishes cloning the project, you can go into the project or type in `cd project-purple-cow` in the Git Bash.
- Because it is a freshly downloaded react project, it might not have the react scripts installed in the project and will not be able to run, so in the Git Bash, type and run `yarn add react` to install react into the project again (make sure you're in the project's directory).

### Download ZIP folder
- If you're on GitHub, where the repo is at and decide to download the zip folder. Click the green "**Code**" button again, and choose the last option "**Download ZIP**".
- Go to the directory/folder where you downloaded the zip file and extract the project.
- Then, go to the project directory and open Git Bash there (or open Git Bash and navigate to where the project is in)
- Run `git init` in Git Bash to initialized Git inside the project. 
- Then run `yarn add react` to re-install react into the project (or the react-scripts).

## How to run
Once you installed the project on your computer:
- Unless you have a terminal/Git Bash opened, open a terminal/Git Bash and go to the directory where the project is at (for example: `cd Desktop/project-purple-cow`). 
- Then, type in and run the command: `yarn start`. (This should compile and run the app and automatically opens it in a browser, like Google Chrome.) 
- If the app isn't open in a browser, go to one, and typed in http://localhost:3000/ on the address/URL bar. Also, make sure there isn't any other local apps running on port 3000.

## How to use
Once the app is running on your browser (ie. Google Chrome):
- You'll see a webpage and on the center is a purple button called "**Click me!**" and the current number of clicks the button was clicked on. 
- If you click the button, you'll increase the number of clicks by 1, which you can see updated on the "**Number of hits**".

## Possible Future Updates
- Might update the design/UI of the application, such as adding background color, adding in more information about the app, or make it look more appealing to users. I would be updating the CSS or using Sass instead if the design gets more intricate.
- Might add a loading screen when the app loads (when requesting from the countapi).
- If used in another app, that also uses React JS, the button can be reused or it might be updated to fit that app's design. Same with the rest of this application.
- Countapi also have another method that can display the number of visits to the page, it might be a possible implementation. It can be displayed simiarly to the "Number of hits" description.
- Currently have no domain name, unsure if it will be implemented if the app is put into production.
- Might also add tests to the app.
- Review the app's program again and see if I can make the code more 'DRY'(Don't Repeat Yourself)/resuable.
 