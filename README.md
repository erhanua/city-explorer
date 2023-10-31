# City Explorer

**Author**: [Erhanua]  
**Version**: 1.0.0

## Overview
**City Explorer** is a web application that allows users to retrieve information about a specific city. Users can enter a city name and get its latitude, longitude, and other relevant details.

## Getting Started
1. Clone the project to your local machine.
2. Navigate to the project directory in the terminal and run `npm install` to install the necessary dependencies.
3. Create a `.env` file and add your LocationIQ API key with the variable name `VITE_API_KEY`.
4. Start the application by running the `npm run dev` command.
5. Open your browser and navigate to http://localhost:3000 to start using the application.

## Architecture

### Technologies and Tools:

- **React**: The foundational JavaScript library for this application. With its component-based structure, React has been used to construct the user interface of the application.
- **Vite**: A modern build tool that allows for the rapid initialization and compilation of the project.
- **Axios**: A popular JavaScript library for making HTTP requests. Within the City Explorer application, Axios is used to make requests to the LocationIQ API.

### Project Structure:

- **Components**: The application is divided into reusable React components:
  - **CityExplorer**: The component that allows users to input a city name and initiate a search.
  - **LocationInfo**: The component that displays the search results.
  - **CityMap**: The component that displays the map of the selected city.
- **API Requests**: The `getLocation` function makes requests to the LocationIQ API based on the city name entered by the user.
- **State Management**: The state of the application is managed using React's `useState` hook. This state provides access to information such as search results, errors, and the map URL.
- **Style and Design**: The styling of the application is done using CSS (App.css). No specific CSS framework or library has been used.


## Change Log
- 30-10-2023 00:00pm
  - Application created and basic features added.
  - User feedback added for error messages.
  - Map feature added.

## Credit and Collaborations
- **LocationIQ API**: The API used to retrieve city information. [Website](https://locationiq.com/)
- **Axios**: Library used for HTTP requests. [GitHub Repository](https://github.com/axios/axios)
- **Vite**: Fast build tool used for creating the application. [Website](https://vitejs.dev/)



