// import Link from "../../common/Link";
import Card from "react-bootstrap/Card";
import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Jumbotron from 'react-bootstrap/Jumbotron'
// import axios from "axios";
// import backend from "../../env";
import Carousel from 'react-bootstrap/Carousel'
// import {Fade} from "react-awesome-reveal";
// import {isMobile} from "react-device-detect";
// import {SvgIcon} from "../../common/SvgIcon";
// import { Fragment } from 'react';
// import ScrollButton from './scroll/scrollbutton';
import './project.css';

class project extends React.Component {


    shouldComponentUpdate() {
        return true;
    }

    render() {

        return (
            <div >
                <Carousel className="container-fluid w-100 mb-4">
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            className="d-block container-fluid carousel-image-size"
                            src="https://via.placeholder.com/1280X480"
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            alt="Second slide"
                            className="d-block container-fluid carousel-image-size"
                            src="https://via.placeholder.com/1280X480"
                        />

                        
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            alt="Third slide"
                            className="d-block container-fluid carousel-image-size"
                            src="https://via.placeholder.com/1280X480"
                        />

                        
                    </Carousel.Item>
                </Carousel>

                <div className="col-md-10 container-fluid mb-4"> 
                    <div className="row">
                        <Card style={{ width: '8rem' }}>
                            <Card.Img
                                classname="m-5"
                                src="https://via.placeholder.com/150X150"
                                variant="top"
                            />
                        </Card>

                        <div className="col">

                            <div className="container row h6">
                                Project association

                            </div>

                            <div className="container row h2">
                                Project Name

                            </div>

                            <div className=" container row h6">
                                Stanting date - Ending Date
                                Number of Registrations
                                Number of Views

                            </div>

                        </div>

                    </div>
                </div>

                <div className="text-background container-fluid">
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                    >
                        <Tab
                            eventKey="home"
                            title="What"
                        >
                            <Jumbotron className="container">
                                <h4 className="text-left">
                                    What is Lorem Ipsum?
                                </h4>

                                <div className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    Why do we use it?
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                                </div>
                            </Jumbotron>
                        </Tab>

                        <Tab
                            eventKey="profile"
                            title="Why"
                        >
                            <Jumbotron className="container">
                                <h4 className="text-left">
                                    Why do we use it?
                                </h4>

                                <div className="text-left">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </div>
                            </Jumbotron>
                        </Tab>

                        <Tab
                            eventKey="contact"
                            title="Where"
                        >
                            <Jumbotron className="container">
                                <h4 className="text-left">
                                    Where does it come from?
                                </h4>

                                <div className="text-left">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                                </div>
                            </Jumbotron>
                        </Tab>
                    </Tabs>
                </div>



                <div  />

                <div className="col-md-10 container-fluid">
                    <div className="row h4">
                        || Team Participating
                    </div>

                    <div className="row container-fluid col-md-12 m-3">

                        <Card
                            className="col zoom-my-card m-4 card-min-size" 
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title className="text-left">
                                    The Dark Army
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted pt-2">
                                    7 /10 Members
                                </Card.Subtitle>

                                <Card.Text>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                                </Card.Text>

                                <Card.Link href="#">
                                    Check work
                                </Card.Link>

                                <Card.Link href="#">
                                    Join Now
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        <Card
                            className="col zoom-my-card m-4 card-min-size" 
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title className="text-left">
                                    Mr. Robot
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted pt-2">
                                    9 /10 Members
                                </Card.Subtitle>

                                <Card.Text>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                                </Card.Text>

                                <Card.Link href="#">
                                    Check work
                                </Card.Link>

                                <Card.Link href="#">
                                    Join Now
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        <Card
                            className="col zoom-my-card m-4 card-min-size" 
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title className="text-left">
                                    The Innovators
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted pt-2">
                                    5 /10 Members
                                </Card.Subtitle>

                                <Card.Text>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                                </Card.Text>

                                <Card.Link href="#">
                                    Check work
                                </Card.Link>

                                <Card.Link href="#">
                                    Join Now
                                </Card.Link>
                            </Card.Body>

                            {' '}
                        
                        </Card>
                    </div>
                </div>

                {/* 
                <ScrollButton /> */}
            </div>
        )
    }
}
export default project