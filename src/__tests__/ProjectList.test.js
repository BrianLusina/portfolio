import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ProjectList from '../app/components/projects/ProjectList';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<ProjectList {...props}/>);
}

describe("ProjectList should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain 1 ul element with class cd-gallery", () => {
        expect(wrapper.find("ul").length).toEqual(1);
        expect(wrapper.find("ul").hasClass("cd-gallery")).toEqual(true);
    });

});