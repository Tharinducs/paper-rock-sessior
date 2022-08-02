import { Col, Row, Image } from "antd";
import React from "react";
import banner from "../../assets/images/login.jpg"
import { StyledCol } from "./homestyles";

const Home = () => {
    return (
        <>
            <Row>
                <StyledCol lg={12}>
                    <Image height="100vh" src={banner} preview={false} />
                </StyledCol>
                <Col lg={12}>
                   <Image height="100vh" src={require("../../assets/images/soon.jpg")} preview={false} />
                </Col>
            </Row>
        </>

    )
}

export default Home