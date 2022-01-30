
import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal'
import axios from "utilities/axios";
import Loading from "components/Loading";
import lodashIsEmpty from "lodash/isEmpty";
import lodashMap from "lodash/map";
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import { FirebaseContext } from "firebaseProvider";
import ReactMarkdown from 'react-markdown'
import SvgIcon from "common/SvgIcon";
import ClubAdminModal from "components/ClubAdmin/modal";
import UModal from "components/UModal";
import FaqEditor from "components/FaqEditor";
import { showAlert } from "common/Toast";
import imageCompression from 'browser-image-compression';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import EditDescriptionModal from "components/EventAdmin/EditDescriptionModal";
import { isValidUrl } from "utilities";
import EditNameDateModal from "components/EventAdmin/EditNameDateModal";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { pie } from "./eventid.module.css";

function download_table_as_csv(table_id, separator = ',') {
    let rows = document.querySelectorAll('tr');
    let csv = [];
    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll('td, th');
        for (let j = 0; j < cols.length; j++) {
            let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
            data = data.replace(/"/g, '""');
            row.push('"' + data + '"');
        }
        csv.push(row.join(separator));
    }
    let csv_string = csv.join('\n');
    let filename = table_id + ' Dated- ' + new Date().toLocaleDateString() + '.csv';
    let link = document.createElement('a');
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
    const router = useRouter();

    let eventId = undefined;

    if (router.query.eventId !== undefined)
        eventId = router.query.eventId.split("-")[0];

    const firebase = useContext(FirebaseContext);
    const storage = firebase ? getStorage(firebase) : getStorage();

    const [data, setData] = useState({
        clubLogoLinks: {},
        event: {
        },
        showEvent: false,
        showModal: false,
        showModal2: false,
        tableResponses: [[], false],
        form: [undefined, false],
        bannerLinks: undefined,
        bannerPaths: undefined,
        image1Ref: React.createRef(),
        image2Ref: React.createRef(),
        image3Ref: React.createRef(),
        links: null,
        currentModal: null,
    });


    const settableResponses = (tableResponses) => setData((prevData) => {
        return { ...prevData, tableResponses: [tableResponses, true] }
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
        return { ...prevData, form: [form, true] }
    });

    const addClubLogoLinks = (club, link) => {
        // console.log(clubLogoLinks)
        setData((prevData) => {
            return { ...prevData, clubLogoLinks: { ...(prevData.clubLogoLinks), [club]: link } }
        })
    };
    const event = data.event;
    const form = data.form[0];
    const clubLogoLinks = data.clubLogoLinks;
    const tableHeaders = isEmpty(form) ? [] : JSON.parse(form.skeleton);
    const tableResponses = data.tableResponses[0];
    const showModal = data.showModal;
    const showModal2 = data.showModal2;
    // console.log(data.form);

    const convertToDatetimeString = iso_8601_string => {
        const date = new Date(iso_8601_string);
        return date.toLocaleString();
    }

    const handleShowEvent = () => setData({ ...data, showEvent: true });
    // const handleSubmitEvent = () => setData({...data, showEvent: false});
    const handleCloseEvent = () => setData({ ...data, showEvent: false });



    const handleClose = () => setData({ ...data, showModal: false });
    const handleShow = () => setData({ ...data, showModal: true });

    const handleClose2 = () => setData({ ...data, showModal2: false });
    const handleShow2 = () => setData({ ...data, showModal2: true });

    const handleSubmitEvent = (values) => {
        console.log("value", values)

        const eventPayload = {};

        eventPayload.name = values.name;

        eventPayload.event_start = values.eventStartDate.toISOString();

        if (values.eventEndDate)
            eventPayload.event_end = values.eventEndDate.toISOString();

        if (values.location || values.location === "")
            eventPayload.location = values.location;

        const formPayload = {};

        if (values.registrationStartDate)
            formPayload.opens_at = values.registrationStartDate;

        if (values.registrationEndDate)
            formPayload.closes_at = values.registrationEndDate;

        handleCloseEvent();

        axios.patch("club/competition/" + eventId + "/", eventPayload)
            .then(() => {
                setData((prevData) => {
                    return {
                        ...prevData, event: {
                            ...prevData.event,
                            name: values.name,
                            event_start: values.eventStartDate.toISOString(),
                            event_end: values.eventEndDate.toISOString(),
                            location: values.location,
                        }
                    }
                })
                showAlert("Event Updated Successfully", "success");

                // Refreshing Layer0 cache
                axios.get(`${window.location.origin}/event/${eventId}/`)
            })

        if (!lodashIsEmpty(formPayload))
            axios.patch("form/form/" + eventId + "/", formPayload)
                .then((res) => {
                    setData((prevData) => {
                        return {
                            ...prevData,
                            form: [res.data, true],
                        };
                    });
                    showAlert("Form Updated Successfully", "success");

                    // Refreshing Layer0 cache
                    axios.get(`${window.location.origin}/event/${eventId}/`)
                });

    }


    const [ModalShow2, setModalShow2] = useState(false);
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);
    const [key, setKey] = useState('responses');

    const setFaq = (faq) => {
        axios.patch(`club/competition/${eventId}/`, {
            faq: JSON.stringify(faq)
        }).then(() => {
            setData((prevData) => {
                return { ...prevData, event: { ...prevData.event, faq: JSON.stringify(faq) } }
            })

            // Refreshing Layer0 cache
            axios.get(`${window.location.origin}/event/${eventId}/`)
        })
    }

    const handleDeletePic = (num) => {
        console.log("Picture deleted")
        console.log(data.bannerPaths)
        const temp = JSON.parse(data.bannerPaths)
        const storage = getStorage(firebase);
        const desertRef = ref(storage, temp[num]);

        temp.splice(num, 1)
        const payload = {
            image_links: JSON.stringify(temp)
        }
        axios.patch(`/club/competition/${eventId}/`, payload).then(() => {
            deleteObject(desertRef)
            showAlert(
                "Picture Deleted",
                "success"
            )

            // Refreshing Layer0 cache
            axios.get(`${window.location.origin}/event/${eventId}/`)
        })
        setData({ ...data, bannerLinks: undefined, bannerPaths: JSON.stringify(temp) })
    }

    const bannerControl = (args, num) => {
        if (args[num] !== undefined && args !== undefined) {
            return (
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
        else {
            return (
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
        if (image == null)
            return;
        const metadata = {
            contentType: image.type,
            customMetadata: {
                clubs: JSON.stringify(event.clubs),
                misc: `event-${eventId}-banner`
            }
        }

        console.log('originalFile instanceof Blob', image instanceof Blob); // true
        console.log(`originalFile size ${image.size / 1024 / 1024} MB`);

        const options = {
            maxSizeMB: 250 / 1024,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }
        imageCompression(image, options)
            .then(function (compressedFile) {
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

                uploadBytes(storageRef, compressedFile, metadata).then((args) => {
                    const temp = args["metadata"]["fullPath"]
                    const arr = JSON.parse(data.bannerPaths)
                    arr.splice(index, 0, temp)
                    const payload = {
                        image_links: JSON.stringify(arr)
                    }
                    axios.patch("/club/competition/" + eventId + "/", payload).then(() => {
                        showAlert(
                            "Picture Uploaded",
                            "success"
                        )
                        setData({ ...data, bannerLinks: undefined, bannerPaths: JSON.stringify(arr) })

                        // Refreshing Layer0 cache
                        axios.get(`${window.location.origin}/event/${eventId}/`)
                    })
                })
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    const handleSubmitLinks = (args) => {
        const payload = {
            link: (args[0].startsWith("http://") || args[0].startsWith("https://")) ? args[0] : `https://${args[0]}`,
        }
        axios.patch('/club/competition/' + eventId + '/', payload).then(() => {
            handleClose2()
            showAlert(
                "Links Added",
                "success"
            )
            setEvent({ ...event, link: payload.link })

            // Refreshing Layer0 cache
            axios.get(`${window.location.origin}/event/${eventId}/`)
        })
    }

    useEffect(() => {
        if (eventId !== undefined) {

            if (!data.tableResponses[1])
                axios.get(`form/response/${eventId}/`)
                    .then(res => settableResponses(res.data))
                    .catch(err => {
                        if (err.response.status === 404)
                            settableResponses(-1);
                        else
                            throw err;
                    })

            if (isEmpty(event))
                axios.get(`club/competition/${eventId}/`)
                    .then(res => setEvent(res.data))

            if (!data.form[1])
                axios.get(`form/form/${eventId}/`)
                    .then(res => setForm(res.data))
                    .catch(err => {
                        if (err.response.status === 404)
                            setForm(-1);
                        else
                            throw err;
                    })

            if (isEmpty(clubLogoLinks) && !isEmpty(event))
                event.clubs.map(club => getDownloadURL(ref(storage, 'data/' + club + '/uneditable/logo.png'))
                    .then(url => addClubLogoLinks(club, url)))

            if (data.bannerLinks === undefined && data.bannerPaths !== undefined) {
                const storage = firebase ? getStorage(firebase) : getStorage();
                if (data.bannerPaths === '[]') {
                    // suppression needed
                    // eslint-disable-next-line react/no-did-update-set-state
                    setData({ ...data, bannerLinks: [] })
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
        }
    })

    let formContent;
    if (form)
        formContent = JSON.parse(form.skeleton);

    // console.log("formcontent ", formContent);
    // console.log("formresponse", tableResponses);


    ChartJS.register(ArcElement, Tooltip, Legend);


    const renderSummary = () => {
        return tableHeaders.map((option, index) => {
            const chartData = {
                datasets: [{
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }],
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            };
            if (formContent[index].type === "radio" || formContent[index].type === "checkbox" || formContent[index].type === "select" || formContent[index].type === "number") {
                const graphData = {};
                tableResponses.forEach((response) => {
                    if(graphData[response.elements[index].value] === undefined)
                        graphData[response.elements[index].value] = 1;
                    else
                        graphData[response.elements[index].value] += 1;
            })
                chartData.datasets[0].data = Object.values(graphData);
                chartData.labels = Object.keys(graphData);
                console.log("chartData", chartData);
                return (
                    <>
                        <h1 key={option.name}>
                            {option.name}
                        </h1>

                        <div className="chart-container">
                            <Pie
                                className={pie}
                                data={chartData}
                            />
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <h1 key={option.name}>
                            {option.name}
                        </h1>

                        {tableResponses.map((response) => (
                            <p key={response}>
                                {response.elements[index].value}
                            </p>
                        ))}
                    </>
                )
            }
        })
    }

    const isLoading = isEmpty(event);
    if (isLoading)
        return <Loading />
    else
        // console.log("table headers ", tableHeaders);
        // console.log("table responses ", tableResponses[0].elements);

        return (
            <>

                <UModal
                    ModalShow={ModalShow2}
                    eventID={eventId}
                    handleClose={() => setModalShow2(false)}
                />

                <EditDescriptionModal
                    description={event.description}
                    eventId={eventId}
                    handleClose={() => setShowDescriptionModal(false)}
                    setDescription={(desc) => { setData((data) => { return { ...data, event: { ...data.event, description: desc } } }) }}
                    show={showDescriptionModal}

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
                                {data.bannerLinks === undefined ? null :
                                <div className="mx-auto d-flex">
                                    <div className="d-flex">
                                        {data.bannerLinks[0] ?
                                            <div>
                                                <span onClick={() => handleDeletePic(0)}>
                                                    <SvgIcon
                                                        className="align-content-end"
                                                        height="20px"
                                                        src="cross.svg"
                                                        width="20px"
                                                    />
                                                </span>
                                            </div> : null}

                                        <div
                                            className={"my-auto mx-3 " + ((data.bannerLinks[0]) ? "" : "-primary")}
                                            onClick={() => data.image1Ref.current.click()}
                                        >

                                            {bannerControl(data.bannerLinks, 0)}


                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        {data.bannerLinks[1] ?
                                            <div>
                                                <span onClick={() => handleDeletePic(1)}>
                                                    <SvgIcon
                                                        className="align-content-end"
                                                        height="20px"
                                                        src="cross.svg"
                                                        width="20px"
                                                    />
                                                </span>
                                            </div> : null}

                                        <div
                                            className={"my-auto mx-3" + ((data.bannerLinks[1]) ? "" : "-primary")}
                                            onClick={() => data.image2Ref.current.click()}
                                        >
                                            {bannerControl(data.bannerLinks, 1)}
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        {data.bannerLinks[2] ?
                                            <div>
                                                <span onClick={() => handleDeletePic(2)}>
                                                    <SvgIcon
                                                        className="align-content-end"
                                                        height="20px"
                                                        src="cross.svg"
                                                        width="20px"
                                                    />
                                                </span>
                                            </div> : null}

                                        <div
                                            className={"my-auto mx-3 " + ((data.bannerLinks[2]) ? "" : "-primary")}
                                            onClick={() => data.image3Ref.current.click()}
                                        >
                                            {bannerControl(data.bannerLinks, 2)}
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div>
                                <input
                                    className="d-none"
                                    onChange={(e) => handleUpload(e.target.files[0], 0)}
                                    ref={data.image1Ref}
                                    type="file"
                                />

                                <input
                                    className="d-none"
                                    onChange={(e) => handleUpload(e.target.files[0], 1)}
                                    ref={data.image2Ref}
                                    type="file"
                                />

                                <input
                                    className="d-none"
                                    onChange={(e) => handleUpload(e.target.files[0], 2)}
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

                                    <Button
                                        className="btn btn-outline-warning material-icons"
                                        onClick={handleShowEvent}
                                        type="button"
                                    >
                                        edit
                                    </Button>
                                </h1>

                                <div>

                                    <div className="">
                                        <p>

                                            <FontAwesomeIcon icon={faCalendar} />

                                            {' '}

                                            {convertToDatetimeString(event.event_start) +
                                                (event.event_end ? " to " + convertToDatetimeString(event.event_end) : "")}
                                        </p>

                                        <p>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />

                                            {' '}

                                            {event.location}
                                        </p>

                                        {isEmpty(form) ? null :
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
                                        {isEmpty(form) ? null :
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
                                                className="mw-100 rounded-5"
                                                contentClassName="border-0 m-0 rounded-5"
                                                dialogClassName="mw-75 w-75"
                                                onHide={handleClose}
                                                show={showModal}
                                                size="lg"
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        Responses

                                                    </Modal.Title>
                                                </Modal.Header>

                                                <Modal.Body>

                                                    <Tabs
                                                        activeKey={key}
                                                        defaultActiveKey="responses"
                                                        id="controlled-tab-example"
                                                        onSelect={(k) => setKey(k)}
                                                    >
                                                        <Tab
                                                            eventKey="responses"
                                                            title="Responses"
                                                        >
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

                                                                        <td>
                                                                            {" "}
                                                                            Email (verified)
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

                                                                            <td>
                                                                                {response.responder_emails[0]}
                                                                            </td>

                                                                            {response.elements.map((values) => (
                                                                                <td
                                                                                    key={values.value}
                                                                                >
                                                                                    {isValidUrl(values.value) ? (
                                                                                        <a
                                                                                            href={values.value}
                                                                                            rel="noopener noreferrer"
                                                                                            target="_blank"
                                                                                        >
                                                                                            {values.value}
                                                                                        </a>
                                                                                        ) : (
                                                                                            values.value
                                                                                        )}
                                                                                </td>
                                                                                ))}
                                                                        </tr>
                                                                        ))}

                                                                </tbody>
                                                            </Table>
                                                        </Tab>

                                                        <Tab
                                                            eventKey="summary"
                                                            title="Summary"
                                                        >
                                                            {renderSummary()}
                                                        </Tab>
                                                    </Tabs>

                                                    {/* {tableHeaders.map((option) => {
                                                        <>
                                                            <td key={option.name}>
                                                                {option.name}
                                                            </td>

                                                            {tableResponses.elements.map((response) => {
                                                                <p key={response.value}>
                                                                    {response.value}
                                                                </p>
                                                            })}
                                                        </>
                                                    })} */}

                                                    <br />

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

                                    <div className="p-2 col-6">
                                        <FaqEditor
                                            disappear={() => { setData({ ...data, currentModal: null }) }}
                                            faq={JSON.parse(event.faq)}
                                            setFaq={setFaq}
                                            setShow={() => { setData({ ...data, currentModal: "faq" }) }}
                                            show={data.currentModal === "faq"}
                                        />
                                    </div>

                                    <div className="p-2 col-6">
                                        <Button
                                            className="w-100"
                                            letiant="outline-primary"
                                            onClick={handleShow2}
                                        >
                                            Add Event link
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
                            </div>
                        </div>

                        {form && <EditNameDateModal
                            eventEndDate={event.event_end ? new Date(event.event_end) : undefined}
                            eventStartDate={new Date(event.event_start)}
                            handleClose={handleCloseEvent}
                            handleSubmit={handleSubmitEvent}
                            location={event.location}
                            name={event.name}
                            registrationEndDate={form.closes_at ? new Date(form.closes_at) : undefined}
                            registrationStartDate={form.opens_at ? new Date(form.opens_at) : undefined}
                            show={data.showEvent}
                                 />}

                        <div>
                            <ReactMarkdown>
                                {event.description}
                            </ReactMarkdown>

                            <Button
                                className="my-2 w-100"
                                onClick={() => setShowDescriptionModal(true)}
                                size="lg"
                            >
                                Update description
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Event;

Event.title = "CollabAmigo Event Management page"
