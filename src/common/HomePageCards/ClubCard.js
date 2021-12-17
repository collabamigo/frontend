import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import styles from "./ClubCard.module.css";
import {getDownloadURL, getStorage, ref} from "firebase/storage";


export default function ClubCard({value}) {
    const [picture, setPicture] = useState("");
    useEffect(() => {
        if (!picture) {
            const storage = getStorage();
            getDownloadURL(ref(storage, 'data/' + value.username + '/uneditable/logo.png'))
                .then(url => setPicture(url))
        }
    })

    console.log(value)
    return (
        <div className={styles.cardCenter + " h-100"}>
            <Card className="h-100">
                <Card.Img
                    src={picture}
                    variant="top"
                />

                <Card.Body className="d-flex">
                    <Card.Title className={styles.title + " mt-auto ms-auto me-auto mb-2"}>
                        {value.name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

ClubCard.propTypes = {
    value: PropTypes.objectOf(PropTypes.string).isRequired
}
