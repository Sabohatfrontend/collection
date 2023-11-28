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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Profile />}>
              <Route path='' element={<CollectionForm />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
