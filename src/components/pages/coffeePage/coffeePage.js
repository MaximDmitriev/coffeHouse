import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import coffeeBG from "./Coffee_bg.jpg";
import coffeeGirl from "./coffee_girl.jpg";
import ShopList from "../../shopList/shopList";
import InfoBlock from "../../infoBlock/infoBlock";
import Footer from "../../footer/footer";
import Header from "../../header/header";

const Wrap = styled.div`
  h1{
    margin-top: 110px;
  }
  .beanslogo{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }
`
const Shop = styled.div`
  padding: 70px 0 40px 0;
`
const Search = styled.form`
  label{
    margin-right: 20px;
  }
  input{
    width: 180px;
    height: 30px ;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 0 15px;
    ::placeholder{
      text-align: center;
    }
  }
`
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .shop__filter-label{
    margin-right: 35px
  }
  .shop__filter-btn{
    width: 75px ;
    height: 30px;
    margin: 0 3px;
    background-color: #fff;
    border: none;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    outline: none;
    cursor: pointer;
    :first-child{
      border-radius: 4px 0px 0px 4px
    }
    :last-child{
      border-radius: 0px 4px 4px 0px
    }
    :focus{
      outline: none
    }
  }
`

const Body = () => {
  return (
    <>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
      <br/><br/>
      Afraid at highly months do things on at. Situation recommend objection do intention<br/>
      so questions. <br/>
      As greatly removed calling pleased improve an. Last ask him cold feel<br/>
      met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
      is song that held help face.
    </>
  )
}

export default class CoffeePage extends Component {

  state = {
    country: null,
    mask: null
  }

  url = coffeeGirl;

  title = "About our beans";

  onFilter = (country) =>{
    this.setState({country: country});
  }

  onChange = (event) => {
    const mask = event.target.value.toLowerCase();
    this.setState({mask: mask});
  }

  render() {

    return(
      <Wrap>
        <Header title={"Our Coffee"} url={coffeeBG}/>
        <Shop>
          <Container>
            <InfoBlock body={<Body/>} title={this.title} imgUrl={this.url}/>
            <Row>
              <Col lg={{size: 4, offset: 2}}>
                <Search action="#">
                  <label htmlFor="filter">Looking for</label>
                  <input
                    onChange={this.onChange}
                    id="filter"
                    type="text"
                    placeholder="start typing here..." />
                </Search>
              </Col>
              <Col lg={{size: 4}}>
                <Filter>
                  <div className="shop__filter-label">
                    Or filter
                  </div>
                  <div className="shop__filter-group">
                    <button
                      onClick={() => this.onFilter("Brazil")}
                      className="shop__filter-btn"
                          >Brazil</button>
                    <button
                      onClick={() => this.onFilter("Kenya")}
                      className="shop__filter-btn"
                          >Kenya</button>
                    <button
                      onClick={() => this.onFilter("Columbia")}
                      className="shop__filter-btn"
                          >Columbia</button>
                  </div>
                </Filter>
              </Col>
            </Row>
            <Row>
              <Col lg={{size: 10, offset: 1}}>
                <ShopList
                  filter={this.state.country}
                  mask={this.state.mask}
                  />
              </Col>
            </Row>
          </Container>
        </Shop>
        <Footer />
      </Wrap>
    )
  }
}