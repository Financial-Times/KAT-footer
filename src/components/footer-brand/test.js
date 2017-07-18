/* eslint-env jest */

import React from 'react';
import { mount, shallow } from 'enzyme';
import FooterBrand from './index.js';

describe('FooterBrand', () => {

  describe('component', () => {
    const wrapper = mount(<FooterBrand />);

    const content = <div className='o-footer__brand'>
      <div className='o-footer__container'>
        <div className='o-footer__brand-logo'></div>
      </div>
    </div>;

    test('matches snapshot', () => {
      const wrapper = shallow(<FooterBrand />);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });
});
