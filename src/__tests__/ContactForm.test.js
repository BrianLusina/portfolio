import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ContactForm from '../app/components/contact/ContactForm';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<ContactForm {...props}/>);
}

describe("ContactForm should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain 1 form element", () => {
        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("form").props().id).toBe("contact-form");
    });

    it("contain 1 textarea element", () => {
        let classes = ["input__field", "input__field--kaede"];
        expect(wrapper.find("textarea").length).toBe(1);
        expect(wrapper.find("textarea").props().id).toBe("contact-message");
        classes.map((item, index) => {
            expect(wrapper.find("textarea").hasClass(item)).toBe(true);
        });
    });

    it("contain 1 button element", () => {
        let classes = ["large", "button", "animated"];
        let buttonElement = wrapper.find("button");
        expect(buttonElement.length).toBe(1);
        expect(buttonElement.props().id).toEqual("email-me-btn");
        expect(buttonElement.props().type).toBe("submit");
        expect(buttonElement.props()["data-text"]).toEqual("EMAIL ME");
        classes.map((item, index) => {
            expect(buttonElement.hasClass(item)).toBe(true);
        });
    });


});