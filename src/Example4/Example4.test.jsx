import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';

import Example4 from './Example4';

jest.mock('./buildUrl', () =>
    cityName => cityName
);

const fakeData1 = {
    name: 'cityName1',
    weather: [{ description: 'clear sky'}],
    main: { temp_min: 10, temp_max: 20 },
};

const fakeData2 = {
    name: 'cityName2',
    weather: [{ description: 'clear sky'}],
    main: { temp_min: 10, temp_max: 20 },
};

describe('Example1', () => {
    let fakeData
    let comp;
    let response1;
    let response2;

    beforeEach(() => {
        response1 = new Promise(resolve => resolve({ data: fakeData1 }));
        response2 = new Promise(resolve => resolve({ data: fakeData2 }));

        axios.get = jest.fn()
                .mockReturnValueOnce(response1)
                .mockReturnValueOnce(response2);
    });

    it('should render loading before data is loaded and fetch data', () => {
        const comp = mount(<Example4 />);
        expect(comp.find('.content').text()).toEqual('Loading...');
        expect(toJson(comp)).toMatchSnapshot();
    });

    it('should render Weather widget after data is loaded', () => {
        const comp = mount(<Example4 />);
        return response1.then(() => {
            expect(axios.get.mock.calls.length).toBe(1);
            expect(axios.get.mock.calls[0]).toEqual(['Kiev']);

            expect(comp.find('Weather').exists()).toEqual(true);
            expect(toJson(comp)).toMatchSnapshot();
        })
    });

    it('should rerender Weather widget after new data is loaded', () => {
        comp = mount(<Example4 />);

        const input = comp.find('input');
        input.get(0).value = 'dummy';

        input.simulate('keyPress', { key: 'Enter' })
        expect(comp.state()).toEqual({
            query: 'dummy',
            data: null
        });

        return response2.then(() => {
            expect(axios.get.mock.calls.length).toBe(2);
            expect(axios.get.mock.calls[1]).toEqual(['dummy']);
            expect(comp.find('Weather').props().name).toEqual('cityName2');
            expect(toJson(comp)).toMatchSnapshot();
        });
    });
});
