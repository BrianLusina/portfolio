import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from '../app/components/Header';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<Header {...props}/>);
}

describe("Header should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain header element as root", () => {
        expect(wrapper.find("header").length).toBe(1);
    });

    it("contain 2 anchor tags", () => {
        expect(wrapper.find("a").length).toBe(2);
    });

    it("contain 2 span tags", () => {
        expect(wrapper.find("span").length).toBe(2);
    });

    it("contain 1st anchor tag with classes cd-logo and rolling links", () => {
        expect(wrapper.find("a").at(0).hasClass("cd-logo")).toBe(true);
        expect(wrapper.find("a").at(0).hasClass("rolling-links")).toBe(true);
    });

    it("contain span element with text The Lusina and second span with no text", () => {
        expect(wrapper.find("span").at(0).text()).toEqual("The Lusina");
        expect(wrapper.find("span").at(1).text()).toEqual("");
    });

});