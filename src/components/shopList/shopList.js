import React, { Component } from 'react';
import styled from "styled-components";

import ShopItem from "../shopItem/shopItem";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default class ShopList extends Component {

    render() {
        return(
            <Wrap>
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </Wrap>
        )
    }
}
