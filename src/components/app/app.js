import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from "styled-components";

import MainPage from "../pages/mainPage/mainPage";
import GoodsPage from "../pages/goodsPage/goodsPage";
import CoffeePage from "../pages/coffeePage/coffeePage";
import ContactsPage from "../pages/contactsPage/contactsPage";
import ItemPage from "../pages/itemPage/itemPage";
import Page404 from "../pages/page404/page404";

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
  button{
    :active, :focus{
      outline: none;
    }
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

  state = {
    error: false,
    components: ["MainPage", "GoodsPage", "CoffeePage", "ContactsPage", "ItemPage"]
  }

  componentDidCatch(errorString, errorInfo) {

    this.state.components.forEach((item) => {

      if(errorInfo.componentStack.includes(item)) {

        this.setState({
          error: item
        })
      }
    });
  }

  render() {

    const name = this.state.error;

    return (
      <Router>
        <AppWrap>
          <Switch>
            <Route path="/" exact component={name === "MainPage" ? Page404 : MainPage} />
            <Route path="/goods/" exact component={name === "GoodsPage" ? Page404 : GoodsPage} />
            <Route path="/coffee/" exact component={name === "CoffeePage" ? Page404 : CoffeePage} />
            <Route path="/contacts/" exact component={name === "ContactsPage" ? Page404 : ContactsPage} />
            <Route path="/items/" component={name === "ItemPage" ? Page404 : ItemPage} />
            <Route component={Page404} />
          </Switch>
        </AppWrap>
      </Router>
    );
  }
}

export default App;