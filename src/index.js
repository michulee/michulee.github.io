import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Projects from './components/Projects';

// how to structure a react app
// https://medium.com/swlh/demystifying-the-folder-structure-of-a-react-app-c60b29d90836
ReactDOM.render(
  <React.StrictMode>
    <HeroBanner />
    <About />
    <Projects />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
