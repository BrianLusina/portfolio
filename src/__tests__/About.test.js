import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import About from '../app/components/About';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<About {...props}/>);
}

describe("About should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain 1 section element", () => {
        expect(wrapper.find("section").length).toBe(1);
    });

    it("contain 4 div element", () => {
        expect(wrapper.find("div").length).toBe(5);
    });

    it("contain h3 element with title `A little bit about me.`", () => {
        expect(wrapper.find("h3").length).toBe(1);
        expect(wrapper.find("h3").text()).toEqual("A little bit about me.");
    });

    it("contain 6 a elements", () => {
        expect(wrapper.find("a").length).toBe(7);
    });

    it("have first anchor tag to have link to portfolio", () => {
        expect(wrapper.find("a").at(0).props().href).toEqual("http://lusinaresume.netlify.com/");
        expect(wrapper.find("a").at(0).props().id).toEqual("resume-link");
    });

    it("contain second to last anchor tags with class social links and child i", () => {
        for(let i = 1 ;i < wrapper.find("a").length; i++){
            expect(wrapper.find("a").at(i).hasClass("social-links")).toBe(true);
            expect(wrapper.find("a").at(i).props().children).toBeDefined();
        }
    });

    it("contain h4 header call to action with id connect-about and text Feel free to connect ", () => {
        expect(wrapper.find("h4").length).toEqual(1);
        expect(wrapper.find("h4").props().id).toEqual("connect-about");
        expect(wrapper.find("h4").text()).toEqual("Feel free to connect.");
    });


});