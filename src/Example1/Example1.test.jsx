import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Example1 from './Example1';

describe('Example1', () => {
    let comp;

    beforeEach(() => {
        comp = shallow(
            <Example1
                value1={10}
                value2={20}
            >
                dummy
            </Example1>
        );
    });

    it('should render proper props and children is not passed', () => {
        expect(comp.find('li')).toHaveLength(7);
        expect(comp.find('li').at(6).text()).toEqual('dummy');
    });

    it('should match snapshot', () => {
        expect(toJson(comp)).toMatchSnapshot();
    });

    it('should increase counter on click', () => {
        comp.find('section').simulate('click');
        comp.find('section').simulate('click');
        comp.find('section').simulate('click');

        expect(comp.find('li').at(0).text()).toEqual('Counter: 3');
    });
});
