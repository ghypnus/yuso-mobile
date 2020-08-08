import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../index';

describe('Switch', () => {
  it('should call onClick callback correctly', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<Switch value onChange={onChangeMock} />);
    wrapper.find('.yuso-switch').simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith(false);
  });
});
