import React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import NavList from "../navList/navList";

const Banner = styled.div`
    height: 260px;
    background: url(${props => props.image}) center center no-repeat;
    background-size: cover;
    .title-big{
        margin-top: 60px;
    }
`

const Header = ({title, url}) => {

    return(
        <Banner image={url}>
            <Container>
                <Row>
                    <Col lg={{size: 7, offset: 0}}>
                        <NavList dark={false}/>
                    </Col>
                </Row>
                <h1 className="title-big">{title}</h1>
            </Container>
        </Banner>
    )
}

export default Header;