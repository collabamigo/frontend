
import React from "react";
import {Styles} from "styles/styles";

import Container from "common/Container";
import ContentBlock from "components/ContentBlock";
import IntroContent from "content/IntroContent.json";
import PostIntroContent from "content/PostIntroContent.json";
import Layout from "../components/Layout";
import "./index.css";

function UnauthenticatedHome() {
    return (
        <Layout>
            <Styles />

            <Container>
                <ContentBlock
                    alt_content={PostIntroContent.text}
                    alt_title={PostIntroContent.title}
                    button={IntroContent.button}
                    content={IntroContent.text}
                    icon="developer.svg"
                    id="intro"
                    title={IntroContent.title}
                    type="left"
                />
            </Container>
        </Layout>
    )
}

export default UnauthenticatedHome
