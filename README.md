📌 Overview
Cruise Connect is a MERN stack app with essential dependencies like Redux Toolkit, Stripe, testing-library, React, React Router, and Tailwind CSS, AWS.

## 🔍 Table of Contents

* [📝 Project Summary](#-project-summary)

* [💻 Stack](#-stack)

* [⚙️ Setting Up](#-setting-up)

📝 Project Summary
client/src: Contains the main source code of the client-side application.
client/src/api: Handles API requests and responses.
client/src/app: Contains the main application files and components.
client/src/assets: Stores static assets used in the application.
client/src/components: Houses reusable UI components.
client/src/features: Contains feature-specific components and logic.
client/src/pages: Holds the different pages of the application.
client/src/utils: Provides utility functions and helper methods.
server/controllers: Implements the logic for handling HTTP requests.
server/models: Defines the data models used by the server.

💻 Stack

reduxjs/toolkit: A library that simplifies Redux state management.
stripe/react-stripe-js: React components for integrating Stripe payments.
testing-library/jest-dom: Custom Jest matchers for easier testing.
axios: A promise-based HTTP client for making API requests.
react: A JavaScript library for building user interfaces.
react-dom: Provides the DOM-specific methods for React.
react-redux: Official React bindings for Redux.
react-router-dom: Declarative routing for React applications.

⚙️ Setting Up

Environment Variables
To run this project, you will need to add the following environment variables to your .env file in the server folder

STRIPE_SECRET_TEST

JWT_SECRET

BUCKET_NAME

MONGO_URI

