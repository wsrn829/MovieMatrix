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
       },
       middleware: 
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
   
====> General steps to use Redux:
1. To use Redux/Redux Toolkit, the first step is to use Provider coming from react-redux to wrap our entire application.
2. Next, we create a store to give it to the Provider. That way, the Provider will provide the entire application with the entire  store.
3. How do we create a store? Redux toolkit made it extremely easy: 
   - import configureStore function 
   - call the function
   - pass the reducer to it.
4. Reducer is actually a service, which we create by using reduxjs/toolkit/query/ and then specify: 
   - reducer name
   - baseQuery
   - endpoints
5. Then Redux Toolkit will automatically create useXXXQuery and you can export it.
6. Then you can use this useXXXQuery everywhere across the app to make API calls.

<br />

--------------------------

### Alan AI Implementation !!! (Artificial Intelligence/AI + Natural Language Processing/NLP)


<br />


--------------------------

### Authentication !!


<br />

--------------------------

### Concepts I Was Asked During Interviews

**1. What is React virtual DOM (Document Object Model) and why do we use it?**
- An abstraction of the real/actual/browser DOM to improve the performance of web apps by reducing the number of direct DOM manipulations.
- User interaction with web app ==> the app's state change ==> UI needs to be updated to reflect these changes. 
  - Traditional:
      - Update by direct DOM manipulation (inefficient).
  - Virtual DOM:
      - Solves this problem by creating a "lightweight representation of the DOM in memory".
      - When the application's state changes, the Virtual DOM is updated instead of the real DOM.
      - The Virtual DOM then compares the updated Virtual DOM with the previous version to determine the minimal set of changes needed to update the real DOM.
      - These changes are then applied to the real DOM, resulting in a more efficient update process.
- Because virtual DOM makes DOM updates faster by only updating the necessary parts instead of the entire DOM by comparing old virtual DOM and new virtual DOM created in memory as an additional step thus improving the overall performance and maintainability of the web app.
  
**2. Underlying Mechanisms**
- Virtual DOM and Real DOM:
   - The virtual DOM is a lightweight copy of the real DOM (Document Object Model) that exists in memory.
   - When changes are made to the web app, the virtual DOM is updated first.
   - This updated virtual DOM is then compared to the old virtual DOM to identify the specific changes that need to be applied to the real DOM.
   - This process is known as **reconciliation**.
- Selective Updates:
   - The virtual DOM allows for selective updates to the real DOM.
   - Instead of updating the entire real DOM when changes are made, only the specific parts of the real DOM that have changed are updated.
   - This selective updating can significantly improve performance, especially in complex web apps with frequent updates.
- Performance and Maintainability:
   - By reducing the number of updates to the real DOM and minimizing the amount of work needed to identify changes, the virtual DOM can improve the overall performance of the web app.
   - Additionally, the virtual DOM can make the codebase more maintainable by providing a clear separation between the application logic and the rendering logic.

**3. What is the React component lifecycle and the associated methods called in each phase?**
- Mounting: occurs when the component is first created and added to the DOM. 
   - constructor(): called before the component is mounted to initialize the component's state and bind event handlers.
   - static getDerivedStateFromProps(): called before rendering when new props are received to update the component's state based on the new props.
   - render(): called to generate the component's UI, returning a React element that represents the component's UI.
   - componentDidMount(): called after the component has been mounted to perform any setup tasks that require access to the DOM, such as fetching data from an API.
- Updating: occurs when the component's props or state change.
   - getDerivedStateFromProps(): called before rendering when new props are received to update the component's state based on the new props.
   - shouldComponentUpdate(): called before rendering when new props or state are received to determine if the component should re-render.
   - render(): called to generate the component's UI, returning a React element that represents the component's UI.
   - getSnapshotBeforeUpdate(): called before the component's changes are applied to the DOM to capture information about the DOM before it changes, such as the scroll position.
   - componentDidUpdate(): called after the component's changes have been applied to the DOM to perform any cleanup tasks or side effects that are needed after the component has been updated.
- Unmounting: occurs when the component is removed from the DOM. 
   - componentWillUnmount(): called before the component is removed from the DOM to perform any cleanup tasks, such as unsubscribing from event listeners or canceling timers.
- React's lifecycle methods were primarily associated with class components.
- However, with the introduction of React Hooks in React 16.8, functional components can now also have lifecycle behavior.
- The useEffect() hook is similar to the following lifecycle methods in class components:
   - componentDidMount(),
   - componentDidUpdate(),
   - componentWillUnmount()
- It allows you to perform side effects after the component has been rendered to the DOM, and it can also clean up those side effects when the component is unmounted.
- However, while React Hooks provide a way to achieve lifecycle behavior in functional components, they are not a direct replacement for class components.
- There are some differences in how hooks work compared to class components, and it's important to understand these differences when using hooks in your code.

**4. What is Redux?**
- Central state management tool for JavaScript applications.
- Often used in large-scale applications where the state needs to be shared across multiple components and managed in a centralized location.
- Key Concepts:
   - Store:
      - A JavaScript object that holds the application's state.
      - The single source of truth for the entire app.
      - The state in the store is read-only, and the only way to change it is by dispatching actions.
   - Actions:
      - Plain JavaScript objects that describe what happened in the app.
      - The only way to send data to the store.
      - Typically has a type property that describes the type of action being performed, and it can also have additional data (payload) that is needed to update the state.
   - Reducers:
      - Pure functions that take the current state and an action as arguments and return the new state.
      - Specify how the state should change in response to an action.
      - Responsible for updating the state in the store.
   - Dispatch:
      - A method provided by the store that is used to send actions to the store.
      - When an action is dispatched, the store passes the action to the reducers, which update the state accordingly.
   - Selectors:
      - Functions that are used to extract specific pieces of data from the state.
      - Provide a way to access the state in a more structured and organized way.
   - Middleware:
      - A function that sits between the dispatching of an action and the moment it reaches the reducer.
      - Can be used to perform tasks such as logging, asynchronous actions, or other side effects.
- Redux follows a unidirectional data flow pattern, where actions are dispatched to the store, which then updates the state using reducers. The updated state is then passed to the components, which re-render based on the new state.
- Redux is often used in conjunction with React, where the state in the Redux store is connected to React components using the connect() function provided by the react-redux library. This allows components to access the state in the store and re-render when the state changes.
- Overall, Redux provides a powerful and flexible way to manage the state in JavaScript applications, making it easier to reason about and maintain the state of the App.

**5. What is Redux Thunk?**
- A middleware for Redux that allows you to write action creators that return functions instead of plain objects.
- These functions can perform asynchronous operations, such as fetching data from an API, and then dispatching actions based on the result of those operations.
- In Redux, action creators are functions that create and return action objects. 

**6. What are the similarities and differences between React useContext hook and Redux?**
- Similarities:
   - State Management: Both provide mechanisms for managing state in a centralized location, which helps in avoiding prop drilling and makes it easier to share state across multiple components.
   - Global State: Both allow you to create a global state that can be accessed and updated from any component in your application.
   - Simplicity: Both provide a simple and straightforward way to manage state in React applications.
- Differences:
   - Complexity: Redux is a more complex state management library compared to useContext. It has a larger API surface and requires more boilerplate code, especially when setting up actions, reducers, and the store.
   - Use Cases: Redux is typically used for larger applications with complex state management needs, while useContext is more suitable for simpler applications or for managing local state within a component.
   - Performance: Redux can offer better performance optimizations, especially when combined with other Redux-related libraries like react-redux and redux-thunk. useContext may have performance issues when used with deeply nested components or when the state changes frequently.
   - Learning Curve: Redux has a steeper learning curve due to its more complex nature and the need to understand concepts like actions, reducers, and the store. useContext is easier to learn and use for beginners.

**7. How do you feel about deployment?**

**8. What is your takeaway from the data structure and algorithm study?** 

**9. Explain binary search.**
- Binary search is a way to find a specific value in a sorted list. Here's how it works:
   - Start with the middle value of the list.
   - If the value you're looking for is less than the middle value, look in the first half of the list.
   - If the value you're looking for is greater than the middle value, look in the second half of the list.
   - Repeat this process until you find the value you're looking for or until there are no more values to check.
- Binary search is very efficient because it cuts the list in half each time, so it can quickly find the value you're looking for.
- Time complexity: O(log n).
- It's commonly used in computer science and other fields because it's fast and reliable.
- Use Cases: searching for a word in a dictionary or finding the location of a record in a database.
  
**8. MERN stack.**
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

