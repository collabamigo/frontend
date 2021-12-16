import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import styles from "./EventTalkCard.module.css";

export default function EventTalkCard(props) {

    var dates = new Date(props.element.event_end);
    var finals = ((dates.getMonth() + 1) + '/' + dates.getDate() + '/' +  dates.getFullYear());
    var datee = new Date(props.element.event_end);
    var finale = ((datee.getMonth() + 1) + '/' + datee.getDate() + '/' +  datee.getFullYear());

    return (
        <div className={styles.cardCenter}>
            <Card>
                <Card.Img
                    src={props.element.src}
                    variant="top"
                />

                <Card.Body>
                    <div className={styles.cardinner}>
                        <Card.Title className={styles.title + " text-primary fw-bold"}>
                            {props.element.name}
                        </Card.Title>

                        <Card.Subtitle className={styles.subtitle + " mb-2 text-muted"}>

                            {finals} 

                            { " - "}

                            {finale}

                        </Card.Subtitle>

                        <Card.Text className={styles.text}>
                            {props.element.description}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


EventTalkCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    element: PropTypes.object,

}

EventTalkCard.defaultProps = {
    element:{
        src: "https://via.placeholder.com/450x450",
        title: "Event title",
        subtitle: "Event subtitle",
        description: "Event descriptiontext comes here",
        footer: "Event footer",
    }
}