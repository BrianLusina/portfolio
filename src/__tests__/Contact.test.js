import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Contact from '../app/components/contact/Contact';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<Contact {...props}/>);
}

describe("Contact should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain 1 section element as root", () => {
        expect(wrapper.find("section").length).toBe(1);
        expect(wrapper.find("section").props().id).toBe("contact-section");
    });

    it("contain 1 p tag with text ` Feel free to reach out for projects you may want me to work on.` and id contact-tag", () => {
        expect(wrapper.find("p").length).toBe(1);
        expect(wrapper.find("p").props().id).toBe("contact-tag");
        expect(wrapper.find("p").text()).toBe("Feel free to reach out for projects you may want me to work on.");
    });

    it("contain 2 i tags with class fa", () => {
        expect(wrapper.find("i").length).toBe(2);
        wrapper.find("i").map((item, index) => {
            expect(item.hasClass("fa")).toBe(true);
        });
    });

});