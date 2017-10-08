import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import About from '../app/components/About';

configure({adapter: new Adapter()});

function setup() {
    const props = {
        //TODO: props
    };

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

    // TODO: adjust this test case based on your root tag    
    it("contain 1 div element", () => {

        expect(wrapper.find("section").length).toBe(1);
    });

    // TODO: other test cases
});