import React, { Component } from 'react';
import styled from "styled-components";

import coffeeContact from "./coffeeContact.jpg";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import ContactForm from "../../contactForm/contactForm";
import vectorIMG from "./Vector.svg";
import back from "./back-arrow.svg";

const Wrap = styled.div`
    h1{
        margin-top: 110px;
    }
    .beanslogo{
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
    .title{
        margin-top: 60px;
    }
    span{
        color: red;
        }
    .title_thks{
        margin-top: 110px;
        font-size: 36px;
        text-align: center;

    }
    .img_wrap{
        width: 100px;
        height: 100px;
        margin: 20px auto 110px auto;
    }
    button{
        display: block;
        width: 120px;
        height: 30px;
        margin: 0 auto;
        padding: 6px 30px;
        font-size: 12px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.49);
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }
`
const Flex = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default class ContactsPage extends Component {

    state = {
        show: true
    }

    onToggle = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        const content = this.state.show ? <ContactForm onToggle={this.onToggle}/> : <ViewAnswer onToggle={this.onToggle}/>

        return(
            <Wrap>
                <Header title={"Contact us"} url={coffeeContact}/>
                <div className="title">Tell us about your tastes</div>
                <img className="beanslogo" src={process.env.PUBLIC_URL +"/logo/Beans_logo_dark.svg"} alt="Beans logo"/>
                <Flex>
                    {content}
                </Flex>
                <Footer/>
            </Wrap>
        )
    }
}

const ViewAnswer = ({onToggle}) => {

    return(
        <>
            <div className="title_thks">
                Thank you so much <br />
                We contact you as soon as posible
            </div>
            <div className="img_wrap">
                <img src={vectorIMG} alt="thanks"/>
            </div>
            <button
                style={{padding: 0}}
                onClick={onToggle}>
                Another ? <img src={back} alt="back"/>
            </button>
        </>
    )
}