import React, { Component } from 'react';
import styled from "styled-components";
import { Spinner, Tooltip } from "reactstrap";

import ErrorComponent from "../ErrorComponent/errorComponent";
import {mask} from "../../services/mask";
import getData from "../../services/getData";

const ContactFormWrap = styled.div`
  width: 410px;
  height: 430px;
  margin: 40px auto;
  span{
    color: red;
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

export default class ContactForm extends Component {

  getData = new getData();

  state = {
    loading: false,
    error: null,
    tooltipName: false,
    tooltipEmail: false,
    tooltipMsg: false,
    label: "Enter name"
  }

  toggleName = () => {
    this.setState({
      tooltipName: !this.state.tooltipName
    });
  }

  toggleEmail = () => {
    this.setState({
        tooltipEmail: !this.state.tooltipEmail
    });
  }

  toggleMsg = () => {
    this.setState({
      tooltipMsg: !this.state.tooltipMsg
    });
  }

  sendForm = () => {

    const {name, email, phone, msg} = this.refs;
    const re = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if(name.value.length < 2 || name.value.length > 20) {

      let label;

      switch (true) {

        case (this.refs.name.value.length === 0) :
          label = "Enter name";
          break;
        case (this.refs.name.value.length < 2) :
          label = "Name must be greater than 2 symbols";
          break;
        case (this.refs.name.value.length > 20) :
          label = "Max length 20 symbols";
          break;
        default:
          label = "Enter name";
      }
      this.setState({
        tooltipName: true,
        label: label
      });

      name.focus();
      return false;
    }

    if(!re.test(email.value)) {

      this.setState({tooltipEmail: true});
      email.focus();
      return false;
    }

    if(msg.value === "") {

      this.setState({tooltipMsg: true});
      msg.focus();
      return false;
    }

    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      msg: msg.value
    }

    this.setState({
      loading: true
    })

    this.getData.upload(data)
    .then((res) => {

      if(res.ok) {
        this.props.onToggle();
      }
    })
    .catch((res) => {
      this.setState({
        loading: false,
        error: res.message
      })
    });
  }

  componentDidMount() {
    // this.foo.bar = 0;

    if(!this.state.loading) mask(this.refs.phone);
  }

  render() {

    if(this.state.error) {
      return(
        <ErrorComponent message={this.state.error} />
      )
    }

    if(this.state.loading) {

      return (
        <Spinner style={{ width: '3rem', height: '3rem', margin: '140px auto'}} />
      )
    } else {

        return(
          <ContactFormWrap>
            <Search>
              <label htmlFor="name">Name<span>*</span></label>
              <input
                ref="name"
                id="name"
                type="text"/>
              <Tooltip placement="right" isOpen={this.state.tooltipName} target="name" toggle={this.toggleName}>
                {this.state.label}
              </Tooltip>
            </Search>
            <Search>
              <label htmlFor="email">E-mail<span>*</span></label>
              <input
                ref="email"
                id="email"
                type="email"/>
              <Tooltip className="secondary" placement="right" isOpen={this.state.tooltipEmail} target="email" toggle={this.toggleEmail}>
                Enter e-mail
              </Tooltip>
            </Search>
            <Search>
              <label htmlFor="phone">Phone</label>
              <input
                ref="phone"
                id="phone"
                type="text"
                placeholder="+7(___) ___-____" />
            </Search>
            <div className="subtitle">Your message<span>*</span></div>
            <textarea
              ref="msg"
              name="msg"
              id="msg"
              placeholder="Tell us..."
            />
            <Tooltip placement="top" isOpen={this.state.tooltipMsg} target="msg" toggle={this.toggleMsg}>
              Enter message
            </Tooltip>
            <button onClick={this.sendForm}>Send us</button>
          </ContactFormWrap>
        )
    }
  }
}