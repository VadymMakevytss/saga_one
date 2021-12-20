import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom'; 

import App from './App';
import { Provider } from 'react-redux';
// Some commit
//New commit
// New third commit
import store from './redux'
import { history } from './redux/reducers';
import { ConnectedRouter } from 'connected-react-router';

import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

