import React from 'react';
import NavigationBar from './NavigationBar';
import character from './assets/character.png';
import explorecharacter from './assets/explorecharacter.jpg'
import patch from './assets/patch.png'
import patch1 from './assets/patch1.png'
import patch2 from './assets/patch2.png'
import patch3 from './assets/patch3.png'
import patch4 from './assets/patch4.png'
import patch5 from './assets/patch5.png'
import { Button, Container, Image, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

function PatchNotes() {
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
                <h1 style={{textAlign:"left"}}>Patch notes</h1>
                <br></br>
                <div className="row justify-content-around">
                    <div className="card mb-3" style={{maxWidth: "31%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={patch} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Patch 1.6</h3>
                                        <p className="card-text">In this patch we fixed a lot of bugs. We also buffed the great swords damage.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 2 weeks ago</small></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "31%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={patch1} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Patch 1.5</h3>
                                        <p className="card-text">In this patch we fixed a lot of bugs. We also nerfed the great monster's health.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 4 weeks ago</small></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "31%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={patch2} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Patch 1.4</h3>
                                        <p className="card-text">In this patch we fixed a lot of bugs. We also buffed the great shield..</p>
                                        <p className="card-text"><small className="text-muted">Last updated 1 month ago</small></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                        

                    </div>

                    <div className="row justify-content-around">
                    <div className="card mb-3" style={{maxWidth: "31%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={patch3} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Patch 1.3</h3>
                                        <p className="card-text">In this patch we fixed a lot of bugs. We also buffed Rufus stats.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 1 month ago</small></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "31%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={patch4} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Patch 1.2</h3>
                                        <p className="card-text">In this patch we fixed a lot of bugs. We also nerfed Tona's stats.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 2 months ago</small></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "31%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={patch5} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Patch 1.1</h3>
                                        <p className="card-text">In this patch we fixed a lot of bugs. We also buffed Zarda's damage.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 2 months ago</small></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                        

                    </div>

            </Container>
        </div>
            )
}

            export default PatchNotes;