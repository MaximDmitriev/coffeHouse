import React, { Component } from 'react';
import styled from "styled-components";

import BestItem from "../bestItem/bestItem";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default class BestList extends Component {

    state = {
        items: null
    }

    render() {

        return(
            <Wrap>
                <BestItem />
            </Wrap>
        )
    }
}