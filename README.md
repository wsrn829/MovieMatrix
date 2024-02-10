# MovieMatrix

This movie app is an enhanced version of MovieMaster, where I will incorporate more sophisticated techniques (Redux, AI, AWS) to realize more complex features. I will also note down all the processes for better internalization and for future projects.


### Initial Setup
1. Download node.js from the official website and install it (if you haven't already).
2. In the project terminal, run: `npx create-react-app ./`.
3. `npm install` will install all the dependencies listed in package.json and generate the 'node_modules' folder.
### File Structure
4. The most important part of a package.json file is the dependencies list, specifying the libraries the project relies on. 
5. The most important directory in a React app is src, which usually contains index.js and a components folder. 
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

