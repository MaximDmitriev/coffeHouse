import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

// const NavListWrap = styled.div`
//     /* padding: 20px 0; */
// `

const List = styled.ul`
    display: flex;
    align-items: flex-end;
    padding-left: ${props => props.dark ? 40 : 0}px;
    margin-top: 30px;
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
    img{
        transform: translateY(3px);
    }
`

export default class NavList extends Component {

    render() {
       
        return (
            <>
                <List>
                    <ListItem>
                        <Link to="/">
                            <img src={this.props.dark? "logo/Logo_black.svg" : "logo/Logo.svg"} alt="logo"/>
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


// footer 
//     padding: 20px 0
// .footer
//     display: flex
//     align-items: flex-end
//     margin-top: 30px
//     list-style-type: none

//     &__item
//         font-size: 12px
//         margin-right: 40px
//         font-weight: normal
//         a 
//             color: #000 
//             &:visited
//                 text-decoration: none
//                 color: #000
//             &:hover
//                 text-decoration: none
//                 color: #000