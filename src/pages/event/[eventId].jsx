import React, {useEffect, useState} from "react"
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons'
import {faMapMarkerAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import FAQModal from "components/faq/FAQModal";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import {useRouter} from 'next/router'
import axios from "utils/axios";
import Loading from "components/Loading";
import isEmpty from "lodash/isEmpty";
import lodashMap from "lodash/map";

export default function Event() {
    const router = useRouter()

    const [data, setData] = useState({
        clubLogoLinks: {},
        event: {},
        form: {}
    });

    const setEvent = (event) => setData((prevData)=> {
        return {...prevData, event}
    });
    const setForm = (form) => setData((prevData) => {
        return {...prevData, form}
    });
    const addClubLogoLinks = (club, link) => {
        console.log(clubLogoLinks)
        setData((prevData) => {
            return {...prevData, clubLogoLinks: {...(prevData.clubLogoLinks), [club]: link}}
        })
    };
    const event = data.event;
    const form = data.form;
    const clubLogoLinks = data.clubLogoLinks;

    useEffect(() => {
        if (router.query.eventId!==undefined) {
            if (isEmpty(event))
                axios.get(`club/competition/${router.query.eventId}/`)
                    .then(res => setEvent(res.data))

            if (isEmpty(form))
                axios.get(`form/form/${router.query.eventId}/`)
                    .then(res => setForm(res.data))

            if (isEmpty(clubLogoLinks) && !isEmpty(event)) {
                const storage = getStorage();
                event.clubs.map(club => getDownloadURL(ref(storage, 'data/'+club+'/uneditable/logo.png'))
                    .then(url => addClubLogoLinks(club, url)))
            }
    }})

    const isLoading = isEmpty(event) || isEmpty(form);



    // const ref = useRef()
    // const isParticipateButtonVisible = useOnScreen(ref)

    if (isLoading)
        return <Loading />
    return (
        <div className="row px-md-5 mx-md-5 px-2 mx-2">
            <div className="col-md-4 col-12 me-4">
                <div className="pb-5">

                    <Carousel>
                        {JSON.parse(event.image_links).map((image) => {
                                return (
                                    <Carousel.Item key={image}>
                                        <Image
                                            alt={event.name}
                                            fluid
                                            rounded
                                            src={image}
                                        />
                                    </Carousel.Item>
                                )
                            })}
                    </Carousel>
                </div>

                <div className="pt-4">
                    <p className="text-center text-primary fs-4">
                        Organised By
                    </p>

                    <div className="row justify-content-around">
                        {lodashMap(clubLogoLinks, ((link, club) => {
                            return (
                                <div
                                    className="col-5 me-1"
                                    key={club+link}
                                >
                                    <Image
                                        alt={club}
                                        fluid
                                        rounded
                                        src={link}
                                        thumbnail
                                    />
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="row text-primary">
                    <div className="col-md-9 col-12">
                        <h1 className="fw-bold">
                            {event.name}
                        </h1>

                        <div>

                            <div className="">
                                <p>

                                    <FontAwesomeIcon icon={faCalendar} />

                                    {' '}

                                    {event.event_start + (event.event_end?" to "+event.event_end:"")}
                                </p>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />

                                    {' '}

                                    {event.location}
                                </p>

                                <p>
                                    <FontAwesomeIcon icon={faClock} />

                                    {' '}

                                    Reg. starts
                                    {' '}

                                    {form.opens_at}

                                    {form.closes_at?", closes "+form.closes_at:""}
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
                                <FAQModal data={JSON.parse(event.faq)} />
                            </div>

                            <div className="p-2 col-6">
                                <a
                                    href={event.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Button
                                        className="w-100"
                                        size="lg"
                                        variant="outline-primary"
                                    >
                                        Links
                                    </Button>
                                </a>
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
                        {event.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
