import React from 'react';
import NavigationBar from './NavigationBar';
import character from './assets/character.png';
import explorecharacter from './assets/explorecharacter.jpg'
import char1 from './assets/char1.png';
import char2 from './assets/char2.png';
import char3 from './assets/char3.png';
import char4 from './assets/char4.png';
import char5 from './assets/char5.png';
import char6 from './assets/char6.png';
import char7 from './assets/char7.png';
import char8 from './assets/char8.png';
import { Button, Container, Image, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

function Characters() {
    return (
        <div>
            <Container>
                <br></br>
                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                    <Image src={character} style={{ width: "100%", backgroundPosition: "center" }}></Image>
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"

                    }}>
                        <h1 style={{ fontFamily: "Staatliches", fontWeight: "bolder", fontSize: "70px", color: "gold" }}>Destiny of legends</h1> <br></br>
                    </div>


                </div>
                    <br></br>
                    <h1 style={{textAlign:"left"}}>Explore the playable characters</h1>
                    <br></br>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="primary" style={{backgroundColor: "#0BC4E2"}}>Search</Button>
                </Form>
                    <br></br>
                <div className="row justify-content-around">
                    <div className="card" style={{ width: "23%" }}>
                        <img src={char1} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Rufus</h1>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "23%" }}>
                        <img src={char2} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Agy</h1>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "23%" }}>
                        <img src={char3} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Marly</h1>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "23%" }}>
                        <img src={char4} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Dragona</h1>
                        </div>
                        
                    </div>
                    

                    

                </div>

                <br></br>

                <div className="row justify-content-around">
                <div className="card" style={{ width: "23%" }}>
                        <img src={char5} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Zarda</h1>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "23%" }}>
                        <img src={char6} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Gwendena</h1>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "23%" }}>
                        <img src={char7} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Ringos</h1>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "23%" }}>
                        <img src={char8} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h1 className="card-text">Tona</h1>
                        </div>
                        
                    </div>

                    

                </div>
            </Container>

        </div>
    )
}

export default Characters;