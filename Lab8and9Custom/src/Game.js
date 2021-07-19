import React from 'react';
import NavigationBar from './NavigationBar';
import download from './assets/download.png';
import music from './assets/music.png';
import lore from './assets/lore.png'
import explorecharacter from './assets/explorecharacter.jpg'
import { Button, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

function Game() {
    
    return (
        <div>
            <br></br>
            <Container>
                <div className="p-3 my-3 border bg-light">
                    <div style={{ position: "relative", height: "100%", width: "100%" }}>
                        <Image src={download} style={{ width: "100%", backgroundPosition: "center" }}></Image>
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"

                        }}>
                            <h1 style={{ fontFamily: "Staatliches", fontWeight: "bolder", fontSize: "70px", color: "gold" }}>Destiny of legends</h1> <br></br>
                            <Button variant="primary" size="lg" style={{ fontFamily: "Staatliches", backgroundColor: "#0BC4E2", width: "50%" }}>Play for free</Button>
                        </div>


                    </div></div>
                <br></br>
                <div className="row justify-content-around">
                    <div className="card" style={{ width: "50%" }}>

                        <div className="card-body">
                            <h1 className="card-text">Explore your characters</h1>
                        </div>
                        <div style={{ position: "relative", height: "100%", width: "100%" }}>
                        <img src={explorecharacter} class="card-img-top" alt="..." style={{ width: "100%", backgroundPosition: "center" }}></img> 
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"

                        }}>
                            <Button href="/characters" variant="primary" size="lg" style={{ fontFamily: "Staatliches", backgroundColor: "#0BC4E2", width: "100%" }}>Explore</Button>
                        </div>


                    </div>
                        
                    </div>
                    <div className="card" style={{ width: "50%" }}>

                        <div className="card-body">
                            <h1 className="card-text">How to play</h1>
                        </div>
                        <ReactPlayer style={{}} url="https://www.youtube.com/watch?v=JViNZORzFzI" controls={true} />
                    </div>

                </div>

                <br></br>


                <div className="row justify-content-around">
                    <h1 style={{textAlign:"left"}}>Game news</h1>
                    <div className="card" style={{ maxWidth: "33%", flexDirection:"row", alignItems:"center" }}>
                        <img src={explorecharacter} className="card-img-top" alt="..." style={{width:"50%", borderTopRightRadius:"0", borderBottomLeftRadius:"calc(0.25rem-1px)"}}></img>
                        <div className="card-body">
                            <h2>Patch</h2>
                            <p className="card-text">Read the latest patch notes of the game!</p>
                            <a href="/patchnotes" className="btn btn-primary" style={{backgroundColor: "#0BC4E2"}}>Patch notes</a>
                        </div>
                    </div>

                    <div className="card" style={{ maxWidth: "33%", flexDirection:"row", alignItems:"center" }}>
                        <img src={music} className="card-img-top" alt="..." style={{width:"50%", borderTopRightRadius:"0", borderBottomLeftRadius:"calc(0.25rem-1px)"}}></img>
                        <div className="card-body">
                            <h2>Music</h2>
                            <p className="card-text">Explore the various soundtracks used in Destiny of Legends!</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: "#0BC4E2"}}>Music</a>
                        </div>
                    </div>

                    <div className="card" style={{ maxWidth: "33%", flexDirection:"row", alignItems:"center" }}>
                        <img src={lore} className="card-img-top" alt="..." style={{width:"50%", borderTopRightRadius:"0", borderBottomLeftRadius:"calc(0.25rem-1px)"}}></img>
                        <div className="card-body">
                            <h2>Lore</h2>
                            <p className="card-text">Catchup on the latest lore of the game!</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: "#0BC4E2"}}>Lore</a>
                        </div>
                    </div>
                    

                    

                    
                </div>


            </Container>
        </div>
    )
}

export default Game;