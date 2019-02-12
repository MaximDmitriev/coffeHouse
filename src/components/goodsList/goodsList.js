import React, { Component } from 'react';
import styled from "styled-components";
import { Spinner } from "reactstrap";

import ShopItem from "../shopItem/shopItem";
import getData from "../../services/getData";
import ErrorComponent from "../ErrorComponent/errorComponent";

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default class GoogsList extends Component {

  data = new getData();

  state = {
    items: null,
    loading: false,
    error: null
  }

  componentWillMount() {

    this.setState({loading: true})

    this.data.getGoods()
      .then((res) => {
        this.setState({
          items: res,
          loading: false
        })
      })
      .catch((res) => {
        this.setState({
          error: res,
          loading: false
        });
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
                          link={false} />
                        )

                    }) :
                    this.state.error ? <ErrorComponent /> :  null;

    return(
      <Wrap>
        {content}
      </Wrap>
    )
  }
}
