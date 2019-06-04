import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { RoomsPage } from '../index';
import toJson, { mountToJson } from 'enzyme-to-json';

describe('rooms page container test', () => {
    it('should render given room', () => { 
        const props = {
            rooms: [],
            addRoom:jest.fn(),
            addLike: jest.fn(),
            deleteRoom: jest.fn()
        }
        const result = shallow(<RoomsPage {...props} />);
        expect(toJson(result)).toMatchSnapshot();
        // expect(result.find("Button").exists()).toEqual(true);
        const result2 = mount(<RoomsPage {...props} />)
        expect(result2.find("Button").length).toEqual(1);
    }
    )
})