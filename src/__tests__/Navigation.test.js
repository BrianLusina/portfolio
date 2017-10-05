import expect from 'expect';
import React from 'react';
import { render } from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Navigation from '../app/components/Navigation';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<Navigation {...props}/>);
}

describe("Navigation should", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper />, document.createElement("div"));
    });

    it("contain nav as root element with class cd-3d-nav-container", () => {
        expect(wrapper.find("nav").length).toBe(1);
        expect(wrapper.find("nav").hasClass("cd-3d-nav-container")).toBe(true);
    });

    it("contain one span element with class cd-marker", () => {
        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("span").hasClass("cd-marker")).toBe(true);
    });

    it("contains 1 ul tag with class cd-3d-nav", () =>{
        expect(wrapper.find("ul").length).toEqual(1);
        expect(wrapper.find("ul").hasClass("cd-3d-nav")).toEqual(true);
    });

    it("contains 4 li tags", () =>{
        expect(wrapper.find("li").length).toEqual(4);
    });

    it("contains 1st li tag with class cd-selected", () =>{
        expect(wrapper.find("li").at(0).hasClass("cd-selected")).toEqual(true);
    });
});