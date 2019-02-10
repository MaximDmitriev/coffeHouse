import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import coffeeBG from "./coffeeBG.jpg";
import coffeeCup from "./coffeeCup.jpg";
import NavList from "../../navList/navList";
import GoodsList from "../../goodsList/goodsList";
import InfoBlock from "../../infoBlock/infoBlock";

const Wrap = styled.div`
    h1{
        margin-top: 110px;
    }
    .beanslogo{
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
`
const Banner = styled.div`
    height: 260px;
    background: url(${coffeeBG}) center center no-repeat;
    background-size: cover;
    .title-big{
        margin-top: 60px;
    }
`
const Shop = styled.div`
    padding: 70px 0 40px 0;
`
const Footer =styled.div`
    padding: 20px 0;
`

const Body = () => {
    return (
        <>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/><br/>
            Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br/>
            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
            met spot shy want. Children me laughing we prospect answered followed. At it went is<br/>
            song that held help face.
        </>
    )
}


export default class GoodsPage extends Component {

    state = {
        country: null,
        musk: null
    }

    url = coffeeCup;

    title = "About our goods";


    render() {

        return(
            <Wrap>
                <Banner>
                    <Container>
                        <Row>
                            <Col lg={{size: 7, offset: 0}}>
                                <NavList dark={false}/>
                            </Col>
                        </Row>
                        <h1 className="title-big">For your pleasure</h1>
                    </Container>
                </Banner>
                <Shop>
                    <Container>
                        <InfoBlock body={<Body/>} title={this.title} imgUrl={this.url}/>
                        <Row>
                            <Col lg={{size: 10, offset: 1}}>
                                <GoodsList />
                            </Col>
                        </Row>
                    </Container>
                </Shop>
                <Footer>
                    <Container>
                        <Row>
                            <Col lg={{size: 6, offset: 3}}>
                                <NavList dark={true}/>
                            </Col>
                        </Row>
                        <img className="beanslogo" src={ process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
                    </Container>
                </Footer>

            </Wrap>
        )
    }
}