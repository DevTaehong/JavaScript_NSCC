import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import PersonList from './PersonList';
import PostList from './PostList';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="people" element={<PersonList />} />
        <Route path="posts" element={<PostList />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

