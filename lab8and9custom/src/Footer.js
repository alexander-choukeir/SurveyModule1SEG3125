import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import twitter from './assets/twitter.png';
import facebook from './assets/facebook.png'
import logo from './logo.png';

const Footer = () => {
    return (
        <>
            
            <footer className="bg-dark text-center ">
                
                <div className="container p-4">

                    <img src={logo} style={{height:"50px", width:"50px"}}></img>
                    <br></br>
                    <section className="mb-4">
                        
                        <a href="">
                            <img src={twitter}></img>
                        </a>

                        <a href="">
                            <img src={facebook}></img>
                        </a>

                        
                    </section>
                    



                    
                    <section className="mb-4">
                        <p>
                            
                        </p>
                    </section>
                    


                </div>
                

                
                <div className="text-center p-3" style={{color:"#7E7E7E",backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © Copyright 2021: Achou Studios. All rights reserved.
                </div>
                

            </footer>
            
        </>
    );
}

export default Footer;