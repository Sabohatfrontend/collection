import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import Sitenav from './components/Navbar';
import CategoryContextProvider from './context/CategoryContext';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Sitenav />
        <div className='pages'>
          <Routes>
            <Route path='/'
              element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
