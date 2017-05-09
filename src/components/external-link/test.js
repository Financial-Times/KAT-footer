import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import ExternalLink from './index.js';

describe('ExternalLink', () => {
  const testData = {
    label: 'test test',
    href: 'test test'
  };

  describe('component', () => {
    const wrapper = mount(<ExternalLink label={testData.label} href={testData.href}/>);

    const content = <h6 className="o-footer__external-link o-footer__matrix-title">
      <a className="o-footer__more-from-ft o-footer__matrix-title" href={testData.href}>{testData.label}</a>
    </h6>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).to.equal(true);
    });
  });
});
