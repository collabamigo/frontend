import React, { Component } from 'react';
// import axios from "utils/axios";
// import backend from "../../env";
import Image from 'react-bootstrap/Image'
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import {logo, clubName} from './club.module.css';
import {isBrowser} from "../utils/auth";
import {SvgIcon} from "../common/SvgIcon";


function useQuery() {
    if (isBrowser())
        return new URLSearchParams(window.location.search);
    return null
}

class ClubHomePage extends Component {
    static propTypes = {
        clubName : PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.query = useQuery()

        if (this.query)
            this.name = this.query.get("name")


        this.state={
            basicInformation : {
                Name: "Demo Club",
                logoLink: "https://via.placeholder.com/60X60",
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
            }
        }


    }

    componentDidMount() {
        console.log(this.props.clubName)
        var caller = null;
        if(isBrowser())
        {
            caller = this.query.get("name");
        }
        console.log(caller,"hellooo")
        // axios.get("/club/" + caller)
        //     .then((res) => {
        //         console.log("axios call executed")
        //         console.log(res)
        //         }
        //     )
        }

    shouldComponentUpdate () {
        return true;
    }

    render(){
        console.log(this.state.basicInformation)
        console.log(this.props.clubName)


        return (
            <div className="row">
                <div className="col-3 d-flex justify-content-around">
                    <div className="">
                        <div className="row">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img
                                    src="https://via.placeholder.com/400X400"
                                    variant="top"
                                />

                                <Card.Body>
                                    <Card.Title className="text-start h1 pb-2">
                                        {this.state.basicInformation.Name}
                                    </Card.Title>
                                    

                                    <Card.Subtitle className="pb-2">
                                        {this.state.basicInformation.tagline}
                                    </Card.Subtitle>

                                    <div className="col">
                                        <Card.Link
                                            className=""
                                            href="https://www.linkedin.com/in/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="24px"
                                                src="linkedin.svg"
                                                width="24px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            className=""
                                            href="https://www.linkedin.com/in/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="24px"
                                                src="linkedin.svg"
                                                width="24px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            href="https://www.github.com/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="30px"
                                                src="github.svg"
                                                width="30px"
                                            />
                                        </Card.Link>
                                    </div>

                                    {/* <Button variant="primary">
                                    Go somewhere
                                </Button> */}
                                </Card.Body>
                            </Card>
                        </div>

                        <br />

                        <div className="row">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>
                                        Card Title
                                    </Card.Title>

                                    <Card.Subtitle className="mb-2 text-muted">
                                        Card Subtitle
                                    </Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the cards content.
                                    </Card.Text>

                                    <Card.Link href="#">
                                        Card Link
                                    </Card.Link>

                                    <Card.Link href="#">
                                        Another Link
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-9">
                    <Card>
                        <Card.Header>
                            Quote
                        </Card.Header>

                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere

                                    erat a ante.
                                    {' '}
                                </p>

                                <footer className="blockquote-footer">
                                    Someone famous in 
                                    {' '}

                                    <cite title="Source Title">
                                        Source Title
                                    </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>


            </div>
            
        );
    }
}

export default ClubHomePage;
