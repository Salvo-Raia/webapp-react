![Static Badge](https://img.shields.io/badge/Boolean_Tech_Academy-1565C0?style=for-the-badge)

# Exercise 50/50: React Web App

Complete a movie web application by integrating a React frontend with an Express backend, implementing review submission and introducing a global loading system.

## Project overview

| Repository | Project | Category | Main Focus | Exercise |
|:--|:--|:--|:--|:--|
| webapp-react | React Web App | Exercise | React, Express, API, global state management | 50/50 |

## Assignment

Complete the movie web application through three consecutive development stages, connecting the React frontend to the existing Express backend and improving the overall user experience.

### Part 1 - Prepare the frontend of the web application

#### Milestone 1: Component planning

Define the initial application structure and identify the components that can be reused.

- Plan the application structure before starting development.
- Create a preliminary diagram to organize the components.
- Identify opportunities to reuse React components through props.

#### Milestone 2: React project setup

Set up the React project and install the dependencies required by the application.

- Create a new React project using Vite.
- Remove unnecessary example files and code.
- Install the required dependencies:
  - React Router
  - Axios
  - Bootstrap (optional)

#### Milestone 3: Layout and routing

Build the main application layout and configure navigation between its pages.

- Create the basic application layout.
- Configure the routes for the different pages.
- Implement two pages:
  - **Home** - Display the list of movies.
  - **Movie Detail** - Display the details of a single movie.

#### Milestone 4: Backend integration

Configure the Express backend (`webapp-express`) to accept requests from the React application.

- Install and configure the **CORS** middleware.
- Make an AJAX request from the React home page.
- Retrieve and display the list of movies from the backend.

#### Milestone 5: Movie details and reviews

Retrieve the information required to display each movie and its associated reviews.

- Make an AJAX request from the movie detail page.
- Retrieve the details of a single movie.
- Retrieve and display its associated reviews.

#### Bonus challenge

Improve the visual appearance of the application.

### Part 2 - Movie review submission

Improve the user experience by allowing users to submit new reviews for movies.

#### Milestone 6: Backend - Save reviews

Create the backend functionality required to receive and store new movie reviews.

- Create an API endpoint to save a new review in the database, associating it with the corresponding movie.
- Test the endpoint using Postman.
- Verify in the database that the new review has been successfully inserted.

#### Milestone 7: Frontend - review form

Build the form that allows users to submit new reviews and display them in the movie detail page.

- Create a component containing the review form.
- Integrate the component into the movie detail page.
- When the form is submitted, send the new review to the backend.
- Save the review in the database.
- Display the newly submitted review at the bottom of the existing reviews.

#### Bonus challenge

Implement validation in the review form to ensure that submitted data meets the required criteria.

### Part 3 - Global loader

#### Milestone 8: Implement the global loader

Improve the user experience of the SPA by introducing a reusable loading component.

- Create a dedicated **Loader** component.
- Make the component available across all pages of the application.
- Create and use a React Context to manage the loader's state.
- Allow any component to activate or deactivate the loader when needed.

#### Bonus challenge

Customize the application's appearance using CSS.

## Technologies

![JSX](https://img.shields.io/badge/JSX-6A1B9A?style=flat-square&logo=react&logoColor=F7DF1E&labelColor=6A1B9A&color=6A1B9A)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

## What I learned

- Planning React application architecture.
- Designing reusable components and managing props.
- Setting up a React project with Vite.
- Configuring client-side routing with React Router.
- Making AJAX requests using Axios.
- Connecting a React frontend to an Express backend.
- Configuring cross-origin resource sharing with CORS.
- Retrieving and displaying data from an API.
- Managing movie details and related reviews.
- Creating API endpoints to insert database records.
- Building reusable React form components.
- Handling form submissions and asynchronous requests.
- Implementing client-side form validation.
- Updating the interface dynamically after submitting data.
- Managing global state with React Context.
- Sharing loading state across multiple components and pages.
- Building reusable UI components and improving the user experience through loading indicators and custom styling.

## Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course (Class 152, A.Y. 2025-2026).
