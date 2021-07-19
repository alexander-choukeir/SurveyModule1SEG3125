import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand style={{fontFamily: "Staatliches"}}>
          <img src={logo} width="30px" height="30px" style={{margin: "5px"}} />{' '}
          Achou Studios
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="container-fluid">
            <Nav.Link style={{fontFamily: "Staatliches"}} exact activeClassName="active" href="/">Game</Nav.Link>
            <Nav.Link style={{fontFamily: "Staatliches"}} exact activeClassName="active" href="/characters">Characters</Nav.Link>
            <Nav.Link style={{fontFamily: "Staatliches"}} exact activeClassName="active" href="/patchnotes">Patch notes</Nav.Link>
            <Nav.Link style={{fontFamily: "Staatliches"}} exact activeClassName="active" href="/support">Support</Nav.Link>
          </Nav>
          <Nav className="me-auto">
          <Form className="d-flex" style={{width:"300px"}}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="primary" style={{backgroundColor: "#0BC4E2"}}>Search</Button>
                </Form>
                <Nav.Link></Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        </>
    );
}
 
export default NavigationBar;