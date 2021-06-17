# Express React Boilerplate

This app shows an interactive map, which toggles between displaying the Splyt offices in London and Singapore at the center. Surrounding the central Splyt office the nearest taxis are displayed. There is an interactive slider which allows you to choose how many taxis you can view (ranging from 2-10).

## Deploy link

https://quiet-reaches-82718.herokuapp.com/

## Set up

Technical stack:

### Front end

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Back end

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Usage

### create .env file in the client folder with the following variables (see also example.env):

```
REACT_APP_BOOTSTRAPURLKEY=
REACT_APP_API_URL=
REACT_APP_ACCESS_ALLOWED_PROXY=

```

### Run App locally

1. Start the React app. (Run the following commands within the `client` folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the application (will start on port `3000`)

   ```bash
   npm start
   ```

2. Visit http://localhost:3000

### To test

1. fontend

   ```bash
   npm test
   ```
