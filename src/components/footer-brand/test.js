import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FooterBrand from './index.js';

describe('FooterBrand', () => {

  describe('component', () => {
    const wrapper = mount(<FooterBrand/>);

    const content = <div className="o-footer__brand">
      <div className="o-footer__container">
        <div className="o-footer__brand-logo"></div>
      </div>
    </div>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).to.equal(true);
    });
  });
});
