# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Trivia** is a project that grabs ten trivia questions from the open trivia database and keeps track of scores in a leaderboard. You have to log in to play the game, and those logins will be stored in a table that is linked to high scores._


<br>

## MVP

_The **Trivia** MVP will contain three tables: users, trivia questions, and high scores. The application will use a front-end to shape the GUI and a back-end to store the data. Trivia games will be twenty questions, each worth 200 points, for a maximum score of 4,000 points. A leaderboard will be implemented to save high scores and the users that achieved them. Users will be able to remove their scores from the leaderboards and also remove their account._

<br>

### Goals

- _A landing page that requires users to sign up before playing a game of trivia._
- _After logging in, a home page that lets you start a round of trivia._
- _The trivia game consists of twenty questions that get cycled through, while a running score keeps track of questions answered correctly._
- _A separate leaderboard component that shows high scores earned._
- _Full CRUD funcionality for leaderboard scores and user accounts._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|       API        | _https://opentdb.com/api_config.php_ |
|      React       | _Will be used to develop the GUI on the front end._ |
|   React Router   | _Will contain trivia game components like multiple choice answers and questions._ |
|     Express      | _Tables will be created for users, questions, and the leaderboard._ |
|  Express Router  | _Each table component above will be called upon on their appropriate pages._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Body.jsx
      |__ Leaderboard.jsx
      |__ Question.jsx
      |__ Final_Score.jsx
      |__ User_Create.jsx
      |__ User_Delete.jsx
|__ services/

```

#### Component Tree



![Component tree](blob:https://whimsical.com/5788c001-7eda-44a8-aef2-0792578feca6)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :-----------: |
| Create User Database    |    H     |     3 hrs      |     TBD     |
| Create Sign Up/Log In Pages |    H     |     4 hrs      |     TBD     |
| Create Landing Page |    H     |     4 hrs      |     TBD     |
| Create Leaderboard Table |    H     |     5 hrs      |     TBD     |
| Implement Top Five Leaderboard Scores on Home Page |    M     |     4 hrs      |     TBD     |
| Call Upon the Trivia API to post a random question |    H     |     5 hrs      |     TBD     |
| Make a game that uses twenty questions |    H     |     6 hrs      |     TBD     |
| Implement scoring system |    M     |     3 hrs      |    TBD    |
| Allow CRUD for leaderboards and user accounts |    H     |     5 hrs      |    TBD    |
| Post-MVP: Customize difficulty |    L     |     4 hrs      |    TBD    |
| Post-MVP: Make score proportional to question difficulty |    L     |     4 hrs      |    TBD    |
| Post-MVP: Allow users to select category of questions |    L     |     5 hrs      |    TBD    |
| TOTAL               |    H     |     55 hrs      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

- _Customize difficulty by allowing the user to pick more difficult questions for a higher score potential._
- _Base the score on how difficult the questions are, the harder the question the higher the points that can be scored._
- _Allow users to select the category of trivia they desire._

***

## Code Showcase

To be included at a later point.

## Code Issues & Resolutions

To be included at a later point.
