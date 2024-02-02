import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import Home from './Componet/Home';
import Posts from './Componet/Posts';
import Comments from './Componet/Comments';
import Albums from './Componet/Albums';
import Photos from './Componet/Photos';
import Todos from './Componet/Todos';
import User from './Componet/User';



function App() {
  return (

<div className="App">
      <Routes>
        <Route path="/" element={ <Home></Home> } />
        <Route path="/posts" element={ <Posts></Posts> } />
        <Route path="/comments" element={ <Comments></Comments> } />
        <Route path="/albums" element={ <Albums></Albums> } />
        <Route path="/photos" element={ <Photos></Photos> } />
        <Route path="/todos" element={ <Todos></Todos> } />
        <Route path="/user" element={ <User></User> } />
      </Routes>
    </div>




















































































































































  );
}

export default App;
