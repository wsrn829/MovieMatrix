# MovieMatrix

This movie app is an enhanced version of MovieMaster, where I will incorporate more sophisticated techniques (Redux, AI, AWS) to realize more complex features. I will also note down all the processes for better internalization and for future projects.


### Initial Setup
1. Download node.js from the official website and install it (if you haven't already).
2. In the project terminal, run: `npx create-react-app ./`.
3. `npm install` will install all the dependencies listed in package.json and generate the 'node_modules' folder.


### File Structure of This App
4. The most important part of package.json is the dependencies list, specifying the libraries the project relies on. 
5. The most important directory in a React app is src, including index.js and a components folder. 
6. The index.js file connects the React virtual DOM with the actual DOM defined in index.html in public directory. 
7. The components folder contains reusable code that is rendered by App.jsx to create a Single Page Application (SPA).
8. `rafce` -- A shortcut to create reactArrowFunctionExportComponent (ES7 extension is needed).
9. How to hook ReactDOM with actual DOM?
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```


### ESlint Setup and Configuration
10. `control + C` to stop the server.
11. `npm install -g eslint`
12. `eslint --init`


### Libraries
13. Find a balance between using lots of libraries and writing lots of code.
14. Preparation is key.
15. Every time we change .env, we should restart the app.


### Styling
16. Some competitors: Bootstrap, Tailwind CSS, Material UI, Ant Design, Semantic UI, Foundation, Chakra UI, Bulma

<br />

--------------------------------------

### Redux Toolkit Implementation !!! (RTK Query makes API calls so much easier)
1. Redux - central state management tool for React applications (especially helpful in large-scale applications).
2. In src/index.js, i.e., where we are hooking virtual DOM with actual DOM:
   ```
   import { Provider } from 'react-redux';
   ```
   Provider is similar to BrowserRouter, used to wrap our entire App.\
   Provider includes store variable, so we need it to wrap the entire App to make store accessible to every single component.
4. Store is created in src/app/store.js using configureStore; this store.js file is the heart of Redux Toolkit, wihch is the central place where the app's state is managed. 
5. In src/index.js:
   ```
   import store from './app/store;
   ```
6. In store.js:
   ```
   import { configureStore } from '@reduxjs/toolkit';
   
   export default configureStore({
       reducers: {
           //the state you wanna manage is specified here
       }
   })`
    ```
7. In services folder, TMDB.js is for making API calls:
   ```
   import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
   
   export const tmdbApi = createApi({
       reducerPath: 'tmdbApi',
       baseQuery: fetchBaseQuery({ baseUrl: '' }),
   })
   ```
   



<br />

--------------------------

### Alan AI Implementation !!! (Combines AI and Natural Language Processing/NLP)


<br />


--------------------------

### Authentication !!


<br />

--------------------------


# MovieMaster

[This movie app](https://moviemasterweb.netlify.app) is created using Create React App and covers fundamental concepts, including:

- Virtual DOM vs. Real DOM
- Functional components vs. Class components
- React hooks such as useState and useEffect
- Props usage
- Asynchronous functions and fetching data
- Mapping elements
- Handling onSubmit, onChange, and onClick events
- Data fetching from the OMDb API (The Open Movie Database)
- Implementation of environment variables for improved security
- Continuous Integration/Continuous Deployment (CI/CD) pipelines.

Deployed site: https://moviemasterweb.netlify.app


<br />

