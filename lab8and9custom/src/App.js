import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import Game from './Game';
import Characters from './Characters';
import PatchNotes from './PatchNotes';
import Support from './Support';
import {Route, Link, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      
      <Switch>
        <Route exact path='/' component={Game}/>
        <Route path='/characters' component={Characters}/>
        <Route path='/patchnotes' component={PatchNotes}/>
        <Route path='/support' component={Support}/>
      </Switch>
      <br></br><br></br>
      <Footer/>
    </div>
  );
}

export default App;
