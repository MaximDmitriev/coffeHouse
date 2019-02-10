import React from 'react';
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const Wrap = styled.div`
    .title{
        margin-top: 10px;
    }
    .main_img{
        margin: 0 auto;
        display: block;
    }
    .main_text{
        margin-top: 25px;
        font-size: 14px;
        text-align: center;
    }
`

const InfoBlock = ({imgUrl, title, body}) => {
    
    return (
        <Wrap>
            <Row>
                <Col lg={{size: 4, offset: 2}}>
                    <img className="main_img" src={imgUrl} alt="girl"/>
                </Col> 
                <Col lg={{size: 4}}>
                    <div className="title">{title}</div>
                    <img className="beanslogo" src={process.env.PUBLIC_URL +"/logo/Beans_logo_dark.svg"} alt="Beans logo"/>
                    <div className="main_text">
                        {body}
                    </div>
                </Col>
            </Row>
            <div className="line"></div>
        </Wrap>
    )
}

export default InfoBlock;


