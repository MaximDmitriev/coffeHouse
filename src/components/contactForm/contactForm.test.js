import React from 'react';
import ContactForm from "./contactForm";
import Enzyme, {shallow} from "enzyme";
import getData from "../../services/getData";

describe("Testing <ContactForm />", () => {
  Enzyme.configure({ disableLifecycleMethods: true });
  const items = shallow(<ContactForm />);
  const data = {};

  describe("Testing ContactForm & state", () => {

    it("ContactForm have rendered", () => {
        expect(items).toMatchSnapshot();
    });

    it("ContactForm state 'loading' is false", () => {
       expect(items.state().loading).toBeFalse();
    });

    it("ContactForm state 'error' is empty", () => {
      expect(items.state().error).toBeNil();
    });
  });

  describe("Handlers tests", () => {
    it("Testing sendForm", () => {
      const get = new getData();
      items.instance(get.upload(data)
      .then(() => expect(items.state().loading).toBeFalse())
      .catch(res =>expect(items.state().error).toBe(res)))
    });
  });
});