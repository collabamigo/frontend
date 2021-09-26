
import React from "react"
import Card from "react-bootstrap/Card";
import "./event.module.css";
import Link from "common/Link";


export default class Event extends React.Component{
    constructor(props) {
        super(props)

        // this.state={
        //     basicInformation : {
        //         Name: "Event Name",
        //         logoLink: "https://via.placeholder.com/60X60",
        //         poster: "https://via.placeholder.com/640X640",
        //         description: "bleh bleh bleh",
        //         clubName: "Club Name"
        //     }
        // }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="container-fluid">
                <Card>
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img
                                alt=""
                                className="img-fluid"
                                src="//placehold.it/500"
                            />
                        </div>

                        <div className="col d-flex flex-column">
                            <div className="">
                                <Card.Title className="">
                                    <div className="">
                                        <h1 className="">
                                            Title
                                            {' '}
                                        </h1>
                                    

                                        <div>
                                            <span>
                                                Date & Time 
                                                {" "}
                                            </span>

                                            <span>
                                                Location 
                                            </span>
                                        </div>
                                    </div>
                                </Card.Title>

                                <div className="">
                                    <div className="">
                                        <div className="">
                                            Description
                                        </div>

                                        <p className="">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>

                                    </div>
                                    
                                    <div className="">
                                        <div className="">
                                            TL;DR
                                        </div>

                                        <div className="">
                                            <ul className="">
                                                <li >
                                                    <span>
                                                        hellloooo
                                                    </span>
                                                </li>

                                                <li>
                                                    <span>
                                                        hellloooo
                                                    </span>
                                                </li>

                                                <li>
                                                    <span>
                                                        hellloooo
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                
                                <div className="">
                                    <Link
                                        className=""
                                        to="/help"
                                    >
                                        Hmm
                                    </Link>

                                    <Link
                                        className=""
                                        to="/help"
                                    >
                                        Participate
                                    </Link>

                                    <Link
                                        className=""
                                        to="/help"
                                    >
                                        FaQ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card-footer w-100 text-muted">
                        Footer stating cats are CUTE little animals
                    </div> */}
                </Card>

            </div>
            
    )
    }
}

{/* <div className="container-fluid">
                <hr />

                <Card>
                    <div>
                        <div className="d-flex justify-content-around flex-wrap">
                            <div>
                                <br />

                                <img
                                    alt="Club logo"
                                    className="logo img-fluid col-auto"
                                    src={this.state.basicInformation.logoLink}
                                />

                            </div>

                            <div>
                                <br />

                                <span className="eventName">
                                    {this.state.basicInformation.Name}
                                </span>
                            </div>

                            <div className="">

                                <br />

                                <br />

                                <span >
                                    ~ Brought to you by
                                    {this.state.basicInformation.clubName}
                                </span>
                            </div>

                        </div>

                        <br />

                        <div className="intro d-flex justify-content-around">
                            <Card
                                className="information col-7"
                                style={{ width: '18rem' }}
                            >
                                <Card.Body>
                                    <Card.Title>
                                        INFORMATION
                                    </Card.Title>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>


                                </Card.Body>
                            </Card>

                            <Card
                                className="poster col-3"
                                style={{ width: '18rem' }}
                            >
                                <Card.Img
                                    src={this.state.basicInformation.poster}
                                    variant="bottom"
                                />

                            </Card>
                        </div>

                        <br />

                        <div className="description d-flex justify-content-around">
                            <Card
                                className="card3 col-11"
                                style={{ width: '18rem' }}
                            >
                                <Card.Body>
                                    <Card.Title>
                                        DESCRIPTION
                                    </Card.Title>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <br />
                    </div>
                </Card>

            </div> */}