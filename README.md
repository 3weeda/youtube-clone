## Scripts to run:

If the API is not responding, then most likely the current api key have exceeded its daily quota. If that happens, then you'll be needing a new youtube api key, it's easy to generate

### 1. `Get a Youtube API key -You might not need it-`

1. visit [Youtube developers console](https://console.developers.google.com/)
2. Sign in with your google account
3. Agree to terms
4. Click `Create new project`
5. Click `Enable APIs and Services`
6. Scroll down and choose `Youtube Data API V3`
7. Click `Enable`
8. On your left side, click `Credentials`
9. Click `Create Credentials`
10. Copy the generated key and paste it to this project in the followin path: `src/api/index.js` as apikey value.
11. Happy hacking!

### 2. `npm install`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### 3. `npm start`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Personal Notes on the project:
I really had fun implementing it, and I'm deeply sorry for being late, life wasn't helpful on my side :D, I have a few notes before you check the project I'd like to tell you, kindly check them:
    1.`Verification sign beside channel title is currently not available on any of the APIs as stated on some questions on Stackoverflow`
    2.`Mobile view Dropdown filter menu is unfortunately not working yet, the desktop collabsible menu is working properly`
    3.`one of the reasons I was late is that I spent some time learning Flux Architecture -I didn't use it before- and unfortunately the version I tried to build with it is really buggy and not complete yet`
    4. `I used both class components and hooks to showcase that I'm comfortable using both`
    5. `Next possible update: Configure a Redux version and a Flux version`
    6. `Next possible update: Handle errors more properly`

### Thank you for your time, and I'm looking forward to hearing your feedback!


### quiz Details and checklist:

## Notes:

- ✔ Add README file with the steps of configuring your app and running it
- ✔ Use Git version to preview your project

## Requirements:

- ✔ Create SCALEABLE COMPONENT based on JavaScript By using Vue/React
- ✔ Consider the project to be SCALEABLE
- ✔ Create responsive app
- ✔ Don't use CSS frame works (Only CSS components)
- ✔ use SASS and follow the guidelines mentioned bellow

- ✔ create a responsive YOUTUBE like app
- head bar:

  - ✔ in mobile it will be scrollable
  - ✔ in desktop it will be fixed

- the main page:

  - ✔ is a search page /search?query={txt}

- in mobile:

  - ✔ it will look like mbile1.png has header, filters, and body
  - ✔ the header contains logo search text and search icon
  - ✔ when u click on the search key the search text will convert to search input like in search-control.png
  - ✔ the loading will be like the mobile-loading-state.png

- in desktop:
  - ✔ it will looks like desktop-view.png/ desktop-view-1.png
  - ✔ the heder is fixed when scrolling
  - ✔ the header has the logo and the search controllers
  - ✔ the second header had the results count and the filters button
  - ✔ when u search (write in textbox and press enter or click the search button) the loading bar will appear like in desktop-loading.png

use youtube Apis:
the search Api https://developers.google.com/youtube/v3/docs/search/list

### Preferred:

- ✔ Use git and the make sure the commit messages makesense
- ✔ try to use css and js linters, be consistent in the way of writing your code
- Use Flux Arch

### Guidelines

- BEM,& SCSS in writing you scss code.
- css guideline:
  - http://cssguidelin.es/.
- js guidelines:
  - https://github.com/airbnb/javascript/tree/master/es5
