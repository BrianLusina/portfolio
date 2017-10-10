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
    let name = "Some Guy";
    let message = "Hello!";
    let email = "someguy@example.com";

    beforeEach(() => {
        wrapper = setup();
        wrapper.setState({
            email, name, message
        });
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

    it("contain initial email, name and message state objects ", () => {
        wrapper.setState({
            email:"",
            name: "",
            message: ""
        });
        expect(wrapper.state().email).toEqual("");
        expect(wrapper.state().name).toEqual("");
        expect(wrapper.state().message).toEqual("");
    });

    it("update state and update value of input fields from state ", () => {
        expect(wrapper.find("input").at(0).props().value).toEqual(name);
        expect(wrapper.find("input").at(1).props().value).toEqual(email);
        expect(wrapper.find("textarea").props().value).toEqual(message);
    });

});

/**
 * Tests for contact form state
 * */
describe("Contact form component state ", () => {
    let contactFormWrapper;

    beforeEach(() => {
        contactFormWrapper = mount(<ContactForm />)
    });

    it("should be updated when name input text values are changed", () => {
        let newName = "Brian";
        const event = {target: {name: "name", value: newName}};

        contactFormWrapper.find("input").at(0).simulate("change", event);

        expect(contactFormWrapper.state().name).toEqual(newName);

        // submit another event
        const newEvent = {target: {name: "name", value: `${newName} Lusina`}};
        contactFormWrapper.find("input").at(0).simulate("change", newEvent);
        expect(contactFormWrapper.state().name).toEqual(`${newName} Lusina`);
    });

    it("should be updated when email input text values are changed", () => {
        let newEmail = "brian@example.com";
        const event = {target: {name: "email", value: newEmail}};

        contactFormWrapper.find("input").at(1).simulate("change", event);

        expect(contactFormWrapper.state().email).toEqual(newEmail);

        // submit another event
        let newEmail2 = "lusina@example.com";
        const newEvent = {target: {name: "email", value: newEmail2}};
        contactFormWrapper.find("input").at(1).simulate("change", newEvent);
        expect(contactFormWrapper.state().email).toEqual(newEmail2);
    });

    it("should be updated when message input text values are changed", () => {
        let newMessage = "new message";
        const event = {target: {name: "message", value: newMessage}};

        contactFormWrapper.find("textarea").simulate("change", event);

        expect(contactFormWrapper.state().message).toEqual(newMessage);

        // new event
        let newMessage2 = "new message";
        const newEvent = {target: {name: "message", value: newMessage2}};

        contactFormWrapper.find("textarea").simulate("change", newEvent);

        expect(contactFormWrapper.state().message).toEqual(newMessage2);
    });

});