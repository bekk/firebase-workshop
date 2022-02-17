import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import GlobalStyle from './utils/GlobalStyle';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />        
    </BrowserRouter>,
    document.getElementById('root')
)
