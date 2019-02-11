import React, { Component } from 'react';
import styled from "styled-components";
import { Spinner } from "reactstrap";

import coffeeContact from "./coffeeContact.jpg";
// import getData from "../../../services/getData";
import Footer from "../../footer/footer";
import Header from "../../header/header";
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
const ContactForm = styled.div`
    width: 410px;
    height: 430px;
    margin: 40px auto;
    .subtitle{
        font-size: 18px;
        text-align: center;
        margin-bottom: 30px;
    }
    textarea{
        width: 350px;
        height: 120px;
        margin-bottom: 40px;
        padding: 15px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.49);
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        resize: none;
        ::placeholder{
            text-align: left;
            font-size: 14px;
        }
    }
`
const Search = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    label{
        font-size: 18px;
    }
    input{
        width: 220px;
        height: 30px ;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(0, 0, 0, 0.49);
        border-radius: 4px;
        font-size: 12px;
        padding: 0 15px;
        ::placeholder{
            text-align: left;
        }
    } 
`
export default class ContactsPage extends Component {

    state = {
        show: true
    }

    onToggle = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        const content = this.state.show ? <ViewForm onToggle={this.onToggle} /> : <ViewAnswer onToggle={this.onToggle}/>

        return(
            <Wrap>
                <Header title={"Contact us"} url={coffeeContact}/>
                <div className="title">Tell us about your tastes</div>
                <img className="beanslogo" src={process.env.PUBLIC_URL +"/logo/Beans_logo_dark.svg"} alt="Beans logo"/>
                
                {content}
                <Footer/>
            </Wrap>
        )
    }
}

const ViewForm = ({onToggle}) => {
    
    return(
        <ContactForm>
            <Search>
                <label htmlFor="name">Name<span>*</span></label>
                <input
                    // onChange={this.onChange} 
                    id="name" 
                    type="text"/>
            </Search>
            <Search>
                <label htmlFor="email">E-mail<span>*</span></label>
                <input
                    // onChange={this.onChange} 
                    id="email" 
                    type="email"/>
            </Search>
            <Search>
                <label htmlFor="phone">Phone</label>
                <input
                    // onChange={this.onChange} 
                    id="phone" 
                    type="text" 
                    placeholder="+7(___) ___-____" />
            </Search>
            <div className="subtitle">Your message<span>*</span></div>
            <textarea 
                name="body"
                placeholder="Tell us..."
            />
            <button onClick={onToggle}>Send us</button>
        </ContactForm>
    )
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