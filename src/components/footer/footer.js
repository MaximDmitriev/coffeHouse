import React from 'react';
import styled from "styled-components";

import NavList from "../navList/navList";

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

const Footer = () => {

  return(
    <FooterWrap>
      <NavList dark={true}/>
      <img className="beanslogo" src={ process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
    </FooterWrap>
  )
}

export default Footer;