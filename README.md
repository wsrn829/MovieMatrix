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
17. 

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

### Alan AI Implementation !!! (Artificial Intelligence/AI + Natural Language Processing/NLP)


<br />


--------------------------

### Authentication !!


<br />

--------------------------

### Concepts I Was Asked During Interviews

1. What is virtual DOM?
   - The Virtual DOM (VDOM) is a programming concept used in web development frameworks, most notably in React.
   - The Virtual DOM is an abstraction of the real/actual/browser DOM (Document Object Model).
   - It is used to improve the performance of web applications by reducing the number of direct manipulations of the DOM.
   - When a user interacts with a web application, the application's state changes, and the UI needs to be updated to reflect these changes. Traditionally, developers would directly manipulate the DOM to make these updates. However, this approach can be inefficient, especially when dealing with complex UIs or frequent updates.
   - The Virtual DOM solves this problem by creating a lightweight representation of the DOM in memory. When the application's state changes, the Virtual DOM is updated instead of the real DOM. The Virtual DOM then compares the updated Virtual DOM with the previous version to determine the minimal set of changes needed to update the real DOM. These changes are then applied to the real DOM, resulting in a more efficient update process.
   - Overall, the Virtual DOM is a powerful tool for improving the performance and maintainability of web applications, and it has become a standard feature of many modern web development frameworks.

3. Why do we use virtual DOM?
   - Because virtual DOM makes DOM update faster by only updateing the necessary parts instead of the entire DOM by comparing old DOM and new DOM as an extra step.

5. What is the React component lifecycle?
   - React components have several lifecycle methods that allow you to hook into various points in the component's lifecycle. These methods can be used to perform actions such as setting up the component, updating it when the state or props change, and cleaning up resources when the component is removed from the DOM.
   - The React component lifecycle can be divided into three main phases:
   - 1) Mounting: This phase occurs when the component is first created and added to the DOM. The following lifecycle methods are called in this phase:
      - constructor(): The constructor method is called before the component is mounted. It is used to initialize the component's state and bind event handlers.
      - static getDerivedStateFromProps(): This method is called before rendering when new props are received. It is used to update the component's state based on the new props.
      - render(): The render method is called to generate the component's UI. It returns a React element that represents the component's UI.
      - componentDidMount(): This method is called after the component has been mounted. It is used to perform any setup tasks that require access to the DOM, such as fetching data from an API.
   - 2) Updating: This phase occurs when the component's props or state change. The following lifecycle methods are called in this phase:
      - static getDerivedStateFromProps(): This method is called before rendering when new props are received. It is used to update the component's state based on the new props.
      - shouldComponentUpdate(): This method is called before rendering when new props or state are received. It is used to determine if the component should re-render.
      - render(): The render method is called to generate the component's UI. It returns a React element that represents the component's UI.
      - getSnapshotBeforeUpdate(): This method is called before the component's changes are applied to the DOM. It is used to capture information about the DOM before it changes, such as the scroll position.
      - componentDidUpdate(): This method is called after the component's changes have been applied to the DOM. It is used to perform any cleanup tasks or side effects that are needed after the component has been updated.
   - 3) Unmounting: This phase occurs when the component is removed from the DOM. The following lifecycle method is called in this phase:
      - componentWillUnmount(): This method is called before the component is removed from the DOM. It is used to perform any cleanup tasks, such as unsubscribing from event listeners or canceling timers.

   - React's lifecycle methods were primarily associated with class components.
   - However, with the introduction of React Hooks in React 16.8, functional components can now also have lifecycle behavior.
   - The useEffect() hook is similar to the:
   - 1) componentDidMount(),
   - 2) componentDidUpdate(),
   - 3) and componentWillUnmount()
   - lifecycle methods in class components. It allows you to perform side effects after the component has been rendered to the DOM, and it can also clean up those side effects when the component is unmounted.
   - It's important to note that while React Hooks provide a way to achieve lifecycle behavior in functional components, they are not a direct replacement for class components. There are some differences in how hooks work compared to class components, and it's important to understand these differences when using hooks in your code.

7. What is Redux?

8. What is Redux thunk?

9. What are the similarities and differences between React useContext hook and Redux? (and props)

10. How do you feel about deployment? (Is it hard?)

11. What is your takeaway from the data structure and algorithm study? 

12. Explain binary search.

13. MERN stack.
    - MERN stack: MongoDB, Express, React, Node
    - MEAN stack: MongoDB, Express, Angular, Node
    - MEVN stack: MongoDB, Express, Vue, Node

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

