# Hawa Khana Restaurant

React restaurant website I built for my Web Dev class. It has a home page, about page, Firebase-powered menu, location page, and a contact form.

**Live site:** https://agupta362.github.io/hawa-khana-restaurant/

## Features

* Multi-page React app with React Router
* Custom restaurant branding and copy
* Menu loaded from Firebase Firestore
* Contact form page
* Location / visit info page
* Responsive layout for desktop and mobile
* Deployed with GitHub Pages

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React, Vite |
| Routing | React Router |
| Backend data | Firebase Firestore |
| Deploy | GitHub Pages |

## Pages

* `/` Home
* `/about` About the restaurant
* `/menu` Menu from Firebase
* `/location` Location info
* `/contact` Contact form

## Run locally

```bash
git clone https://github.com/agupta362/hawa-khana-restaurant.git
cd hawa-khana-restaurant
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Notes

The Firebase web config lives in `src/firebase.js` because this was a class project using the Firebase client SDK. The old Vercel production URL expired, so the current live link is GitHub Pages.
