# Zappar Member List

## User Task

### Build a table with a list of users as described by the Sketch mockup.

### Requirements:

- The styling should match the specs provided via sketch link
- Whenhoveringarowit’sbackgroundcolourshouldchangeandabiniconshould
  appear
- When clicking on the bin the row should be removed
- The red plus and the “Invite” buttons should generate a new, random, user and
  add it to the bottom of the

### How to run

- Clone the repo on your local
- Install all dependencies on Terminal `npm i`
- Open a separate tab on Terminal and run `npm start` page will be available on 'localhost:4000'
- On separate tab run `npm run build` to compile app.js

### Approach

Based on task requirements I have created my own array of object creating all members profile accordingly to the mockup provided via sketch.
The entire table has been created dynamically in order to implement it with all functionality requested to not loose any property. Same approach has been taken to generate a new member row to add to the bottom of the list when click on the '+' or 'invite' button.
I' ve decided to convert all images provided into SVG and store all of them into '\_base.scss' allowing me to create all my variables which is then exported to 'style.scss'.
On top on all dynamic function to create the table using vanilla Javascript, I did use also Jquery for the reason that I have to play with DOM manipulation by creating new tag to append to the existing table once rendered.
To create a new random row that pick random member name, email, role a new function is required to be fired on click as per user task.

### Structure

- All files are stored into /src, /src/scss, /src/images
- /mockup contians only the design to reproduce as reference
- /\_base.scss contains all variables needed in order to have a code more clean and organised.

### Useful links

- To try to match the right HEX color I did use: ' https://imagecolorpicker.com/'
- To get as closer as possible to font I've done my search on 'https://fonts.google.com/ '
- To compare sketch design I did use 'https://www.photopea.com/ '
