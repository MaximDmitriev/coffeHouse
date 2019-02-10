import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styled from "styled-components";

import MainPage from "../pages/mainPage/mainPage";
import GoodsPage from "../pages/goodsPage/goodsPage";
import CoffeePage from "../pages/coffeePage/coffeePage";
import ContactsPage from "../pages/contactsPage/contactsPage";
import ItemPage from "../pages/itemPage/itemPage";
import getData from "../../services/getData";

const AppWrap = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Merienda';
	outline: none;
	overflow-x: hidden;
  a{
    color: inherit;
    text-decoration: none;
  }
  .title{
    font-size: 24px;
    text-align: center;
  }
  .title-big{
    color: #ffffff;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 0;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .line{
    width: 240px;
    height: 1px;
    background-color: #000000;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`

class App extends Component {

  data = new getData();

  state = {
      items: null
  }

  componentWillMount() {

      this.data.getCoffee().then((res) => {
          this.setState({items: res})
      });
  }

  render() {

    return (
      <Router>
        <AppWrap>
          <Route path="/" exact component={MainPage} />
          <Route path="/goods/" exact component={GoodsPage} />
          <Route path="/coffee/" exact component={CoffeePage} />
          <Route path="/contacts/" exact component={ContactsPage} />
          <Route path="/items/" component={ItemPage} />
        </AppWrap>
      </Router>

    );
  }
}

export default App;