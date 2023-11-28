import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import Sitenav from './components/Sitenav';
import CategoryContextProvider from './context/CategoryContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile/Profile';
import CollectionForm from './components/CollectionForm';

function App() {

  return (
    <Container fluid>
      <BrowserRouter>
        <Sitenav />
        <div className='pages'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/account" element={<Profile />}>
              <Route exact path='' element={<CollectionForm />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
