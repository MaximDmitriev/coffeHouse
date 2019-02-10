import React, { Component } from 'react';
import styled from "styled-components";

import ShopItem from "../shopItem/shopItem";
import getData from "../../services/getData";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default class ShopList extends Component {

    data = new getData();

    state = {
        items: null
    }

    componentWillMount() {

        this.data.getCoffee().then((res) => {
            this.setState({items: res})
        });
    }

    filterItems = (array, filter) => {
        
        if(filter) {
            const newArray = array.filter(item => item.country === filter);
            return newArray;

        } else {
            return array;
        }
    }

    searchItems = (array, musk) => {
        const newArray = array.filter((item) => {
            return item.name.toLowerCase().indexOf(musk) > -1
        });
        return newArray;
    }

    render() {

        const items = this.state.items;
        const {filter, musk} = this.props;

        const itemsFiltered = musk ? this.searchItems(items, musk) : this.filterItems(items, filter);
      
        const content = items ? itemsFiltered.map((item) => {

            return (
                <ShopItem 
                    name={item.name}
                    url={item.url}
                    price={item.price}
                    country={item.country}
                    key={item.key} />
                )

            }) : null;

        return(
            <Wrap>
               {content}
            </Wrap>
        )
    }
}
