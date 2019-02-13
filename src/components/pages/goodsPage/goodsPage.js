import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import coffeeBG from "./coffeeBG.jpg";
import coffeeCup from "./coffeeCup.jpg";
import GoodsList from "../../goodsList/goodsList";
import InfoBlock from "../../infoBlock/infoBlock";
import Footer from "../../footer/footer";
import Header from "../../header/header";

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
const Shop = styled.div`
  padding: 70px 0 40px 0;
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
        <Header title={"For your pleasure"} url={coffeeBG}/>
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
        <Footer />
      </Wrap>
    )
  }
}