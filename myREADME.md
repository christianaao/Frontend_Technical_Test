# Clarus WMS - Technical Test

This is a project completed for Clarus WMS' Tech Assessment, built using Ember v5.8.

Below are some instructions on how to set up this repository.

## Instructions

### 1. Clone the Repo

Fork this repo before working on it. Then in your chosen directory, clone the repo using the command: `git clone https://github.com/your-username/forked-repo-link.git`

### 2. Install Dependencies

Run `pnpm install -g ember-cli` to install Ember

Run `pnpm install firebase` to install Firebase

Run `pnpm i` to install all dependencies

### 3. Run the App Locally

Ember provides a set of commands you can use to run the app locally.

#### Common Commands

`ember s` - Starts the project and go to [localhost:4200](http://localhost:4200/) to view the project.

You should be able to see a message like the following:

```
Build successful (247ms) – Serving on http://localhost:4200/
Slowest Nodes (totalTime >= 5%)
```

`ember t --s` - Runs the tests in a [localhost:7357](http://localhost:7357/)

### 4. Set up Firebase

#### Setting up Your Own Database

1. Create a firebase account.
2. Create a project
3. From the side menu: Build > Firestore Database
4. Click create database
5. Click start in _test mode_
6. On the Project Overview page (found in side menu) click the web icon under "Get started by adding Firebase to your app"
7. Add your Firebase configuration to config/environment.js:

#### This Project's Database

To access this project's database, enter this Firebase configuration to config/environment.js:

```javascript
ENV.firebase = {
  apiKey: "AIzaSyCUXvPY3iu5WiZSybyllWeTA_QuXSNCGe0",
  authDomain: "clarus-tech-test-74373.firebaseapp.com",
  projectId: "clarus-tech-test-74373",
  storageBucket: "clarus-tech-test-74373.firebasestorage.app",
  messagingSenderId: "253067208440",
  appId: "1:253067208440:web:349b24e12675fcd92c3d0d",
  measurementId: "G-XREMK9YG3Z"
};
```

## Useful Links

1. [Ember 5.8 Docs](https://guides.emberjs.com/v5.8.0/)
2. [Firebase](https://firebase.google.com/docs)

Copyright (c) 2025 - [Clarus WMS](https://claruswms.co.uk/)