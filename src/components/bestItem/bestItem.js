import React from 'react';
import styled from "styled-components";

const Wrap = styled.div`
    width: 230px;
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

const BestItem = ({name, url, price}) => {
    
    return(
        <Wrap>
            <img src={url} alt="coffee" />
            <div className="best__item-title">
                {name}
            </div>
            <div className="best__item-price">{price}</div>
        </Wrap>
    )
}

export default BestItem;