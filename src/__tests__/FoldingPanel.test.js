import expect from 'expect';
import React from 'react';
import { render } from "react-dom"
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import FoldingPanel from '../app/components/foldingpanel/FoldingPanel';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<FoldingPanel {...props}/>);
}

describe("FoldingPanel should", () => {

    it("render without crashing", () => {
        const wrapper = setup();
        render(<wrapper/>, document.createElement("div"));
    });

    it("have 4 div tags", () => {
        const wrapper = setup();
        expect(wrapper.find("div").length).toBe(4);
    });

    it("have one anchor tag", () => {
        const wrapper = setup();
        expect(wrapper.find("a").length).toBe(1);
    });

    it("have one anchor tag with className cd-close", () => {
        const wrapper = setup();
        expect(wrapper.find("a").hasClass("cd-close")).toBe(true);
    });

    it("have div tag className fold-left", () => {
        const wrapper = setup();
        expect(wrapper.find("div").at(1).hasClass("fold-left")).toBe(true);
    });

    it("have a div tag with className fold-right", () => {
        const wrapper = setup();
        expect(wrapper.find("div").at(2).hasClass("fold-right")).toBe(true);
    });

    it("have a div tag with className cd-fold-content", () => {
        const wrapper = setup();
        expect(wrapper.find("div").at(3).hasClass("cd-fold-content")).toBe(true);
    });

});