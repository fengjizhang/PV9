
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { AiOutlineSearch } from "react-icons/ai";
import React, {useState} from 'react';
import Location from './components/Location.jsx';
import Button from 'react-bootstrap/Button'

function App() {
  const [navigation, setNavigation] = useState({
    home: true,
    ISS: false
  })

  const changePage = (event) => {
    if (event.target.value === "Home") {
      setNavigation({
        home: true,
        ISS: false
      })
    } else if (event.target.value === "Location") {
      setNavigation({
        home: false,
        ISS: true
      })
    }
  }

  return (
    <div className="App">
      <div>
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="#home" className="title1">News</Navbar.Brand>
        <Nav className="me-auto">
          <Button onClick={changePage} value="Home" variant="link">Home</Button>
          <Button onClick={changePage} value="Location" variant="link">Location of the ISS</Button>
          <Button variant="link">Link</Button>
          <Nav.Link href="#pricing">Visualizer</Nav.Link>
          <Nav.Link href="#pricing" ><AiOutlineSearch />Search</Nav.Link>
        </Nav>

      </Navbar>
    </div>

      {navigation.home === true ? <Home /> : null}
      {navigation.ISS === true ? <Location /> : null}

    </div>
  );
}

export default App;
