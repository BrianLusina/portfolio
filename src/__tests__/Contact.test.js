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
    });

});