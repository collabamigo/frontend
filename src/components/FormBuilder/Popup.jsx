import * as React from "react";
import { Animate } from "react-simple-animate";
import { useStateMachine } from "little-state-machine";
import PropTypes from "prop-types";
import * as styles from "./Popup.module.css";

function Popup({ message, top, iconOnly }) {
    const { state } = useStateMachine();
    const lightMode = state?.setting?.lightMode;
    const [tipShow, setTipShow] = React.useState(false);

    return iconOnly ? (
        <span className={`${styles.icon} ${lightMode ? styles.lightIcon : {}}`}>
            !
        </span>
    ) : (
        <span className={styles.root}>
            <button
                className={styles.button}
                onClick={() => setTipShow(!tipShow)}
            >
                !
            </button>
          
            <span>
                <Animate
                    end={{
                        transform: "translateX(0)",
                    }}
                    play={tipShow}
                    render={({ style }) => (
                        <span style={{ ...style, top }}>
                            {message || (
                                <>
                                    React Native: compatible with Controller
                                </>
                            )}
                        </span>
                    )}
                    start={{
                        transform: "translateX(-100%)",
                    }}
                />
            </span>
        </span>
    );
}

Popup.defaultProps = {
    iconOnly: false,
    message: null,
    top: "0px",
};

Popup.propTypes = {
    iconOnly: PropTypes.bool,
    message: PropTypes.string,
    top: PropTypes.string,
};

export default Popup;
