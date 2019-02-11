import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col, Spinner } from "reactstrap";

import coffeeBG from "./Coffee_bg.jpg";
import getData from "../../../services/getData";
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

const View = ({url, country, description, price, onToggle}) => {

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
                <div onClick={onToggle} className="shop__point" style={{cursor: "pointer"}}>
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
        loading: false,
        items: null,
        descFull: null,
        descShort: null,
        show: false
    }

    componentWillMount() {

        this.setState({loading: true});

        const checkName = this.props.history.location.pathname.replace("/items/", "");

        this.data.getCoffee().then((res) => {

            const index = res.findIndex(item => item.urlId === checkName);
            const desc = res[index].description.length > 200 ? res[index].description.slice(0, 197) + "..." :
                                                               res[index].description;
            this.setState({
                loading: false,
                items: res[index],
                descFull: res[index].description,
                descShort: desc
            });
        })
    };

    onToggle = () => {
        this.setState({
            // show: !this.state.show
            show: true
        });
    }

    render() {

        const {items, descFull, descShort, show, loading} = this.state;

        const content = loading ? <Spinner style={{ width: '3rem', height: '3rem', margin: '70px auto' }} /> :
                        this.state.items ? <View
                                                onToggle={this.onToggle}
                                                url={items.url}
                                                price={items.price}
                                                description={show ? descFull : descShort}
                                                country={items.country}
                                            /> : null;

        return(
            <Wrap>
                <Header title={"Our Coffee"} url={coffeeBG}/>
                <Shop>
                    <Container>
                        <Row>
                            {content}
                        </Row>
                    </Container>
                </Shop>
                <Footer />
            </Wrap>
        )
    }
}