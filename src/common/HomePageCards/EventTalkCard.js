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

export default function EventTalkCard(props) {

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
            })

    // var dates = new Date(props.element.event_end);
    // var finals = ((dates.getMonth() + 1) + '/' + dates.getDate() + '/' +  dates.getFullYear());
    var datee = new Date(props.element.event_end);
    var finale = ((datee.getMonth() + 1) + '/' + datee.getDate() + '/' +  datee.getFullYear());

    return (
        <div className={styles.cardCenter+" h-100 mx-3 mx-md-5"}>
            <Link
                className="reset-a"
                to={"/"+(props.manage?"manage":"")+"event/" + props.element.id + "-" + props.element.name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-').toLowerCase()}
            >
                <Card
                    className="h-100"
                    style={{ borderRadius: '10px' }}
                >
                    <div
                        className="overflow-hidden justify-content-center d-flex"
                        style={{ height: '40%', borderRadius: '10px' }}
                    >
                        <Image
                            className="img-fluid mh-100"
                            src={imageLink ? imageLink : "https://via.placeholder.com/350x200"}
                            // style={{ objectFit: 'contain' }}
                            variant="top"
                        />
                    </div>

                    <Card.Body className={styles.cardinner + ' px-2'}>
                        <Card.Title className=" text-primary fw-bold mt-1">
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


                        <Card.Text className={styles.text}>
                            <p>
                                {isMobile ? truncate(strippedText, 100) : truncate(strippedText, 290) }
                            </p>
                        </Card.Text>

                        <br />

                        <Card.Subtitle className={styles.bottom + " d-flex text-muted "}>
                            <SvgIcon
                                height="15px"
                                src="calendar_datee.svg"
                                width="15px"
                            />


                            <p className={styles.text2}>
                                .

                                Fill before
                                {' '}



                                {finale}
                            </p>
                        </Card.Subtitle>

                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}


EventTalkCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    element: PropTypes.object,
    manage: PropTypes.bool,
}

EventTalkCard.defaultProps = {
    element:{
        src: "https://via.placeholder.com/450x450",
        title: "Event title",
        subtitle: "Event subtitle",
        description: "Event descriptiontext comes here",
        footer: "Event footer",
    },
    manage: false,

}
