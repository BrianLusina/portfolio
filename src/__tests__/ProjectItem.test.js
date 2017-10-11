import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ProjectItem from '../app/components/projects/ProjectItem';

configure({adapter: new Adapter()});

function setup() {
    const props = {
        projectId:"1",
        projectTitle:"Zenith",
        projectShortDesc:"Sample design site",
        projectPageLink:"http://www.zenith.netlify.com"
    };

    return shallow(<ProjectItem {...props}/>);
}

describe("ProjectItem should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain 1 li element with class name cd-item", () => {
        expect(wrapper.find("li").length).toEqual(1);
        expect(wrapper.find("li").hasClass("cd-item")).toBe(true);
    });

});