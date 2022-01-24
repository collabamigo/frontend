import React from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";
import styles from "../styles/index.module.css";
import ClubList from 'components/ClubList/ClubList';
import ClubEventList from 'components/ClubEventList/ClubEventlist';

// import LandingFooter from "components/LandingFooter";

export default class AuthenticatedHome extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {

        return (
            <div>
                <div className={styles.firstSection}>
                    <div className={styles.firstsectionInner + " row"}>
                        <div className={styles.firstsectionInnerleft}>
                            <Image
                                alt="Front Photo"
                                className={styles.firstsectionInnerleftImage}
                                fluid
                                rounded
                                src="/img/jpg/IntroImage.png"
                            />
                        </div>

                        <div className={styles.firstsectionInnerright}>
                            <span className={styles.firstsectionInnerheading + " display-2 fw-bold text-primary"}>
                                Welcome to CollabAmigo!
                            </span>

                            <br />

                            <span className={styles.firstsectionInnertext + " text-primary"}>
                                Participate in competitions in college,
                            </span>

                            <br />

                            <span className={styles.firstsectionInnertext + " text-primary"}>
                                have lots of fun!
                            </span>

                        </div>
                    </div>
                </div>

                <ClubEventList text='Competitions' />
                        
                <ClubList
                    text='Clubs & Organizations'
                /> 
              
            </div>

        );
    }
}

// TODO: Attribution to freepik.com pending
