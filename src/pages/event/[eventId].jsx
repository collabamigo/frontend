/* eslint-disable react/no-array-index-key */
import lodashIsEmpty from "lodash/isEmpty";
import React, {useEffect, useState} from "react"
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons'
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import FAQModal from "components/faq/FAQModal";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import {useRouter} from 'next/router'
import axios from "utilities/axios";
import {SvgIcon} from "common/SvgIcon";
import WModal from 'components/WModal';
import Loading from "components/Loading";
import isEmpty from "lodash/isEmpty";
import lodashMap from "lodash/map";
import Link from "../../common/Link";
import GenerateEventForm from "../../components/GenerateEventForm";
import ReactMarkdown from 'react-markdown'
import {
    FacebookShareButton,
    EmailShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    TelegramShareButton,
  } from "react-share";

export default function Event() {
    const router = useRouter()
    const [ModalShow, setModalShow] = useState(false);

    const [data, setData] = useState({
        imageLinks:[],
        clubLogoLinks: {},
        event: {},
        form: [undefined, false],
        pastResponse: [[], false],
    });


    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    const setEvent = (event) => {
        setData((prevData) => {
            return {
                ...prevData,
                bannerPaths: event.image_links,
                event: {
                    ...prevData.event,
                    ...event,
                }
            };
    })};
    const setForm = (form) => setData((prevData) => {
        return {...prevData, form: [form, true]}
    });

    const addClubLogoLinks = (club, link) => {
        setData((prevData) => {
            return {...prevData, clubLogoLinks: {...(prevData.clubLogoLinks), [club]: link}}
        })
    };


    const event = data.event;
    const form = data.form[0];
    const clubLogoLinks = data.clubLogoLinks;
    const imageLinks = data.bannerLinks;


    const convertToDatetimeString = iso_8601_string => {
        const date = new Date(iso_8601_string);
        return date.toLocaleString();
    }

    useEffect(() => {
        if (router.query.eventId!==undefined) {
            if (isEmpty(event))
                axios.get(`club/competition/${router.query.eventId}/`)
                    .then(res => {
                        setEvent(res.data)
                        if ((res.data.winners !== undefined)){
                            setModalShow(true);
                        }
                    })

            if (!data.form[1])
                axios.get(`form/form/${router.query.eventId}/`)
                    .then(res => setForm(res.data))
                    .catch(err => {
                        if (err.response.status === 404)
                            setForm(-1);
                        else
                            throw err;
                    })

            if (isEmpty(clubLogoLinks) && !isEmpty(event)) {
                const storage = getStorage();
                event.clubs.map(club => getDownloadURL(ref(storage, 'data/' + club + '/uneditable/logo.png'))
                    .then(url => addClubLogoLinks(club, url)))
            }

            if (data.bannerLinks === undefined && data.bannerPaths !== undefined) {
                const storage = getStorage();
                if (data.bannerPaths === '[]') {
                    // suppression needed
                    // eslint-disable-next-line react/no-did-update-set-state
                    setData({...data, bannerLinks: []})
                } else
                    JSON.parse(data.bannerPaths).map((link, index) => {
                        getDownloadURL(ref(storage, link)).then((url) => {
                            // alert("adding "+url+" at "+index)
                            setData((data) => ({
                                    ...data,
                                    bannerLinks: {
                                        ...(data.bannerLinks),
                                        [index]: url,
                                    }
                                })
                            )
                        })
                    })
            }

            if (!data.pastResponse[1]) {
                axios.get(`form/get-response/${router.query.eventId}/`)
                    .then(res => setData((prevData) => {
                        if (lodashIsEmpty(res.data))
                            return {...prevData, pastResponse: [[], true]}

                        let response = res.data[0].elements;
                        let temp_holder = {};
                        response.forEach(element => {
                            temp_holder[element.question] = element.value;
                        });
                        return {...prevData, pastResponse: [temp_holder, true]}
                    }))
                    .catch(() => {setData((prevData) => {
                        return {...prevData, pastResponse: [[], true]}
                    })})
            }

    }})
    const isLoading = isEmpty(event);

    // const ref = useRef()
    // const isParticipateButtonVisible = useOnScreen(ref)

    if (isLoading)
        return <Loading />
    return (
        <>
            <WModal
                ModalShow={ModalShow}
                handleClose={handleClose}
                handleShow={handleShow}
                values={isEmpty(event.winners) ? null : event.winners}
            />

            <div className="row px-md-5 mx-md-5 px-2 mx-2">
                <div className="col-md-4 col-12 me-4">
                    <div className="pb-5">
                        {imageLinks ?
                            <Carousel>
                                {lodashMap(imageLinks, (image,index) => {
                                return (
                                    <Carousel.Item key={index}>
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
                    : null}
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
                                        <SvgIcon
                                            className={{Fill: 'blue'}}
                                            height="20px"
                                            src="organization.svg"
                                            width="20px"
                                        />

                                        {' '}

                                        {data.event.clubs.map(item => (
                                            <span key={item}>
                                                {item}

                                                {data.event.clubs.length >1 ? ", " : null}

                                                {' '}
                                            </span>
                                    ))}
                                    </p>

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
                                        end={event.event_end}
                                        eventId={router.query.eventId}
                                        formData={JSON.parse(form.skeleton)}
                                        response={data.pastResponse[0]}
                                        start={event.event_start}
                                    />
                                </div>}

                                {(!event.faq || isEmpty(event.faq))?null:
                                <div className="p-2 col-6">
                                    <FAQModal data={JSON.parse(event.faq)} />
                                </div>}

                                <div className="p-2 col-6">
                                    <Button
                                        // className={"w-100 "+ (((new Date()) > (new Date(form.closes_at))) && ((new Date()) < (new Date(form.starts_at))) ?"disabled":"")}
                                        className="w-100 "
                                        // disabled={((new Date()) > (new Date(form.closes_at))) ? true : false}
                                        href={event.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        variant="outline-primary"
                                    >
                                        {()=>alert(event.link)}
                                        Join meet
                                    </Button>
                                </div>
                            </div>

                            <Link to="/history">
                                <div className="small text-end w-100">
                                    See previous entries
                                </div>

                            </Link>

                            <div className="d-flex justify-content-around mt-2 mb-5 mb-md-4">

                                <FacebookShareButton
                                    title="d"
                                    url="https://www.instagram.com/p/CXwbZg3APiU/"
                                />

                                <FacebookShareButton
                                    title="fullTitle"
                                    url="https://www.instagram.com/p/CXwbZg3APiU/"
                                >
                                    <SvgIcon
                                        height="20px"
                                        src="facebook.svg"
                                        width="20px"
                                    />
                                </FacebookShareButton>

                                <EmailShareButton
                                    onClick={() => {}}
                                    openShareDialogOnClick
                                    url="https://www.instagram.com/p/CXwbZg3APiU/"
                                >
                                    <SvgIcon
                                        height="20px"
                                        src="mail.svg"
                                        width="20px"
                                    />
                                </EmailShareButton>


                                <WhatsappShareButton
                                    separator=":: "
                                    title="CampersTribe - World is yours to explore"
                                    url="http://www.camperstribe.com"
                                >
                                    <SvgIcon
                                        height="20px"
                                        src="whatsapp.svg"
                                        width="20px"
                                    />
                                </WhatsappShareButton>

                                <TwitterShareButton
                                    title="fullTitle"
                                    url="http://www.camperstribe.com"
                                >
                                    <SvgIcon
                                        height="20px"
                                        src="twitter.svg"
                                        width="20px"
                                    />
                                </TwitterShareButton>


                                <TelegramShareButton
                                    title="fullTitle"
                                    url="http://www.camperstribe.com"
                                >
                                    <SvgIcon
                                        height="20px"
                                        src="telegram.svg"
                                        width="20px"
                                    />
                                </TelegramShareButton>

                                <LinkedinShareButton
                                    title="fullTitle"
                                    url="http://www.camperstribe.com"
                                >
                                    <SvgIcon
                                        height="20px"
                                        src="linkedin.svg"
                                        width="20px"
                                    />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
Event.title = "CollabAmigo Event page"
