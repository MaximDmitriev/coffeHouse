import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  padding-left: 0;
  list-style-type: none;
`
const ListItem = styled.li`
  font-size: 12px;
  margin-right: 40px;
  font-weight: normal;
  color: ${props => props.dark ? "#000000" : "#ffffff"};

  a{
    color: ${props => props.dark ? "#000000" : "#ffffff"};
  }
`

export default class NavList extends Component {

  render() {

    return (
      <>
        <List style={this.props.dark ? {paddingLeft: "40px"} : null}>
          <ListItem>
            <Link to="/">
              <img
                src={this.props.dark ? process.env.PUBLIC_URL + "/logo/Logo_black.svg" : process.env.PUBLIC_URL + "/logo/Logo.svg"}
                alt="logo"
                style={!this.props.dark ? {transform: "translateY(3px)"} : null}
                />
            </Link>
          </ListItem>
          <ListItem dark={this.props.dark}>
            <Link to="/coffee/">Our coffee</Link>
          </ListItem>
          <ListItem dark={this.props.dark}>
            <Link to="/goods/">For your pleasure</Link>
          </ListItem>
          <ListItem dark={this.props.dark}>
            <Link to="/contacts/">Contact us</Link>
          </ListItem>
        </List>
      </>
    )
  }
}
