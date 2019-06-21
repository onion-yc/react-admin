import React from 'react';
import ReactDom from 'react-dom';
//引入react-router-dom/BrowserRouter,重命名为Router
import { BrowserRouter as Router } from 'react-router-dom';


import App from './App';

ReactDom.render(<Router><App/></Router>, document.getElementById('root'));