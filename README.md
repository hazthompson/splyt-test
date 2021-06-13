# Express React Boilerplate

## Set up

Technical stack:

### Front end

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Back end

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Usage

### create .env file in the backend folder with the following variables (see also example.env):

```

```

### Run App locally

1. Start the API. (Run the following commands in the root folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the HTTP server. (This will now be available at http://localhost:8000)

   ```bash
   npm start
   ```

2. Start the React app. (Run the following commands within the `client` folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the application (will start on port `3000`)

   ```bash
   npm start
   ```

3. Visit http://localhost:3000

### To test

1. fontend

   ```bash
   npm test
   ```

   or

   ```bash
   npm test:watch
   ```

2. backend
   ```bash
   npm test
   ```
