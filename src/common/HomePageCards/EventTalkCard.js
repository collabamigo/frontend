import React, {useEffect, useState} from "react"
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import {SvgIcon} from "common/SvgIcon";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import Image from "react-bootstrap/Image";
import {truncate} from "utilities";
import Link from "common/Link";
import axios from "utilities/axios";
import {isMobile} from "react-device-detect";
import {remark} from 'remark'
import strip from 'strip-markdown'

import styles from "./EventTalkCard.module.css";

export default function EventTalkCard (props) {
    const [isActive, setIsActive] = useState(false);

    const [data, setData] = useState({
        imageLink: undefined,
        strippedText: undefined,
    });

    const imageLink = data.imageLink;
    const strippedText = data.strippedText;

    const setImageLink = (imageLink) => {
        setData({
            ...data,
            imageLink,
        });
    };
    const setStrippedText = (strippedText) => {
        setData({
            ...data,
            strippedText,
        });
    };

    useEffect(() => {
        if (imageLink === undefined){
                axios.get(`club/competition/${props.element.id}/`)
                .then(res => {
                    const storage = getStorage();
                    setIsActive(res.data.is_active);
                        if((JSON.parse(res.data.image_links))[0])
                        {
                            getDownloadURL(ref(storage, (JSON.parse(res.data.image_links))[0])).then(
                                link =>   setImageLink(link)
                            )
                        }
                        else{
                            setImageLink("https://via.placeholder.com/350x200")
                        }
                        })
                    }

        if (strippedText === undefined){
            remark()
                .use(strip)
                .process(props.element.description)
                .then((file) => {
                    setStrippedText(String(file))
                })
        }
            }, [])

    // var dates = new Date(props.element.event_end);
    // var finals = ((dates.getMonth() + 1) + '/' + dates.getDate() + '/' +  dates.getFullYear());
    var datee = new Date(props.element.event_end);
    var finale = ((datee.getMonth() + 1) + '/' + datee.getDate() + '/' + datee.getFullYear());

    const publishHandler = () => {
        axios.patch(`club/competition/${props.element.id}/`, {
            is_active: !isActive
        })
            .then(() => {
                setIsActive((prev) => !prev);
            })
    }


    return (
        <div className={styles.cardCenter+" h-100 mx-3 mx-md-5"}>


            <Card
                className={`h-100 ${isActive?'':'text-muted'}`}
                style={{ borderRadius: '10px' }}
            >
                <div
                    className="overflow-hidden justify-content-center d-flex"
                    style={{ height: '40%', borderRadius: '10px' }}
                >
                    <Link
                        className="reset-a d-flex align-items-center justify-content-center"
                        openInNewTab={props.openInNewTab}
                        to={"/"+(props.manage?"manage":"")+"event/" + props.element.id + "-" + props.element.name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-').toLowerCase()}
                    >
                        <Image
                            className="object-fit-contain img-fluid"
                            src={imageLink ? imageLink : "https://via.placeholder.com/350x200"}
                            // style={{ objectFit: 'contain' }}
                            variant="top"
                        />
                    </Link>
                </div>


                <Card.Body className={styles.cardinner + ' px-2 d-flex flex-column'}>
                    <Link
                        className="reset-a flex-1"
                        to={"/"+(props.manage?"manage":"")+"event/" + props.element.id + "-" + props.element.name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-').toLowerCase()}
                    >

                        <Card.Title className={`${isActive?'text-primary':'text-muted'} fw-bold mt-1`}>
                            {props.element.name}
                        </Card.Title>

                        <Card.Subtitle className="mb-2 text-muted">
                            {props.element.club_names.map((val) => {
                            return (
                                <span key={val}>
                                    {val+", "}
                                </span>
                            );
                        })}
                        </Card.Subtitle>


                        <Card.Text
                            className={styles.text}
                            style={{flex:1}}
                        >
                            <p>
                                {isMobile ? truncate(strippedText, 100) : truncate(strippedText, 290) }
                            </p>
                        </Card.Text>

                    </Link>

                    <br />

                    <Card.Subtitle className="d-flex text-muted mt-3">
                        <div
                            className='d-flex'
                            style={{flex:1}}
                        >
                            <SvgIcon
                                height="15px"
                                src="calendar_datee.svg"
                                width="15px"
                            />


                            <p className={styles.text2+ ' mx-2'}>
                                Fill before
                                {' '}

                                {finale}
                            </p>
                        </div>

                        { props.isDraftVisible &&  props.isAdmin &&
                            <label className={styles.switch}>
                                <input
                                    checked={isActive}
                                    className={styles.switch_input}
                                    onChange={publishHandler}
                                    type="checkbox"
                                />

                                <span className={styles.slider +' '+ styles.round} />
                            </label>}
                    </Card.Subtitle>

                </Card.Body>
            </Card>
        </div>
    )
}


EventTalkCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    element: PropTypes.object,
    isAdmin: PropTypes.bool,
    isDraftVisible: PropTypes.bool,
    manage: PropTypes.bool,
    openInNewTab: PropTypes.bool,
}

EventTalkCard.defaultProps = {
    element:{
        src: "https://via.placeholder.com/450x450",
        title: "Event title",
        subtitle: "Event subtitle",
        description: "Event descriptiontext comes here",
        footer: "Event footer",
    },
    isAdmin: false,
    isDraftVisible: false,
    manage: false,
    openInNewTab: false,

}
