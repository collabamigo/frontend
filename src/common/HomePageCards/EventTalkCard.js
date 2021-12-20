import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import {SvgIcon} from "common/SvgIcon";
import {truncate} from "utilities";
import styles from "./EventTalkCard.module.css";
import ReactMarkdown from "react-markdown";

export default function EventTalkCard(props) {

    // var dates = new Date(props.element.event_end);
    // var finals = ((dates.getMonth() + 1) + '/' + dates.getDate() + '/' +  dates.getFullYear());
    var datee = new Date(props.element.event_end);
    var finale = ((datee.getMonth() + 1) + '/' + datee.getDate() + '/' +  datee.getFullYear());

    return (
        <Card className={styles.cardCenter  + " h-100"}>
            <Card.Img
                className={styles.image}
                src="https://via.placeholder.com/350x200"
                variant="top"
            />

            <Card.Body className={styles.cardinner}>
                <Card.Title className=" text-primary fw-bold">
                    {props.element.name}
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    {props.element.clubs.map((val) => {
                            return (
                                <span key={val}>
                                    {val}
                                </span>
                            );

                        })}
                </Card.Subtitle>


                <Card.Text className={styles.text}>
                    <ReactMarkdown>
                        {truncate(props.element.description, 80)}
                    </ReactMarkdown>
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

                        {finale}
                    </p>
                </Card.Subtitle>

            </Card.Body>
        </Card>
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
