import React from "react";
import styles from './Footer.module.css';


export default function LandingFooter() {
        return (
            <footer className={styles.container}>
                <div className={styles.row1 + " row"}>
                    <div className={styles.leftcontainer}>
                        <ul className={styles.listt}>
                            <li className={styles.listtitems}>
                                FAQ
                            </li>

                            <li className={styles.listtitems}>
                                About us
                            </li>

                            <li className={styles.listtitems}>
                                Privacy Policy
                            </li>

                            <li className={styles.listtitems}>
                                sitemap
                            </li>

                            <li className={styles.listtitems}>
                                Contact us
                            </li>
                        </ul>
                    </div>

                    <div className={styles.rightcontainer + " row"}>
                        <div className={styles.rightcontainerleft}>
                            <span className={styles.collabtext}>
                                CollabAmigo has helped
                            </span>
                        </div>

                        <div className={styles.rightcontainerright}>

                            <span className={styles.collabtext2}>
                                CollabAmigo has helped
                            </span>

                            <ul className={styles.listt}>
                                <li >
                                    X students to register for events
                                </li>

                                <li>
                                    Y clubs and Organizations to host events
                                </li>

                                <li>
                                    Z registrations to take place
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.row2}>
                    {' _'}
                </div>

            </footer>
        )
    }


