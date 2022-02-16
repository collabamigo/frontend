import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import Link from "../Link";
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

    return (
        <div className={styles.cardCenter + " h-100"}>
            <Link
                className="reset-a"
                to={"/club/" + value.username}
            >
                <Card className="h-100">
                    <Card.Img
                        src={picture}
                        variant="top"
                    />

                    <Card.Title className={styles.title + " mb-2 text-primary"}>
                        {value.name}
                    </Card.Title>
                </Card>
            </Link>
        </div>
    )
}

ClubCard.propTypes = {
    value: PropTypes.objectOf(PropTypes.string).isRequired
}
