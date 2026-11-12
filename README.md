
![Boolean Tech Academy](https://img.shields.io/badge/Boolean_Tech_Academy-001632?style=for-the-badge)

# 🎓 Exercise 50/50 - React Web App

Complete a movie web application by integrating a React frontend with an Express backend, implementing review submission and introducing a global loading system.

## 📌 Project Overview

| Property | Details |
|:--|:--|
| Repository | `webapp-react` |
| Backend Repository | `webapp-express` |
| Category | Boolean Tech Academy |
| Type | Exercise |
| Exercise | 50/50 |

## 🎯 Assignment

Complete the movie web application through three consecutive development stages, connecting the React frontend to the existing Express backend and improving the overall user experience.

### Deliverable 1 - React Frontend Setup

Prepare the frontend of the web application.

#### Milestone 0 - Component Planning

- Plan the application structure before starting development.
- Create a preliminary diagram to organize the components.
- Identify opportunities to reuse React components through props.

#### Milestone 1 - React Project Setup

- Create a new React project using Vite.
- Remove unnecessary example files and code.
- Install the required dependencies:
  - React Router
  - Axios
  - Bootstrap (optional)

#### Milestone 2 - Layout and Routing

- Create the basic application layout.
- Configure the routes for the different pages.
- Implement two pages:
  - **Home:** Display the list of movies.
  - **Movie Detail:** Display the details of a single movie.

#### Milestone 3 - Backend Integration

Configure the Express backend (`webapp-express`) to accept requests from the React application.

- Install and configure the **CORS** middleware.
- Make an AJAX request from the React home page.
- Retrieve and display the list of movies from the backend.

#### Milestone 4 - Movie Details and Reviews

- Make an AJAX request from the movie detail page.
- Retrieve the details of a single movie.
- Retrieve and display its associated reviews.

#### Bonus - Application Styling

Improve the visual appearance of the application.

### Deliverable 2 - Movie Review Submission

Improve the user experience by allowing users to submit new reviews for movies.

#### Milestone 1 - Backend: Save Reviews

- Create an API endpoint to save a new review in the database, associating it with the corresponding movie.
- Test the endpoint using Postman.
- Verify in the database that the new review has been successfully inserted.

#### Milestone 2 - Frontend: Review Form

- Create a component containing the review form.
- Integrate the component into the movie detail page.
- When the form is submitted, send the new review to the backend.
- Save the review in the database.
- Display the newly submitted review at the bottom of the existing reviews.

#### Bonus - Form Validation

Implement validation in the review form to ensure that submitted data meets the required criteria.

### Deliverable 3 - Global Loader

Improve the user experience of the SPA by introducing a reusable loading component.

- Create a dedicated **Loader** component.
- Make the component available across all pages of the application.
- Create and use a React Context to manage the loader's state.
- Allow any component to activate or deactivate the loader on its own page.

#### Bonus - Custom Styling

Customize the application's appearance using CSS.

## 🛠️ Technologies

![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## 💡 What I Learned

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

## ©️ Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course - Class 152 - Year 2025-2026
