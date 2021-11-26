import React, { useRef } from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { floating_right_card } from "./event.module.scss";
import useOnScreen from "utils/useOnScreen";
import { BrowserView } from "react-device-detect";
import FAQModal from "../../components/faq/FAQModal";
import { Row } from "react-bootstrap";

export default function Event() {
    // const ref = useRef()
    // const isParticipateButtonVisible = useOnScreen(ref)

    // const state = {
    //     basicInformation: {
    //         poster: "https://via.placeholder.com/500X580",
    //         clubName: "Club Name",
    //         eventName: "Event Name",
    //     }
    // }

    return (
        <>
            <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="w-25">
                    <div className="d-flex justify-content-center">
                        {/* Slider/carousel needs to be used here */}
                        <Image src="https://via.placeholder.com/200x200"></Image>
                    </div>
                    <div>
                        <p className="text-center">Organised By</p>
                        <div className="d-flex flex-row justify-content-around">
                            <Image src="https://via.placeholder.com/100x100"></Image>
                            <Image src="https://via.placeholder.com/100x100"></Image>
                        </div>
                    </div>
                </div>
                <div className="w-75">
                    <div className="d-flex flex-column flex-md-row justify-center-between w-100">
                        <div className="w-75">
                            <h1>
                                Event Name
                            </h1>
                            <div>
                                <div>
                                    {/* icons */}
                                </div>
                                <div className="">
                                    <p>21 Jan 2022, 11:59 AM to 22 Jan 2022, 11:59 PM</p>
                                    <p>Location</p>
                                    <p>Reg. starts 10:00, 10/11/2021, closes 11/11/2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column w-25">
                            <div className="d-flex flex-column">
                                <div>
                                    <Button>
                                        Register Here
                                    </Button>
                                </div>
                                <div className="space">
                                    <Button>
                                        FAQ
                                    </Button>
                                    <Button>
                                        Links
                                    </Button>
                                </div>
                            </div>
                            <div>
                                {/* social icons */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum itaque, porro corrupti, amet asperiores pariatur
                            error magnam vel vero, expedita cumque sunt nesciunt ut sequi fugiat excepturi ex. Mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
