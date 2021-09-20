
import React from "react";

import Container from "common/Container";
import ContentBlock from "components/ContentBlock";
import IntroContent from "content/IntroContent.json";
import PostIntroContent from "content/PostIntroContent.json";
import Layout from "../components/Layout";

function UnauthenticatedHome() {
    console.log("CALL")
    return (
        <Layout>


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
