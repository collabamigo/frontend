/* eslint-disable react/jsx-key */
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
import Modal from 'react-bootstrap/Modal'
import axios from "utils/axios";
import Loading from "components/Loading";
import isEmpty from "lodash/isEmpty";
import lodashMap from "lodash/map";
import EventAdminModal from "../../components/EventAdmin/modal";
import Table from 'react-bootstrap/Table'
export default function Event() {
    const router = useRouter()
    
    const [show, setShow] = useState(false);

    const [isLoading, setLoading] = useState(true);


    const [data, setData] = useState({
        clubLogoLinks: {},
        event: {},
        form: {},
        showEvent: false,
        showDescription:false,
        TableHeaders:[],
        TableResponses:[],       
    });


    const setTableResponses = (TableResponses) => setData((prevData) => {
        return {...prevData, TableResponses}
    });


    const setTableHeaders = (TableHeaders) => setData((prevData) => {
        return {...prevData, TableHeaders}
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

    const handleCloseEvent = () => setData({...data, showEvent: false});
    const handleCloseDescription = () => setData({...data, showDescription: false});
    const handleShowEvent = () => setData({...data, showEvent: true});
    const handleShowDescription = () => setData({...data, showDescription: true});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmitEvent =()=>{
        console.log("edited");
        handleCloseEvent();
    }

    const handleSubmitDescription = ()=>{
        console.log("edited");
        handleCloseDescription();
    }


    useEffect(() => {
        if (router.query.eventId!==undefined) {
            axios.get(`form/form/${router.query.eventId}/`)
                .then(res => setTableHeaders(JSON.parse(res.data.skeleton)))

            axios.get(`form/response/${router.query.eventId}/`)
                .then(res => setTableResponses(res.data.skeleton))

            if (isEmpty(event))
                axios.get(`club/competition/${router.query.eventId}/`)
                    .then(res => setEvent(res.data))

            if (isEmpty(form))
                axios.get(`form/form/${router.query.eventId}/`)
                    .then(res => setForm(res.data)).catch(err => console.log(err))

            if (isEmpty(clubLogoLinks) && !isEmpty(event)) {
                const storage = getStorage();
                event.clubs.map(club => getDownloadURL(ref(storage, 'data/'+club+'/uneditable/logo.png'))
                    .then(url => addClubLogoLinks(club, url)))
            }

            setLoading(false);
        }})




    // const ref = useRef()
    // const isParticipateButtonVisible = useOnScreen(ref)

    if (isLoading)
        return <Loading />
    return (
        <>
            <Modal
                aria-labelledby="example-custom-modal-styling-title"
                onHide={handleClose}
                show={show}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Responses
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table
                        bordered
                        hover
                        striped
                    >
                        <thead>
                            <tr>
                                {data.TableHeaders.map((option) => (
                                    <td>
                                        {option.name}
                                    </td>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {data.TableResponses.map((response) => (
                                <tr>
                                    {response.map((values) => (
                                        <td>
                                            {values.value}
                                        </td>
                                    ))}
                                </tr>
                        
                            ))}
                           
                        </tbody>
                    </Table>

                    Woohoo, youre reading this text in a modal!
                </Modal.Body>

                
            </Modal>

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

                                {" "}

                                <button
                                    className="btn btn-outline-warning material-icons"
                                    onClick={handleShowEvent}
                                    type="button"
                                >
                                    edit
                                </button>
                            </h1>

                            <div>

                                <div className="">
                                    <p>

                                        <FontAwesomeIcon icon={faCalendar} />

                                        {' '}

                                        {convertToDatetimeString(event.event_start) +
                                        (event.event_end?" to "+ convertToDatetimeString(event.event_end):"")}
                                    </p>

                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />

                                        {' '}

                                        {event.location}
                                    </p>

                                    {isEmpty(form)?null:
                                    <p>
                                        <FontAwesomeIcon icon={faClock} />

                                        {' '}

                                        Reg. starts
                                        {' '}

                                        {convertToDatetimeString(form.opens_at)}

                                        {convertToDatetimeString(form.closes_at) ? ", closes " + convertToDatetimeString(form.closes_at) : ""}
                                    </p>}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-12">
                            <div className="row">
                                {isEmpty(form)?null:
                                <div>
                                    <Button
                                        className="w-100"
                                        onClick={handleShow}
                                        size="lg"
                                    >
                                        View Responses
                                    </Button>
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
                                            size="m"
                                            variant="outline-primary"
                                        >
                                            Add Links
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

                    <EventAdminModal
                        handleClose={handleCloseEvent}
                        handleSubmit={handleSubmitEvent}
                        initialValues={[event.name, convertToDatetimeString(event.event_start) +
                                        (event.event_end?" to "+ convertToDatetimeString(event.event_end):""), event.location,
                        convertToDatetimeString(form.opens_at), convertToDatetimeString(form.closes_at) ? + " " +
                            + convertToDatetimeString(form.closes_at) : ""]}
                        labels={['Event Name','Date and Time','Location','Registration Starts', 'Registration ends']}
                        show={data.showEvent}
                    />

                    <div>
                        <p>
                            {event.description}
                        </p>

                        <button
                            className="btn btn-outline-warning material-icons"
                            onClick={handleShowDescription}
                            type="button"
                        >
                            edit
                        </button>

                        <EventAdminModal
                            handleClose={handleCloseDescription}
                            handleSubmit={handleSubmitDescription}
                            initialValues={[event.description]}
                            labels={['Event Description']}
                            show={data.showDescription}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
