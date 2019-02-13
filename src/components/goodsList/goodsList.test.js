import React from 'react';
import GoodsList from "./goodsList";
import {shallow} from "enzyme";
import getData from "../../services/getData";

describe("Testing <GoodsList />", () => {
  const items = shallow(<GoodsList />);
  const data = new getData();

  describe("Testing Shapshots & state",() => {

    it("GoodsList have rendered", () => {
        expect(items).toMatchSnapshot();
    });

    it("GoodsList state 'items' is empty", () => {
      expect(items.state().items).toBeNil();
    });

    it("GoodsList state 'loading' is true", () => {
      expect(items.state().loading).toBeTrue();
    });

    it("GoodsList state 'error' is empty", () => {
      expect(items.state().error).toBeNil();
    });
  });

  describe("Handlers tests", () => {
    it("Testing componentWillMount", () => {

      items.instance().data.getBest()
      .then(() => expect(items.state().loading).toBeFalse())
      .then(res => expect(items.state().items).toBe(res))
      .catch(res =>expect(items.state().error).toBe(res));
    });
  });
});