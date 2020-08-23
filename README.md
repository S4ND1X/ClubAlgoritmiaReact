# Club Algoritmia GDA Fullstack Project - Frontend
![enter image description here](https://i.imgur.com/RZoXTcW.png)

 
This repository contains the frontend of the official [GDA Algorithmic Club](https://github.com/Club-de-Algoritmia-GDA) page, you can **check out the backend repository** in [here](https://github.com/S4ND1X/ClubAlgoritmiaBackend).

##   Technologies
Backend technologies can be found in [here](https://github.com/S4ND1X/ClubAlgoritmiaBackend).
 - ReactJS
 - Axios
 - Hooks (useContext,useEffect,useState)	
 - Styled components (GlobalStyle and Styled)
 - JS
 -  HTML
 - CSS
***Extras***
 - Netlify
 - VSC
 
## Usage
Backend usage can be found in [here](https://github.com/S4ND1X/ClubAlgoritmiaBackend).

Git clone this repo to your computer
Inside the folder run:

    npm start
To start local development server
Api will start by default on port 4000.

This project contains environment variables for deployment and local development, so inside src folder create two files named:

    .env
    .env.development.local
 Inside *.env* place your base api url, this is the one that netlify will use in production. While in *.env.development.local* place the local api url, in my case it was on port 4000. For more information you can checkout backend usage [here](https://github.com/S4ND1X/ClubAlgoritmiaBackend).
 
Be sure to name your variables as REACT_APP_YOURNAME to follow the convention described in React Documentation: [https://create-react-app.dev/docs/adding-custom-environment-variables/](https://create-react-app.dev/docs/adding-custom-environment-variables/).
 
This environment variable will be used on the following file
   

     src/config/axios.js

Once you set up all of this, you should have your api data inside the context provider:

    src/context/WorkshopsProvider.jsx

If you follow all the instructions you should be all set up.
Each document contains its own proptype.

## Next features
This Web App is still in development, maybe for the next 3 months. The future features are the following:

 - Eventbrite API for fetching workshops data and so we can turn Eventbrite the central dashboard
 - Youtube API for fetching data from this [channel](https://www.youtube.com/channel/UCD_B4-slyYz-qYK7BI6R4oA) in order to display workshops recorded sessions inside the page.
 - Github Scrapping to get members profile info.(Easier for what I need than Github API)
 - Have a section for all of the bootcampers to upload their project and make a community project gallery.
 - Implement NextJS to enable server side rendering (Important if we want to scale it)

## Credits
I do not own any of the images on this project, all credits to the corresponding owners.
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)
