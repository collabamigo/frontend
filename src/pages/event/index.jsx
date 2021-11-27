import React  from "react"
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons'
import {faMapMarkerAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import FAQModal from "components/faq/FAQModal";

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
        <div className="row px-md-5 mx-md-5 px-2 mx-2">
            <div className="col-md-4 col-12 me-4">
                <div className="pb-5">

                    <Carousel>
                        <Carousel.Item>
                            <Image
                                alt="First slide"
                                fluid
                                rounded
                                src="https://i.imgur.com/82SPfYR.png"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                alt="Second slide"
                                fluid
                                rounded
                                src="https://i.imgur.com/gOtdtkk.png"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="pt-5">
                    <p className="text-center text-primary fs-4">
                        Organised By
                    </p>

                    <div className="row justify-content-around">
                        <Image
                            className="col-5 me-1"
                            rounded
                            src="data:image/png;base64,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"
                            thumbnail
                        />

                        <Image
                            className="col-5"
                            fluid
                            rounded
                            src="https://i.imgur.com/0FquOmA.jpeg"
                            thumbnail
                        />
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="row text-primary">
                    <div className="col-md-9 col-12">
                        <h1 className="fw-bold">
                            Event Name
                        </h1>

                        <div>

                            <div className="">
                                <p>

                                    <FontAwesomeIcon icon={faCalendar} />

                                    {' '}
                                    21 Jan 2022, 11:59 AM to 22 Jan 2022, 11:59 PM
                                </p>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />

                                    {' '}
                                    Location
                                </p>

                                <p>
                                    <FontAwesomeIcon icon={faClock} />

                                    {' '}
                                    Reg. starts 10:00, 10/11/2021, closes 11/11/2021
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className="row">
                            <div className="col-12 p-2">
                                <Button
                                    className="w-100"
                                    size="lg"
                                >
                                    Register Here
                                </Button>
                            </div>

                            <div className="p-2 col-6">
                                <FAQModal />
                            </div>

                            <div className="p-2 col-6">
                                <Button
                                    className="w-100"
                                    size="lg"
                                    variant="outline-primary"
                                >
                                    Links
                                </Button>
                            </div>
                        </div>

                        <div className="d-flex justify-content-around mt-2 mb-5 mb-md-4">
                            <FontAwesomeIcon
                                className="mx-2"
                                icon={faWhatsapp}
                                size="2x"
                            />

                            <FontAwesomeIcon
                                className="mx-2"
                                icon={faFacebook}
                                size="2x"
                            />

                            <FontAwesomeIcon
                                className="mx-2"
                                icon={faInstagram}
                                size="2x"
                            />

                            <FontAwesomeIcon
                                className="mx-2"
                                icon={faShareAlt}
                                size="2x"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Placerat in egestas erat imperdiet sed euismod nisi. Nulla
                        porttitor massa id neque aliquam. Mauris vitae ultricies leo integer malesuada nunc. Volutpat
                        maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Nunc eget lorem dolor sed.
                        Tristique senectus et netus et malesuada. Lacus laoreet non curabitur gravida arcu ac. Nisl
                        rhoncus mattis rhoncus urna neque. Erat velit scelerisque in dictum non consectetur a erat.
                        Porttitor leo a diam sollicitudin tempor. Suspendisse faucibus interdum posuere lorem ipsum
                        dolor sit amet consectetur. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nullam
                        eget felis eget nunc. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Proin
                        fermentum leo vel orci. Etiam erat velit scelerisque in dictum. Donec massa sapien faucibus et
                        molestie ac feugiat. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae.
                        <br />

                        <br />
                        Sit amet porttitor eget dolor. Mi quis hendrerit dolor magna eget est lorem ipsum. Lorem sed
                        risus ultricies tristique nulla aliquet. Ut tellus elementum sagittis vitae et leo. Bibendum at
                        varius vel pharetra vel turpis. Mi proin sed libero enim sed faucibus turpis. Dapibus ultrices
                        in iaculis nunc sed augue lacus. Egestas integer eget aliquet nibh praesent tristique magna sit.
                        Tellus integer feugiat scelerisque varius morbi enim nunc. Risus viverra adipiscing at in tellus
                        integer feugiat. Iaculis at erat pellentesque adipiscing commodo elit at. Pellentesque id nibh
                        tortor id. Quis ipsum suspendisse ultrices gravida dictum.


                    </p>
                </div>
            </div>
        </div>
    )
}
