import React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import NavList from "../navList/navList";

const FooterWrap = styled.div`
    padding: 20px 0;
`

const Footer = () => {

    return(
        <FooterWrap>
            <Container>
                <Row>
                    <Col lg={{size: 6, offset: 3}}>
                        <NavList dark={true}/>
                    </Col>
                </Row>
                <img className="beanslogo" src={ process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
            </Container>
        </FooterWrap>
    )
}

export default Footer;