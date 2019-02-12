import React from 'react';
import styled from "styled-components";

import coffeeContact from "./coffeeContact.jpg";
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
  .title{
    margin-top: 60px;
  }
`

const Page404 = () => {

  return(
    <Wrap>
      <Header title={"Error"} url={coffeeContact}/>
      <div className="title">Page not found</div>
      <img className="beanslogo" src={process.env.PUBLIC_URL +"/logo/Beans_logo_dark.svg"} alt="Beans logo"/>
      <Footer/>
    </Wrap>
  )
}

export default Page404;