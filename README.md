# Assessment1-App

This is a single-page application built with React JS. It's designed to allow users to submit author names and display them on the page. It also retrieves and displays a list of users from a dummy API.

## Features

1. **Author Name Submission**: The application includes a form with a text field for "author name" and a "submit" button. Users can submit author names through this form. The application validates the input to ensure it's neither empty nor a duplicate before adding it to the list of author names. The list of author names is displayed on the page and persists across page refreshes.

2. **API User Retrieval**: The application retrieves a list of users from the dummy API at `https://jsonplaceholder.typicode.com/users`. The retrieved list of users is displayed on the page.

## Running the Application

To run the application, follow these steps:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the application with `npm start`.
4. Open `http://localhost:3000` in your web browser.
