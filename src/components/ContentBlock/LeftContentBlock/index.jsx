
import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
    LeftContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
} from "./styles";
import GoogleSignIn from "../../GoogleSignIn/GoogleSignIn";

function LeftContentBlock({
    alt_content,
    alt_title,
    icon,
    title,
    content,
    section,
    t,
    id,
    onLogin
}: ContentBlockProps) {
    const [stage, setStage] = useState("button");

    return (
        <LeftContentSection className={(stage === "form") ? "p-0" : ""}>
            <Fade direction="left">
                <div
                    align="middle"
                    className="row justify-content-center"
                    id={id}
                >
                    <div
                        className="col-lg-6 col-md-11 col-sm-12"
                    >
                        <SvgIcon
                            height="100%"
                            src={icon}
                            width="100%"
                        />
                    </div>

                    <div
                        className="col-lg-6 col-md-11 col-sm-12"
                    >
                        <ContentWrapper>
                            <h6 className="text-left">
                                {(stage === "button") ? t(title) : t(alt_title)}
                            </h6>

                            <Content className={"text-left " + ((stage === "form") ? "h1 font-weight-bold" : null)}>
                                {(stage === "button") ? t(content) : t(alt_content)}
                            </Content>

                            <ServiceWrapper>
                                <Row justify="space-between">
                                    {typeof section === "object" &&
                                        section.map((item: any, id: number) => {
                                            return (
                                                <Col
                                                    key={id.toString()}
                                                    span={11}
                                                >
                                                    <SvgIcon
                                                        height="60px"
                                                        src={item.icon}
                                                        width="60px"
                                                    />

                                                    <MinTitle>
                                                        {t(item.title)}
                                                    </MinTitle>

                                                    <MinPara>
                                                        {t(item.content)}
                                                    </MinPara>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </ServiceWrapper>
                        </ContentWrapper>

                        <GoogleSignIn
                            onClick={onLogin}
                            setStage={setStage}
                            stage={stage}
                            visibility
                        />
                    </div>
                </div>


            </Fade>
        </LeftContentSection >
    );
}

export default withTranslation()(LeftContentBlock);
