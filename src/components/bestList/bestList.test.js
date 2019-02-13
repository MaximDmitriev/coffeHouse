import React from 'react';
import BestList from "./bestList";
import {shallow} from "enzyme";
import getData from "../../services/getData";

describe("Testing <BestList />", () => {
  const items = shallow(<BestList />);
  const data = new getData();

  describe("Testing Shapshots & state",() => {

    it("BestList have rendered", () => {
        expect(items).toMatchSnapshot();
    });

    it("BestList state 'items' is empty", () => {
      expect(items.state().items).toBeNil();
    });

    it("BestList state 'loading' is true", () => {
      expect(items.state().loading).toBeTrue();
    });

    it("BestList state 'error' is empty", () => {
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