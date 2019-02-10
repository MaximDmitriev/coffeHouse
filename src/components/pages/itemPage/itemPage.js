import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import coffeeBG from "./Coffee_bg.jpg";
import NavList from "../../navList/navList";
import getData from "../../../services/getData";


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
    .shop__point{
        margin-top: 16px;
        span{
            font-weight: bold;
        } 
        .shop__point-price{
            font-size: 24px;
            font-weight: normal !important;
        }
        :first-child{
            margin-top: 26px;
        }
    }
    .title{
        margin-top: 10px;
    }
    .shop__girl{
        display: block;
        margin: 0 auto;
        width: 100%;
    }
`
const Footer = styled.div`
    padding: 20px 0;
`

const View = ({url, country, description, price}) => {

    return(
        <>
            <Col lg={{size: 5, offset: 1}}>
                <img className="shop__girl" src={url} alt="coffee_item" />
            </Col>
            <Col lg={{size: 4}}>
                <div className="title">About it</div>
                    <img className="beanslogo" src={process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo" />
                <div className="shop__point">
                    <span>Country: </span>
                    {country}
                </div>
                <div className="shop__point">
                    <span>Description: </span>
                    {description}
                </div>
                <div className="shop__point">
                    <span>Price: </span>
                    <span className="shop__point-price">{price}</span>
                </div>
            </Col>
        </>
    )

}

export default class ItemPage  extends Component {

    data = new getData();

    state = {
        items: null
    }

    componentWillMount() {

        const checkName = this.props.history.location.pathname.replace("/items/", "");

        this.data.getCoffee().then((res) => {

            const index = res.findIndex(item => item.urlId === checkName);
            this.setState({items: res[index]})
        });
    }
    
    render() {

        const content = this.state.items ? <View 
                                                url={this.state.items.url}
                                                price={this.state.items.price}
                                                description={this.state.items.description}
                                                country={this.state.items.country}
                                            /> : null;


        return(
            <Wrap>
                <Banner>
                    <Container>
                        <Row>
                            <Col lg={{size: 7, offset: 0}}>
                                <NavList dark={false}/>
                            </Col>
                        </Row>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
                </Banner>
                <Shop>
                    <Container>
                        <Row>
                            {content}
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
                        <img className="beanslogo" src={process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
                    </Container>
                </Footer>
            </Wrap>
        )
    }
}