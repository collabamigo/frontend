import React, { Component } from 'react';
import { Card } from "react-bootstrap";
// import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'


export default class Eventpage extends Component {

    constructor(props) {
        super(props)
        this.state={
            basicInformation : {
                Name: "Demo Club",
                logoLink: "https://via.placeholder.com/50X50",
                tagline: "bleh bleh bleh",
                description: "bleh bleh bleh * 2",
                socialmediaLink: {
                    instagram : "https://www.instagram.com/heemank_v",
                    linkedin : "https://www.linkedin.com/heemank_v",
                    facebook : "https://www.facebook.com/heemank_v",
                    website : "https://www.collabconnect.com/404",
                },
                joinDate:"26122020",
                clubBanners:["https://via.placeholder.com/1280X480","https://via.placeholder.com/1280X480","https://via.placeholder.com/1280X480"]
            },
            eventInformation: {
                Name: "Tara Rumpum",
                Images: ["https://via.placeholder.com/920X720","https://via.placeholder.com/920X720","https://via.placeholder.com/920X720"],
                Form: "www.google.com",
                Wordydescription: "laurem instagramcxk das ladfljnadnglanjhgnjdnhadvdn adfd   a fdfjv va f vadf nka fdfn a dv and vva dv adv av vj",
                Shortdescription: ["time","date","place","why"],
                managers: [
                    {
                        name:"hululu",
                        contact:["www.instagram.com","lolnumber"]
                    },
                    {
                        name:"hululu",
                        contact:["www.instagram.com","lolnumber"]
                    },
                    {
                        name:"hululu",
                        contact:["www.instagram.com","lolnumber"]
                    }
                ],

            }
        }
    }

    shouldComponentUpdate () {
        return true;
    }

        

    render() {
        console.log(this.state.basicInformation)
        console.log(this.state.eventInformation)

        return (
            <div>
                <div className="container-fluid">
                    <Card className="card card_skillSearch">
                        <Card.Title className="row justify-content-between">
                            <h1 className="col-sm-5 col-md-5 pt-2">
                                {" "}

                                {this.state.eventInformation.Name}

                                {" "}
                            </h1>

                            <h3 className="col-sm-5 col-md-5 pt-4">
                                {"by "}

                                {this.state.basicInformation.Name}

                                {" "}
                            </h3>


                        </Card.Title>

                        <Card.Body>
        
                            <div className="row justify-content-between">
                                <div className="col">
                                    <div className="row">
                                        <Carousel className="container-fluid w-90 mb-4">
                                            {this.state.eventInformation.Images.map(Item => (

                                            // eslint-disable-next-line react/jsx-key
                                                <Carousel.Item>
                                                    <img
                                                        alt="First slide"
                                                        className="d-block w-100"
                                                    // id={Key}
                                                        key={Item}
                                                        src={Item}
                                                    />

                                                
                                                </Carousel.Item>
                                        ))}
                                        </Carousel>
                                    </div>

                                    <div className="row justify-content-center">
                                        Register

                                    </div>

                                    <div />
                                </div>

                                <div className="col">
                                    <div className="row">
                                        <div className="pt-2">
                                            <div className="text-left">
                                                <span>
                                                    Description:
                                                </span>
                                            </div>

                                            <div className="text-center pl-5">
                                                {this.state.eventInformation.Wordydescription}
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row">
                                        <div className="col">
                                            <div className="col">
                                                {this.state.eventInformation.managers.map(Item =>(

                                                    // eslint-disable-next-line react/jsx-key
                                                    <div
                                                        className="row"
                                                        id={Item}
                                                    >
                                                        <span className="h4">
                                                            {Item.name}
                                                        </span>

                                                        {/* <span className="">
                                                            {Item.contact[0]}
                                                        </span> */}

                                                        <span className="">
                                                            {Item.contact[1]}
                                                        </span>
                                                    </div>
                                            ))}
                                            </div>
                                        </div>

                                        <div className="col">
                                            {this.state.eventInformation.Shortdescription.map(Item =>(

                                                // eslint-disable-next-line react/jsx-key
                                                <div className="row" >
                                                    {Item}
                                                    
                                                </div>
                                                
                                            ))}
                                        </div>

                                    </div>
                                
                                </div>
                                

                            </div>



                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
