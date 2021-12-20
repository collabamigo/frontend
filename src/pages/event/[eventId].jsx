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
import axios from "utilities/axios";
import Loading from "components/Loading";
import isEmpty from "lodash/isEmpty";
import lodashMap from "lodash/map";
import GenerateEventForm from "../../components/GenerateEventForm";
import ReactMarkdown from 'react-markdown'

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

    const convertToDatetimeString = iso_8601_string => {
        const date = new Date(iso_8601_string);
        return date.toLocaleString();
    }

    useEffect(() => {
        if (router.query.eventId!==undefined) {
            if (isEmpty(event))
                axios.get(`club/competition/${router.query.eventId}/`)
                    .then(res => setEvent(res.data))

            if (isEmpty(form))
                axios.get(`form/form/${router.query.eventId}/`)
                    .then(res => setForm(res.data)).catch(err => console.log(err))

            if (isEmpty(clubLogoLinks) && !isEmpty(event)) {
                const storage = getStorage();
                event.clubs.map(club => getDownloadURL(ref(storage, 'data/' + club + '/uneditable/logo.png'))
                    .then(url => addClubLogoLinks(club, url)))
            }
    }})

    const isLoading = isEmpty(event);



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
                                            src="/img/placeholder-500.png"
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
                <div className="row">
                    <div className="col-md-9 col-12">

                        <br />

                        <h1 className="fw-bold  text-primary">
                            {event.name}
                        </h1>

                        <br />

                        <div>

                            <div className="">
                                <p className=" text-primary">

                                    <FontAwesomeIcon icon={faCalendar} />

                                    {' '}

                                    {convertToDatetimeString(event.event_start) +
                                        (event.event_end?" to "+ convertToDatetimeString(event.event_end):"")}
                                </p>

                                <p className=" text-primary">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />

                                    {' '}

                                    {event.location}
                                </p>

                                {isEmpty(form)?null:
                                <p className=" text-primary">
                                    <FontAwesomeIcon icon={faClock} />

                                    {' '}

                                    Reg. starts
                                    {' '}

                                    {convertToDatetimeString(form.opens_at)}

                                    {convertToDatetimeString(form.closes_at) ? ", closes " + convertToDatetimeString(form.closes_at) : ""}
                                </p>}

                                <div>
                                    <ReactMarkdown>
                                        {event.description}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className="row">
                            {isEmpty(form)?null:
                            <div className="col-12 p-2">
                                <GenerateEventForm
                                    eventId={router.query.eventId}
                                    formData={JSON.parse(form.skeleton)}
                                />
                            </div>}

                            {(!event.faq || isEmpty(event.faq))?null:
                            <div className="p-2 col-6">
                                <FAQModal data={JSON.parse(event.faq)} />
                            </div>}

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
                                        Join meet
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
            </div>
        </div>
    )
}
