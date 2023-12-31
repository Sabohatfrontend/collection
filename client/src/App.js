import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import Sitenav from './components/Sitenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile/Profile';
import CollectionForm from './components/CollectionForm';
import MyCollection from './pages/Profile/MyCollection';

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
              <Route exact path='collection' element={<MyCollection />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
