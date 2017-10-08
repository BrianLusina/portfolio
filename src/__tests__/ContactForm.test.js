import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ContactForm from '../app/components/contact/ContactForm';

configure({adapter: new Adapter()});

function setup() {
    const props = {
    };

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
    });


});