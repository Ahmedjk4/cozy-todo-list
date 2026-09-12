![Screenshot of the website](https://user-cdn.hackclub-assets.com/01a09695-35c4-7f7c-aef5-4c7d6487ef62/Screenshot%202026-09-12%20200533.png)

# What Is This ?
You probably guessed from the repo name, it's a ***Cozy Todo List*** <br>
https://ahmedjk4.github.io/cozy-todo-list/index.html

# Features

- There is the main page (index.html) where you can add a new task, remove an existing one, mark one as done, or change background image.
- It plays sound when you complete the task and when you uncheck one.
- There is working Good Morning and Good Evening changing according to the time of the day.
- And there is a statistics page (stats.html) where you can see the no. of tasks you've done and also change the background.

# Technical side

It uses localStorage to store todos, and saves it in a javascript array of objects, and uses for loop to iterate through this array of objects and adds it to card grid
using increasing innerHtml by a string.

Then uses the setInterval function to check for anychange on the todos and resaves the list if change was detected
And also use Date().getHours(); to get the time of the date to change the greeting according to the time.
on the stats page, it uses localStorage "completedTasksCount" key to get the no. of completed tasks.

## Sponsored by Hack Club
