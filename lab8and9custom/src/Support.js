import React from 'react';
import NavigationBar from './NavigationBar';
import character from './assets/character.png';
import explorecharacter from './assets/explorecharacter.jpg'
import patch from './assets/patch.png'
import { Button, Container, Image, Form, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import { useForm } from 'react-hook-form';


function Support() {

    const { register, handleSubmit, formState: { errors }, formState } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            The description of the request.
        </Tooltip>
    );
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
                <h1>Support ticket</h1>
                <h3>Submit your request</h3>
                <br></br>

                <div className=" p-3 my-3 border bg-light">
                    <h4 style={{ textAlign: "left" }}>Choose a request type</h4>
                    <br></br>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <select className="form-select" {...register("request", { required: true })}>
                            <option selected=""></option>
                            <option value="1">I would like to report a bug</option>
                            <option value="2">I am having trouble logging in</option>
                            <option value="3">Recover my account</option>
                            <option value="4">Report a player</option>
                            <option value="5">Technical issues such as lag or crashes</option>
                        </select>
                        {errors.request && <p style={{ color: "red", textAlign: "left" }}>This field is required.</p>}
                        <br></br>
                        <h5 style={{ textAlign: "left" }}>Username</h5>
                        <input className="form-control"  {...register("username", { required: true, minLength: 1, maxLength: 20, pattern: /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/i })}></input>

                        {errors.username && <p style={{ color: "red", textAlign: "left" }}>Username is invalid. Do not use special characters like #, $, % and *.</p>}
                        <br></br>
                        <h5 style={{ textAlign: "left" }}>Subject</h5>
                        <input className="form-control"  {...register("subject", { required: true, minLength: 1, maxLength: 20 })}></input>
                        {errors.subject && <p style={{ color: "red", textAlign: "left" }}>Subject is invalid. Please write a subject so that we can better understand your problem.</p>}
                        <br></br>
                        <h5 style={{ textAlign: "left" }}>Description</h5>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" {...register("description", { required: true })}></textarea>
                        </OverlayTrigger>
                        {errors.description && <p style={{ color: "red", textAlign: "left" }}>Description is invalid. Please write a description of the issue so that we can better understand your problem.</p>}

                        <br></br>
                        <h5 style={{ textAlign: "left" }}>Account region</h5>

                        <select className="form-select" {...register("region", { required: true })}>
                            <option selected=""></option>
                            <option value="1">North america</option>
                            <option value="2">South america</option>
                            <option value="3">Europe</option>
                            <option value="4">Asia</option>
                            <option value="5">Oceania</option>
                        </select>
                        {errors.region && <p style={{ color: "red", textAlign: "left" }}>This field is required.</p>}
                        <br></br>
                        <div className="mb-3">
                            <h5 style={{ textAlign: "left" }}>Attachments (Optional)</h5>
                            <input className="form-control" type="file" id="formFile"></input>
                        </div>
                        <br></br>
                        <Button variant="primary" size="lg" style={{ fontFamily: "Staatliches", backgroundColor: "#0BC4E2", width: "25%" }} type="submit">Submit</Button>
                        <br></br><br></br>
                        {formState.isSubmitSuccessful && (
                            <div className="success"><h2 style={{color: "green"}}>Your support request was submitted successfully.</h2></div>
                        )}
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Support;