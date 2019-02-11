import React, { Component } from 'react';
import styled from "styled-components";
import { Spinner } from "reactstrap";

import ShopItem from "../shopItem/shopItem";
import getData from "../../services/getData";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default class BestList extends Component {

    state = {
        items: null,
        loading: false        
    }

    data = new getData();

    componentWillMount(){

        this.setState({loading: true})

        this.data.getBest().then((res) => {
            this.setState({
                items: res,
                loading: false
            })
        });
    }

    render() {

        const items = this.state.items;
        
        const content = this.state.loading ? <Spinner style={{ width: '3rem', height: '3rem', margin: '70px auto' }} /> : 
              items ? items.map((item) => {

                return (
                    <ShopItem 
                        name={item.name}
                        url={item.url}
                        price={item.price}
                        key={item.key}
                        link />
                )

            }) : null;

        return(
            <Wrap>
                {content}
            </Wrap>
        )
    }
    // {items ? content : null}
}

