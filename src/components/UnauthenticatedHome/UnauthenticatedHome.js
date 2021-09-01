
import React from "react";
import { Styles } from "../../styles/styles";
// import Header from "../Header";
import PropTypes from "prop-types";
import Container from "../../common/Container";
import ContentBlock from "../ContentBlock";
import IntroContent from "../../content/IntroContent.json";
import PostIntroContent from "../../content/PostIntroContent.json";

function UnauthenticatedHome({onLogin}) {
    return (
        <>
            <Styles />

            <Container>
                <ContentBlock
                    alt_content={PostIntroContent.text}
                    alt_title={PostIntroContent.title}
                    button={IntroContent.button}
                    content={IntroContent.text}
                    icon="developer.svg"
                    id="intro"
                    onLogin={onLogin}
                    title={IntroContent.title}
                    type="left"
                />
            </Container>
        </>
    )
}

UnauthenticatedHome.propTypes = {
  onLogin: PropTypes.func.isRequired
}
export default UnauthenticatedHome
