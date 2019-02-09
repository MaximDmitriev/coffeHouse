import React, { Component } from 'react';
import styled from "styled-components";

const Wrap = styled.div`
    width: 220px;
    min-height: 240px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 22px 24px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    img{
        display: block; 
        margin: 0 auto;
        width: 151px;
        height: 130px; 
        object-fit: cover;
    }
    .best__item-price, .best__item-title{
        font-size: 14px;
        margin-top: 10px;
        text-align: right;
    }
`

const BestItem = () => {
    
    return(
        <Wrap>
            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
            <div className="best__item-title">
                Solimo Coffee Beans 2kg
            </div>
            <div className="best__item-price">10.73$</div>
        </Wrap>
    )
}

export default BestItem;