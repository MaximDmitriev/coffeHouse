import React from 'react';
import styled from "styled-components";

const Item = styled.div`
    width: 220px;
    min-height: 240px;
    margin: 60px 40px 0 40px;
    padding: 22px 24px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    transition: 0.3s all;
    :hover{
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25)
    }
    img{
        display: block;
        margin: 0 auto;
        width: 151px;
        height: 130px; 
        object-fit: cover;
    }
    .item-title, .item-price, .item-country{
        font-size: 14px;
        margin-top: 10px;
        text-align: right;
    }
`

const ShopItem = () => {


    return(
        <Item>
            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
            <div className="item-title">
                Solimo Coffee Beans 2kg
            </div>
            <div className="item-country">Brazil</div>
            <div className="item-price">10.73$</div>
        </Item>
    )

}

export default ShopItem;