import React from 'react';
import ShopList from "./shopList";
import {shallow} from "enzyme";
import getData from "../../services/getData";

describe("Testing <ShopList />", () => {
  const items = shallow(<ShopList mask={'Brazil'} filter={'Brazil'}/>);
  const data = new getData();

  describe("Testing Shapshots & state",() => {

    it("ShopList have rendered", () => {
        expect(items).toMatchSnapshot();
    });

    it("ShopList props 'mask' to be string", () => {
      expect(items.instance().props.mask).toEqual('Brazil');
    });

    it("ShopList props 'filter' to be string", () => {
      expect(items.instance().props.filter).toEqual('Brazil');
    });

    it("ShopList state 'items' is empty", () => {
      expect(items.state().items).toEqual([]);
    });

    it("ShopList state 'loading' is true", () => {
      expect(items.state().loading).toBeTrue();
    });

    it("ShopList state 'error' is empty", () => {
      expect(items.state().error).toBeNil();
    });
  });

  describe("Handlers tests", () => {
    it("Testing componentDidMount", () => {

      items.instance().data.getBest()
      .then(() => expect(items.state().loading).toBeFalse())
      .then(res => expect(items.state().items).toBe(res))
      .catch(res =>expect(items.state().error).toBe(res));
    });
  });
});