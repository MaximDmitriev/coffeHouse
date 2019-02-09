import React, { Component } from 'react';
import styled from "styled-components";
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import mainBG from "./Main_bg.jpg";
import paper from "./paper.jpg"
import NavList from "../../navList/navList";
import BestList from "../../bestList/bestList";

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

const Preview = styled.div`
    height: 640px;
    background: url(${mainBG}) center center no-repeat;
    background-size: cover;
    .preview__subtitle{
        color: #ffffff;
        font-weight: bold;
        margin-bottom: 0;
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        margin-top: 20px;
    }
`

const BtnMore = styled.button`
    display: block;
    width: 120px;
    height: 30px;
    margin: 0 auto;
    margin-top: 18px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    color: #ffffff !important;
    text-align: center;
    font-weight: bold ;
    line-height: 28px;
    font-size: 14px;
    background-color: transparent;
    cursor: pointer;
    :visited{
        text-decoration: none;
        color: #ffffff;
    }
    :hover{
        text-decoration: none;
        color: #ffffff;
    }
`
const About = styled.div`
    padding: 80px 0 110px 0;
    background-color: #ffffff;
    .about__text{ 
        margin-top: 40px;
        text-align: center;
        font-size: 14px;
        }
`
const Best = styled.div`
    padding: 80px 0 110px 0;
    background-color: #ffffff;
    background: url(${paper}) center center no-repeat;
    background-size: cover;
`
const Footer =styled.div`
    padding: 20px 0;
`

export default class MainPage extends Component {
    render() {

        return(
            <Wrap>
                <Preview>
                    <Container>
                        <Row>
                            <Col lg={{size: 7, offset: 0}}>
                                <NavList dark={false}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{size: 10, offset: 1}}>
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src="./logo/Beans_logo.svg" alt="Beans logo" />
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link to="/coffee/">
                                    <BtnMore>More</BtnMore>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Preview>

                <About>
                    <Container>
                        <Row>
                            <Col lg={{size: 6, offset: 3}}>
                                <div className="title">About Us</div>
                                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                                <div className="about__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.<br/><br/>

                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </About>
                <Best>
                    <Container>
                        <div className="title">Our best</div>
                        <Row>
                            <Col lg={{size: 10, offset: 1}}>
                                <BestList />
                            </Col>
                        </Row>
                    </Container>
                </Best>
                <Footer>
                    <Container>
                        <Row>
                            <Col lg={{size: 6, offset: 3}}>
                                <NavList dark={true}/>
                            </Col>
                        </Row>
                        <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"></img>
                    </Container>

                                {/* <NavList dark={true}/>

                        <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"></img> */}

                </Footer>
            </Wrap>
        )
    }
}