import {getAuth} from "firebase/auth";
import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import BCarousel from "react-bootstrap/Carousel";
import Carousel from 'react-bootstrap/Carousel'
import {SvgIcon} from "common/SvgIcon";
import ClubAdminModal from "components/ClubAdmin/modal";
import Loading from "components/Loading";
import {FirebaseContext} from "firebaseProvider";
import axios from "utilities/axios";
import {withRouter} from "next/router";
import PropTypes from "prop-types";
import {ListGroup} from "react-bootstrap";
import {getDownloadURL, getStorage, ref, uploadBytes, deleteObject} from "firebase/storage";
import RCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "pages/club/styles.module.scss";
import Link from "common/Link";
import lodashMap from "lodash/map";
import Image from "react-bootstrap/Image";
import EventTalkCard from "../../../common/HomePageCards/EventTalkCard";
import {showAlert} from "../../../common/Toast";
import imageCompression from 'browser-image-compression';

class ClubAdminPage extends Component {

    static propTypes = {
        clubName: PropTypes.string.isRequired,
        router: PropTypes.shape(
            {
                isReady: PropTypes.bool.isRequired,
                query: PropTypes.shape({
                    clubName: PropTypes.string.isRequired
                }),
            }
        ).isRequired
    }

    constructor(props) {
        super(props)
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " +
            today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        this.image1Ref = React.createRef()
        this.image2Ref = React.createRef()
        this.image3Ref = React.createRef()
        this.state = {
            token:null,
            image1:null,
            image2:null,
            image3:null,
            setImage:null,
            basicInformation: null,
            competitions:null,
            announcements: null,
            isLoading: true,
            currentDateTime : date,
            bannerLinks:undefined,
            bannerPaths :undefined,
            logoUrl:null,
            clubName: undefined,
        }
    }

    componentDidMount() {
        this.componentDidUpdate()
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        if (this.state.clubName !== this.props.router.query.clubName)
            // SUPPRESSION necessary
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState((prevState)=>({
                token: null,
                image1: null,
                image2: null,
                image3: null,
                setImage: null,
                basicInformation: null,
                competitions: null,
                announcements: null,
                isLoading: true,
                currentDateTime: prevState.currentDateTime,
                bannerLinks: undefined,
                bannerPaths: undefined,
                logoUrl: null,
                clubName: undefined,
            }))

        if (this.props.router.isReady) {
            if (this.state.clubName !== this.props.router.query.clubName)
                // SUPPRESSION necessary
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({clubName: this.props.router.query.clubName})
            const firebase = this.context;
            const storage = getStorage(firebase);
            if (!this.state.logoUrl) {
                getDownloadURL(ref(storage, "data/" + this.props.router.query.clubName + "/uneditable/logo.png"))
                    .then(url => this.setState({logoUrl: url}));
            }
            if (this.state.basicInformation === null)
                axios.get("club/club/"+ this.props.router.query.clubName +"/").then((res) => {
                    this.setState({basicInformation: res.data, isLoading: false,bannerPaths:res.data.image_links});
            if (this.state.announcements === null)
                axios.get("club/clubannouncements/" + this.props.router.query.clubName + "/").
                    then((res) => {
                        this.setState({announcements : res.data})
                    });
            if (this.state.competitions === null)
                axios.get("club/clubcompetitions/" + this.props.router.query.clubName + "/").
                    then((res) => {
                        this.setState({competitions: res.data})
                    });
            });
            if (this.state.bannerLinks === undefined && this.state.bannerPaths !== undefined) {
                const firebase = this.context;
                const storage = firebase ? getStorage(firebase) : getStorage();
                if (this.state.bannerPaths === '[]'){
                    // suppression needed
                    // eslint-disable-next-line react/no-did-update-set-state
                    this.setState({bannerLinks:[]})
                }
                else
                    JSON.parse(this.state.bannerPaths).map((link, index) => {
                        getDownloadURL(ref(storage, link)).then((url) => {
                            this.setState((prevState) => ({
                                ...prevState,
                                bannerLinks: {
                                    ...(prevState.bannerLinks),
                                    [index]: url,
                                }
                            }))
                        })
                    })
            }
    }}

    renderFacebook(){
         if (this.state.basicInformation.facebook){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.facebook}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="facebook.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderInstagram(){
        if(this.state.basicInformation.instagram){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.instagram}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="instagram.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderDiscord(){
        if(this.state.basicInformation.discord){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.discord}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="discord.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderLinkedin(){
        if(this.state.basicInformation.linkedin){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.linkedin}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="linkedin.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }

    }

    renderTelegram(){
        if(this.state.basicInformation.telegram){
            return(
                <Card.Link
                    href={this.state.basicInformation.telegram}
                    target="_blank"
                >
                    <SvgIcon
                        height="25px"
                        src="telegram.svg"
                        width="25px"
                    />
                </Card.Link>
            )
        }
    }

    renderGithub(){
        if(this.state.basicInformation.github){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.github}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="github.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderMedium(){
        if(this.state.basicInformation.medium){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.medium}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="medium.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderMail(){
        if(this.state.basicInformation.mail){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.mail}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="mail.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderOther(){
        if(this.state.basicInformation.other){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.other}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="website.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    static contextType = FirebaseContext;

    handleSubmitDescription(values) {
        const description = values[0]
        this.setState((prevState) => {
            return (
                {
                    ...prevState,
                    basicInformation: {
                        ...(prevState.basicInformation),
                        description: description
                    }
                }
                )
        })
        this.handleCloseModal()

        const payload = {
            description: this.state.basicInformation.description
        }
        axios.patch("club/club/"+ this.props.router.query.clubName +"/" ,payload)
            .then(() => {
                this.setState(payload)
                    showAlert(
                        "Description Updated",
                        "success"
                    )
            })
    }

    handleSubmitAnnouncements(values){
        axios.post("club/announcements/",{
            club: this.props.router.query.clubName,
            content: values[0]
        }).then((ress) => {
                    showAlert(
                        "Announcements Updated",
                        "success"
                    )
                    this.setState((prevState) => {
                        return (
                            {
                                ...(prevState.announcements),
                                announcements:[{id:ress.data.id, content:ress.data.content, timestamp:ress.data.timestamp},...(prevState.announcements)]
                            })

                    })
        });
        this.handleCloseModal()
    }

    handleSubmitPanel(values){
        this.handleCloseModal()
        const payload = {
            instagram: values[0],
            linkedin: values[1],
            facebook: values[2],
            discord: values[3],
            github: values[4],
            mail: values[5],
            telegram: values[6],
            medium: values[7],
            other: values[8],
            tagline: values[9],
        }
        axios.patch("club/club/"+ this.props.router.query.clubName +"/" ,payload)
            .then(() => {
                this.setState((prevState) => {
                    return (
                        {
                            ...prevState,
                            basicInformation: {
                                ...(prevState.basicInformation),
                                instagram: values[0],
                                linkedin: values[1],
                                facebook: values[2],
                                discord: values[3],
                                github: values[4],
                                mail: values[5],
                                telegram: values[6],
                                medium: values[7],
                                other: values[8],
                                tagline: values[9],
                            }
                        })
                })
            showAlert(
                "Links Updated",
                "success"
                )
            })
    }

    bannerControl(args,num) {
        if (args[num] !== undefined && args !== undefined){
            return(
                <div>
                    <Image
                        alt="Carousel Image"
                        className={"d-block m-auto " + styles.bannerImage}
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

    handleUpload (image, index) {
        const firebase = this.context;
        const storage = getStorage();
        const storageRef = ref(storage, `/files/${getAuth(firebase).lastNotifiedUid}/${new Date().getTime()}`);
        if (image == null)
            return;
        const metadata = {
            contentType: image.type,
            customMetadata: {
                clubs: JSON.stringify([this.props.router.query.clubName]),
                misc: `club-${this.props.router.query.clubName}-banner`
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
        .then((compressedFile) => {
          console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
          console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

              uploadBytes(storageRef, compressedFile, metadata).then((args) => {
                const temp = args["metadata"]["fullPath"]
                const arr = JSON.parse(this.state.bannerPaths)
                arr.splice(index, 0, temp)
                const payload = {
                    image_links: JSON.stringify(arr)
                }
                axios.patch("/club/club/" + this.props.router.query.clubName + "/", payload).then(() => {
                    showAlert(
                        "Picture Uploaded",
                        "success"
                    )
                    console.log(JSON.stringify(arr))
                    this.setState({bannerLinks: undefined, bannerPaths: JSON.stringify(arr)})
                })
            })
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }


    handleCloseModal() {
        this.setState({
            currentModal: null,
        })
    }

    getNotification(date1,date2){
        date1 = new Date(date1)
        date2 = new Date(date2.split("T")[0] +" " + date2.split("T")[1].split(".")[0])
        if (Math.floor((Math.abs(date2 - date1)) / (1000 * 60 * 60)) <= 1){
            return(
                <span
                    className="position-absolute start-93  p-1
                    bg-primary border border-light rounded-circle"
                >
                    <span className="visually-hidden">
                        New alerts
                    </span>
                </span>
            )
        }
    }

    getDate(date1,date2){
        let year1 = new Date(date2.split("T")[0])
        let year2 = new Date(date1.split(" ")[0])
        date1 = new Date(date1)
        date2 = new Date(date2.split("T")[0] +" " + date2.split("T")[1].split(".")[0])

        if (Math.floor((Math.abs(year2-year1))/(1000*60*60*24))>0){
            return(Math.floor((Math.abs(year2-year1))/(1000*60*60*24)) + " days ago")
        }

        else{
            if (Math.floor((Math.abs(date2-date1))/(1000*60))<=0 && Math.floor((Math.abs(date2-date1))/(1000*60*60))<=0){
                return(" seconds ago")
            }
            else if (Math.floor((Math.abs(date2-date1))/(1000*60*60)) <= 0 && Math.floor((Math.abs(date2-date1))/(1000*60)) > 0){
                return(Math.floor((Math.abs(date2-date1))/(1000*60)) + " mins ago")
            }
            else{
                return(Math.floor((Math.abs(date2-date1))/(1000*60*60))+ " hrs ago")
            }
        }
    }

    handleDeletePic(num){
        console.log("Picture deleted")
        console.log(this.state.bannerPaths)
        const temp = JSON.parse(this.state.bannerPaths)
        const firebase = this.context;
        const storage = getStorage(firebase);
        const desertRef = ref(storage,temp[num]);

        temp.splice(num, 1)
        const payload = {
            image_links:JSON.stringify(temp)
        }
        axios.patch(`/club/club/${this.props.router.query.clubName}/`, payload).then(()=> {
            deleteObject(desertRef)
            showAlert(
                "Picture Deleted",
                "success"
            )
        })
        this.setState({bannerLinks:undefined,bannerPaths:JSON.stringify(temp)})
    }


    render(){
    const responsive =  {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 3
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        };

        if (this.state.isLoading || this.state.announcements === null || this.state.competitions === null){
            return <Loading />;
        }
        return (
            <div className="row m-md-3">
                <div className="mx-3 col-md-2 col-lg-2 col-sm-12 d-flex justify-content-around">
                    <div className={styles.clubcard}>
                        <div className="row">
                            <Card
                                className="pt-2"
                                style={{ width: '18rem' }}
                            >

                                <ClubAdminModal
                                    handleClose={this.handleCloseModal.bind(this)}
                                    handleSubmit={this.handleSubmitPanel.bind(this)}
                                    initialValues={[this.state.basicInformation.instagram,
                                        this.state.basicInformation.linkedin,
                                        this.state.basicInformation.facebook,
                                        this.state.basicInformation.discord,
                                        this.state.basicInformation.github,
                                        this.state.basicInformation.mail,
                                        this.state.basicInformation.telegram,
                                        this.state.basicInformation.medium,
                                        this.state.basicInformation.other,
                                        this.state.basicInformation.tagline]}
                                    labels={['Instagram','LinkedIn','Facebook','Discord','GitHub','Mail address','Telegram','Medium','Other website','Enter Your Clubs Tagline']}
                                    show={this.state.currentModal === 'panel'}
                                />

                                <Card.Img
                                    src={this.state.logoUrl}
                                    variant="top"
                                />

                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <Card.Title className='fs-2 fw-bold text-start  pt-2'>
                                            {this.state.basicInformation.name}
                                        </Card.Title>

                                        <div
                                            className=" align-self-end "
                                            onClick={() => {
                                            this.setState({
                                                currentModal: "panel",
                                            });
                                        }}
                                            type="button"
                                        >
                                            <svg
                                                className={styles.edit}
                                                height="64"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z" />
                                            </svg>
                                        </div>
                                    </div>


                                    <Card.Subtitle className={styles.tagline}>
                                        {this.state.basicInformation.tagline}
                                    </Card.Subtitle>

                                    <br />

                                    <div className="col text-center">
                                        {this.renderFacebook()}

                                        {this.renderInstagram()}

                                        {this.renderDiscord()}

                                        {this.renderLinkedin()}

                                        {this.renderTelegram()}

                                        {this.renderGithub()}

                                        {this.renderMedium()}

                                        {this.renderMail()}

                                        {this.renderOther()}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className={styles.clubBox + " col-md-9 col-lg-9 col-sm-12 justify-content-around"}>
                    <Card className={styles.leftCard1}>
                        <Card.Body>
                            <div className="">
                                <Carousel
                                    nextIcon={
                                        <span
                                            aria-hidden="true"
                                            className="carousel-control-next-icon"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='blue'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`,
                                            }}
                                        />
                                    }
                                    prevIcon={
                                        <span
                                            aria-hidden="true"
                                            className="carousel-control-prev-icon "
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='blue'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")`,
                                            }}
                                        />
                                    }
                                >
                                    {lodashMap(this.state.bannerLinks, (link) => (
                                        <BCarousel.Item key={link}>
                                            <Image
                                                className={"d-block m-auto " + styles.bannerImage}
                                                fluid
                                                rounded
                                                src={link}
                                            />
                                        </BCarousel.Item>
                                    ))}

                                </Carousel>

                                <br />

                                <div className="d-flex">
                                    {this.state.bannerLinks === undefined ? null:
                                    <div className="mx-auto d-flex">
                                        <div className="d-flex">
                                            {this.state.bannerLinks[0]?
                                                <div>
                                                    <span onClick={() => this.handleDeletePic(0)}>
                                                        <SvgIcon
                                                            className="align-content-end"
                                                            height="20px"
                                                            src="cross.svg"
                                                            width="20px"
                                                        />
                                                    </span>
                                                </div>: null}

                                            <div
                                                className={"my-auto mx-3 " + ((this.state.bannerLinks[0]) ? "" : "-primary")}
                                                onClick={() => this.image1Ref.current.click()}
                                                type="button"
                                            >

                                                {this.bannerControl(this.state.bannerLinks, 0)}


                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            {this.state.bannerLinks[1]?
                                                <div>
                                                    <span onClick={() => this.handleDeletePic(1)}>
                                                        <SvgIcon
                                                            className="align-content-end"
                                                            height="20px"
                                                            src="cross.svg"
                                                            width="20px"
                                                        />
                                                    </span>
                                                </div>: null}

                                            <div
                                                className={"my-auto mx-3" + ((this.state.bannerLinks[1]) ? "" : "-primary")}
                                                onClick={() => this.image2Ref.current.click()}
                                            >
                                                {this.bannerControl(this.state.bannerLinks, 1)}
                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            {this.state.bannerLinks[2]?
                                                <div>
                                                    <span onClick={() => this.handleDeletePic(2)}>
                                                        <SvgIcon
                                                            className="align-content-end"
                                                            height="20px"
                                                            src="cross.svg"
                                                            width="20px"
                                                        />
                                                    </span>
                                                </div>: null}

                                            <div
                                                className={"my-auto mx-3 " + ((this.state.bannerLinks[2]) ? "" : "-primary")}
                                                onClick={() => this.image3Ref.current.click()}
                                                type="button"
                                            >
                                                {this.bannerControl(this.state.bannerLinks, 2)}
                                            </div>
                                        </div>
                                    </div>}
                                </div>

                                <div>
                                    <input
                                        className="d-none"
                                        onChange={(e)=>this.handleUpload(e.target.files[0], 0)}
                                        ref={this.image1Ref}
                                        type="file"
                                    />

                                    <input
                                        className="d-none"
                                        onChange={(e)=>this.handleUpload(e.target.files[0], 1)}
                                        ref={this.image2Ref}
                                        type="file"
                                    />

                                    <input
                                        className="d-none"
                                        onChange={(e)=>this.handleUpload(e.target.files[0], 2)}
                                        ref={this.image3Ref}
                                        type="file"
                                    />
                                </div>

                                <br />

                                <div>
                                    <ClubAdminModal
                                        handleClose={this.handleCloseModal.bind(this)}
                                        handleSubmit={this.handleSubmitDescription.bind(this)}
                                        initialValues={[this.state.basicInformation.description]}
                                        labels={['Description','picture']}
                                        show={this.state.currentModal === 'description'}
                                    />

                                    <div className={styles.coordinators}>
                                        Coordinators:
                                        {' '}

                                        {this.state.basicInformation.admins.join(", ")}
                                    </div>

                                    <div className={styles.memberSize}>
                                        Member Size:
                                        {' '}

                                        {this.state.basicInformation.memberSize}
                                    </div>
                                </div>

                                <hr />


                                <div className={styles.mainBox + " row"}>
                                    <div className={styles.descriptionBox + " col"}>
                                        <div className={styles.descriptionHeading + " row d-flex justify-content-around"}>

                                            <span className="col-9 h3 align-self-start">
                                                Description

                                                {" "}
                                            </span>

                                            {" "}

                                            <div
                                                className="col-3"
                                                onClick={() => {
                                                this.setState({
                                                    currentModal: "description",
                                                });
                                                }}
                                                type="button"
                                            >
                                                <svg
                                                    className={styles.edit}
                                                    height="34"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z" />
                                                </svg>
                                            </div>

                                        </div>



                                        <p className={styles.description}>
                                            {this.state.basicInformation.description}
                                        </p>

                                    </div>

                                    <div className={styles.announcementsBox + " col"}>
                                        <div className={styles.announcementsHeading + " row d-flex justify-content-between"}>
                                            <span className="col-9 h3">
                                                Announcements

                                                {" "}
                                            </span>

                                            <div
                                                className="col-3"
                                                onClick={() => {
                                                    this.setState({
                                                        currentModal: "Announcements",
                                                    });
                                                }}
                                                type="button"
                                            >
                                                <svg
                                                    className={styles.edit}
                                                    height="34"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z" />
                                                </svg>
                                            </div>

                                            <ClubAdminModal
                                                handleClose={this.handleCloseModal.bind(this)}
                                                handleSubmit={this.handleSubmitAnnouncements.bind(this)}
                                                initialValues={["Add here"]}
                                                labels={['Add Announcements']}
                                                show={this.state.currentModal === 'Announcements'}
                                            />
                                        </div>



                                        <div className="overflow-auto">
                                            <ul
                                                className="list p-0 m-0"
                                                style={{ height: '250px'}}
                                            >
                                                {this.state.announcements.map(item => (
                                                    <ul
                                                        className="pe-2"
                                                        key={item}
                                                    >
                                                        <ListGroup
                                                            as="ol"
                                                        >
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start my-2"
                                                            >
                                                                <div className={styles.notifications}>
                                                                    <div className={styles.notificationHeading}>
                                                                        {item["content"]}
                                                                    </div>

                                                                    <div>
                                                                        {this.getDate(this.state.currentDateTime, item["timestamp"])}
                                                                    </div>

                                                                </div>

                                                                {this.getNotification(this.state.currentDateTime, item["timestamp"])}

                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </ul>
                                                ))}

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>

                    <br />

                    <Card className={styles.leftCard2}>
                        <Card.Body className="mt-3">
                            <div className="d-flex justify-content-between col-2 ">
                                <Card.Title className="card-title header-color text-left ">
                                    <h2>
                                        Events

                                        {" "}
                                    </h2>
                                </Card.Title>

                                <Link
                                    className="reset-a"
                                    to={"/manage/" + this.props.router.query.clubName + "/create-event"}
                                >
                                    <svg
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
                                    </svg>

                                </Link>
                            </div>


                            <br />

                            <Card.Text className="card-text h5 col-12">
                                <div>
                                    <RCarousel
                                        infinite
                                        responsive={responsive}
                                    >
                                        {this.state.competitions.map((option) => (
                                            <EventTalkCard
                                                element={option}
                                                key={option.description}
                                                manage
                                            />
                                        ))}
                                    </RCarousel>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <br />
                </div>
            </div>

        );
    }
}

const wrappedPage = withRouter(ClubAdminPage);
export default wrappedPage;
wrappedPage.title = "CollabAmigo Club Management page";
//  TODO: need to add option to edit coordinators
//TODO: need to give attributions to icons8
