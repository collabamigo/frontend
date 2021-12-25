
import {getAuth} from "firebase/auth";
import React, {useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons'
import {faMapMarkerAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import FAQModal from "components/faq/FAQModal";
import {getStorage, ref, getDownloadURL, uploadBytes, deleteObject} from "firebase/storage";
import {useRouter} from 'next/router'
import Modal from 'react-bootstrap/Modal'
import axios from "utilities/axios";
import Loading from "components/Loading";
import lodashIsEmpty from "lodash/isEmpty";
import lodashMap from "lodash/map";
import EventAdminModal from "components/EventAdmin/modal";
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import {FirebaseContext} from "firebaseProvider";
import ReactMarkdown from 'react-markdown'
import SvgIcon from "common/SvgIcon";
import ClubAdminModal from "../../components/ClubAdmin/modal";
import UModal from "components/UModal";

function download_table_as_csv(table_id, separator = ',') {
    var rows = document.querySelectorAll('tr');
    var csv = [];
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll('td, th');
        for (var j = 0; j < cols.length; j++) {
            var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
            data = data.replace(/"/g, '""');
            row.push('"' + data + '"');
        }
        csv.push(row.join(separator));
    }
    var csv_string = csv.join('\n');
    var filename = table_id + ' Dated- ' + new Date().toLocaleDateString() + '.csv';
    var link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function isEmpty(obj) {

    if (lodashIsEmpty(obj))
        return true;

    if (Array.isArray(obj) || typeof obj === 'object') {
        let flag = true;
        lodashMap(obj, (el) => {
            if (!isEmpty(el))
                flag = false;
        })
        return flag;
    }

    return false;
}

function Event() {
    const router = useRouter()

    const firebase = useContext(FirebaseContext);
    const storage = firebase?getStorage(firebase):getStorage();

    const [data, setData] = useState({
        clubLogoLinks: {},
        event: {
        },
        showEvent: false,
        showDescription:false,
        showModal: false,
        showModal2:false,
        tableResponses: [[], false],
        form: [undefined, false],
        bannerLinks:undefined,
        bannerPaths :undefined,
        image1Ref : React.createRef(),
        image2Ref : React.createRef(),
        image3Ref : React.createRef(),
        links:null
    });


    const settableResponses = (tableResponses) => setData((prevData) => {
        return {...prevData, tableResponses: [tableResponses, true]}
    });

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
        });
    }
    const setForm = (form) => setData((prevData) => {
        return {...prevData, form: [form, true]}
    });

    const addClubLogoLinks = (club, link) => {
        console.log(clubLogoLinks)
        setData((prevData) => {
            return {...prevData, clubLogoLinks: {...(prevData.clubLogoLinks), [club]: link}}
        })
    };
    const event = data.event;
    const form = data.form[0];
    const clubLogoLinks = data.clubLogoLinks;
    const tableHeaders = isEmpty(form)?[]:JSON.parse(form.skeleton);
    const tableResponses = data.tableResponses[0];
    const showModal = data.showModal;
    const showModal2= data.showModal2;


    const convertToDatetimeString = iso_8601_string => {
        const date = new Date(iso_8601_string);
        return date.toLocaleString();
    }

    const handleCloseDescription = () => setData({...data, showDescription: false});
    const handleShowEvent = () => setData({...data, showEvent: true});
    const handleShowDescription = () => setData({...data, showDescription: true});

    const [ModalShow2, setModalShow2] = useState(false);

    const handleClose = () => setData({...data, showModal: false});
    const handleShow = () => setData({...data, showModal: true});

    const handleClose2 = () => setData({...data, showModal2:false});
    const handleShow2 = () => setData({...data, showModal2:true});

    // const handleSubmitEvent =()=>{
    //     console.log("edited");
    //     handleCloseEvent();
    // }

    const handleSubmitDescription = ()=>{
        console.log("edited");
        handleCloseDescription();
    }

    const handleDeletePic = (num) => {
        console.log("Picture deleted")
        console.log(data.bannerPaths)
        const temp = JSON.parse(data.bannerPaths)
        const storage = getStorage(firebase);
        const desertRef = ref(storage,temp[num]);

        temp.splice(num, 1)
        const payload = {
            image_links:JSON.stringify(temp)
        }
        axios.patch(`/club/competition/${router.query.eventId}/`, payload).then(()=>
            deleteObject(desertRef))
        setData({...data, bannerLinks:undefined,bannerPaths:JSON.stringify(temp)})
    }

    const bannerControl = (args,num) => {
        if (args[num] !== undefined && args !== undefined){
            return(
                <div>
                    <Image
                        alt="Carousel Image"
                        className="m-auto"
                        fluid
                        height="130"
                        rounded
                        src={args[num]}
                        width="130"
                    />
                </div>

            )
        }
        else{
            return(
                <svg
                    height="44"
                    viewBox="0 0 24 24"
                    width="44"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-18 0l4-5.96 2.48 1.96 2.52-4 1.853 2.964c-1.271 1.303-1.977 3.089-1.827 5.036h-9.026zm10.82 4h-14.82v-18h22v7.501c-.623-.261-1.297-.422-2-.476v-5.025h-18v14h11.502c.312.749.765 1.424 1.318 2zm-9.32-11c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5z" />
                </svg>
            )
        }
    }

    const handleUpload = (image, index) => {
        const storage = getStorage();
        const storageRef = ref(storage, `/files/${getAuth(firebase).lastNotifiedUid}/${new Date().getTime()}`);
        if(image == null)
            return;
        const metadata = {
            contentType: image.type,
            customMetadata: {
                clubs: JSON.stringify(event.clubs),
                misc: `event-${router.query.eventId}-banner`
            }
        }
        console.log("marker2", metadata)
        uploadBytes(storageRef, image, metadata).then((args) => {
            const temp = args["metadata"]["fullPath"]
            const arr = JSON.parse(data.bannerPaths)
            arr.splice(index,0,temp)
            const payload = {
                image_links: JSON.stringify(arr)
            }
            axios.patch("/club/competition/" + router.query.eventId + "/", payload).then(() => {
                setData({...data, bannerLinks: undefined, bannerPaths: JSON.stringify(arr)})
            })
        })
    }

    const handleSubmitLinks = (args) => {
        const payload = {
            link: args[0],
        }
        axios.patch('/club/competition/' + router.query.eventId + '/', payload).then(()=>{console.log("link submitted")})
    }

     useEffect(() => {
        if (router.query.eventId!==undefined) {

            if (!data.tableResponses[1])
                axios.get(`form/response/${router.query.eventId}/`)
                    .then(res => settableResponses(res.data))
                    .catch(err => {
                        if (err.response.status === 404)
                            settableResponses(-1);
                        else
                            throw err;
                    })

            if (isEmpty(event))
                axios.get(`club/competition/${router.query.eventId}/`)
                    .then(res => setEvent(res.data))

            if (!data.form[1])
                axios.get(`form/form/${router.query.eventId}/`)
                    .then(res => setForm(res.data))
                    .catch(err => {
                        if (err.response.status === 404)
                            setForm(-1);
                        else
                            throw err;
                })

            if (isEmpty(clubLogoLinks) && !isEmpty(event))
                event.clubs.map(club => getDownloadURL(ref(storage, 'data/'+club+'/uneditable/logo.png'))
                    .then(url => addClubLogoLinks(club, url)))

            if (data.bannerLinks === undefined && data.bannerPaths !== undefined) {
                const storage = firebase ? getStorage(firebase) : getStorage();
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
                                }})
                            )
                        })
                    })
            }}})


    const isLoading = isEmpty(event);
    if (isLoading)
        return <Loading />
    else
        return (
            <>

                <UModal
                    ModalShow={ModalShow2}
                    eventID={router.query.eventId}
                    handleClose={() => setModalShow2(false)}
                />

                <div className="row px-md-5 mx-md-5 px-2 mx-2">
                    <div className="col-md-4 col-12 me-4">
                        <div className="pb-5">

                            <Carousel>
                                {lodashMap(data.bannerLinks, (image) => {
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


                        <div className="column">
                            <div className="d-flex">
                                {data.bannerLinks === undefined ? null:
                                <div className="mx-auto d-flex">
                                    <div className="d-flex">
                                        {data.bannerLinks[0]?
                                            <div>
                                                <span onClick={() => handleDeletePic(0)}>
                                                    <SvgIcon
                                                        className="align-content-end"
                                                        height="20px"
                                                        src="cross.svg"
                                                        width="20px"
                                                    />
                                                </span>
                                            </div>: null}

                                        <div
                                            className={"my-auto mx-3 " + ((data.bannerLinks[0]) ? "" : "-primary")}
                                            onClick={() => data.image1Ref.current.click()}
                                            type="button"
                                        >

                                            {bannerControl(data.bannerLinks, 0)}


                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        {data.bannerLinks[1]?
                                            <div>
                                                <span onClick={() => handleDeletePic(1)}>
                                                    <SvgIcon
                                                        className="align-content-end"
                                                        height="20px"
                                                        src="cross.svg"
                                                        width="20px"
                                                    />
                                                </span>
                                            </div>: null}

                                        <div
                                            className={"my-auto mx-3" + ((data.bannerLinks[1]) ? "" : "-primary")}
                                            onClick={() => data.image2Ref.current.click()}
                                        >
                                            {bannerControl(data.bannerLinks, 1)}
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        {data.bannerLinks[2]?
                                            <div>
                                                <span onClick={() => handleDeletePic(2)}>
                                                    <SvgIcon
                                                        className="align-content-end"
                                                        height="20px"
                                                        src="cross.svg"
                                                        width="20px"
                                                    />
                                                </span>
                                            </div>: null}

                                        <div
                                            className={"my-auto mx-3 " + ((data.bannerLinks[2]) ? "" : "-primary")}
                                            onClick={() => data.image3Ref.current.click()}
                                            type="button"
                                        >
                                            {bannerControl(data.bannerLinks, 2)}
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div>
                                <input
                                    className="d-none"
                                    onChange={(e)=>handleUpload(e.target.files[0], 0)}
                                    ref={data.image1Ref}
                                    type="file"
                                />

                                <input
                                    className="d-none"
                                    onChange={(e)=>handleUpload(e.target.files[0], 1)}
                                    ref={data.image2Ref}
                                    type="file"
                                />

                                <input
                                    className="d-none"
                                    onChange={(e)=>handleUpload(e.target.files[0], 2)}
                                    ref={data.image3Ref}
                                    type="file"
                                />
                            </div>

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
                                        // key={club+link}
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

                                    <div>
                                        {isEmpty(form)?null:
                                        <>
                                            <Button
                                                className="w-100"
                                                onClick={handleShow}
                                                size="lg"
                                            >
                                                View Responses
                                            </Button>

                                            <Button
                                                className="my-2 w-100"
                                                onClick={() => setModalShow2(true)}
                                                size="lg"
                                            >
                                                Declare winners
                                            </Button>

                                            <Modal
                                                aria-labelledby="example-custom-modal-styling-title"
                                                onHide={handleClose}
                                                show={showModal}
                                                size="lg"
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        Responses

                                                        {tableResponses.length}
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
                                                                <td>
                                                                    {" "}
                                                                    Sr no.
                                                                </td>

                                                                {tableHeaders.map((option) => (
                                                                    <td key={option.name}>
                                                                        {option.name}
                                                                    </td>
                                                                ))}

                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {tableResponses.map((response, index) => (
                                                                <tr key={response}>

                                                                    <td>
                                                                        {index}
                                                                    </td>

                                                                    {response.elements.map((values) => (
                                                                        <td
                                                                            key={values.value}
                                                                        >
                                                                            {values.value}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}

                                                        </tbody>
                                                    </Table>

                                                    <br />

                                                    Woohoo, youre reading this text in a modal!
                                                </Modal.Body>


                                                <br />

                                                <Button
                                                    className="w-50 align-self-center"
                                                    onClick={() => {
                                                            download_table_as_csv(event.name + " responses");
                                                        }}
                                                >
                                                    Download as CSV
                                                </Button>

                                                <br />


                                            </Modal>
                                        </>}
                                    </div>

                                    {(!event.faq || isEmpty(event.faq))?null:
                                    <div className="p-2 col-6">
                                        <FAQModal data={JSON.parse(event.faq)} />
                                    </div>}

                                    <div className="p-2 col-6">
                                        <Button
                                            className="w-100"
                                            onClick={handleShow2}
                                            variant="outline-primary"
                                        >
                                            Add Links
                                        </Button>

                                        <ClubAdminModal
                                            handleClose={handleClose2}
                                            handleSubmit={handleSubmitLinks}
                                            initialValues={[data.links]}
                                            labels={['Links to Add']}
                                            show={showModal2}
                                        />

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

                        {/* <EventAdminModal
                            handleClose={handleCloseEvent}
                            handleSubmit={handleSubmitEvent}
                            initialValues={[event.name, convertToDatetimeString(event.event_start) +
                                            (event.event_end?" to "+ convertToDatetimeString(event.event_end):""), event.location,
                            convertToDatetimeString(form.opens_at), convertToDatetimeString(form.closes_at) ? + " " +
                                + convertToDatetimeString(form.closes_at) : ""]}
                            labels={['Event Name','Date and Time','Location','Registration Starts', 'Registration ends']}
                            show={data.showEvent}
                        /> */}

                        <div>
                            <ReactMarkdown>
                                {event.description}
                            </ReactMarkdown>

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

export default Event;
