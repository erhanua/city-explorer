# City Explorer

**Author**: [Erhanua]  
**Version**: 1.0.0

## Overview
City Explorer is a web application that allows users to retrieve information about a specific city. Users can enter a city name and get its latitude, longitude, and other relevant details.

## Getting Started
1. Clone the project to your local machine.
2. Navigate to the project directory in the terminal and run `npm install` to install the necessary dependencies.
3. Create a `.env` file and add your LocationIQ API key with the variable name `VITE_API_KEY`.
4. Start the application by running the `npm run dev` command.
5. Open your browser and navigate to http://localhost:3000 to start using the application.

## Architecture

**Technologies and Tools:**
- **React**: The foundational JavaScript library for this application. React, with its component-based structure, is used to build the user interface of the application.
- **Vite**: A modern build tool that ensures fast startup and compilation of the project. It also offers instant hot module replacement (HMR) via ES modules, speeding up the development process.
- **Axios**: A popular JavaScript library used for making HTTP requests. In the City Explorer application, Axios is used to make requests to the LocationIQ API.

**Project Structure:**
- **Components**: The application is divided into reusable React components. These components represent different parts of the user interface (e.g., search form, result list, map viewer).
- **API Requests**: The application makes requests to the LocationIQ API based on the city name entered by the user. These requests are facilitated by the Axios library.
- **State Management**: The state of the application is managed using React's useState and useEffect hooks. This state provides access to user search results, errors, and the map URL.
- **Style and Design**: CSS is used for styling the application. No specific CSS framework or library is used.

## Change Log
- 30-10-2023 00:00pm
  - Application created and basic features added.
  - User feedback added for error messages.
  - Map feature added.

## Credit and Collaborations
- **LocationIQ API**: The API used to retrieve city information. [Website](#)
- **Axios**: Library used for HTTP requests. [GitHub Repository](#)
- **Vite**: Fast build tool used for creating the application. [Website](#)



