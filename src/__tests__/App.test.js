import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from '../app/App';

configure({adapter: new Adapter()});

function setup() {
    const props = {};

    return shallow(<App {...props}/>);
}

describe("App should", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it("render without crashing", () => {
        render(<wrapper/>, document.createElement("div"));
    });

    it("contain body element as root tag", () => {
        expect(wrapper.find("div").length).toBe(1);
    });
});