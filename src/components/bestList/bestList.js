import React, { Component } from 'react';
import styled from "styled-components";

import BestItem from "../bestItem/bestItem";
import getData from "../../services/getData";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default class BestList extends Component {

    state = {
        items: null
    }

    data = new getData();

    componentWillMount(){

        this.data.getBest().then((res) => {
            this.setState({items: res})
        });
    }

    render() {

        const items = this.state.items;
        
        const content = items ? items.map((item) => {

                return (
                    <BestItem 
                        name={item.name}
                        url={item.url}
                        price={item.price}
                        key={item.key} />
                )

            }) : null;
       

        return(
            <Wrap>
                {items == null ? null : content}
            </Wrap>
        )
    }
}