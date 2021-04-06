Includes a solution.md that provides relevant documentation including how to build and run the solution

In a solution.md in the root of the repository:
- List any future updates, changes, or outstanding code you would like to add or would recommend be added
- Document any assumptions, changes, or details of the implementation that materially impact the addition of future features.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## Project Purple Cow

### Description
This is an proof of concept for a counting application called "Project Purple Cow". It is build with React JS.

### How to install
On Github

Here is the link to this repository (if you're not viewing this document in GitHub): 

### How to run
Once you installed the project on your computer, open a terminal/Git Bash and go to the directory where the project is at (for example: cd Desktop/project-purple-cow). Then, type in and run the command: npm start. This should start the app and opens it in a browser, like 
Google Chrome.

## How to use
Once the app is running on your browser (ie. Google Chrome), you'll see a webpage and on the center is a purple button called "Click me!"
and the current number of clicks the button was clicked on. If you click the button, you'll increase the number of clicks by 1.


## Possible Future Updates
- Might update the design of the application, such as adding background color or make it look more appealing to users. I would be updating the CSS or using Sass instead if the design gets more intricate.
- Might add a loading screen when the app loads (when requesting from the countapi)
- If used in another app, that also uses React JS, the button can be reused or it might be updated to fit that app's design. Same with the rest of this application
- Countapi also have another method that can display the number of visits to the page, it might be a possible implementation. It can be displayed simiarly to the "Number of hits" description.
- Currently have no domain name, unsure if they will be implemented if the app is put into production.

- List any future updates, changes, or outstanding code you would like to add or would recommend be added
- Document any assumptions, changes, or details of the implementation that materially impact the addition of future features.

//explain what this is
//explain what it does/ or how to use it
//explain how to run it

//future implementations is probably make the code more reusable 
+>such as css, there are probably some colors or styles that are probably going to be reused ->end up doing that anyways...
+>make the UI more comformtable for the user to look at
+>at loading screen...? since using an api to do the counter


//so I'm NOT updating the counter with React and state
//I'm USING THE COUNTAPI to update the counter
//meaning I'm sending requests to the CountAPI to help me update the counter
//or specifically, when ever a user clicks on the button, the app sends a request to the countapi to get back a number 