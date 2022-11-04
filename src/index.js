import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './pages/Welcome';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container fluid>
      <Navbar />
      <Welcome />
      <Footer />
    </Container>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
