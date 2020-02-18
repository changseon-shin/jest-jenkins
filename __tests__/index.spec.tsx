import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'

jest.mock('css');
describe('Pages', () => {
    beforeEach(() => {
        require('css');
    });
    describe('Index', () => {
        it('should render without throwing an error', function () {
            const wrap = mount(<IndexPage/>);
            expect(wrap.find('div').text()).toBe('Hello World');
        })
    })
});