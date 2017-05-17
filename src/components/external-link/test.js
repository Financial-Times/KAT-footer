import React from 'react';
import { mount, shallow } from 'enzyme';
import ExternalLink from './index.js';

describe('ExternalLink', () => {
  const testData = {
    label: 'test test',
    href: 'test test'
  };

  test('matches snapshot', () => {
    const wrapper = shallow(<ExternalLink label={testData.label} href={testData.href}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('component', () => {
    const wrapper = mount(<ExternalLink label={testData.label} href={testData.href}/>);

    const content = <h6 className="o-footer__external-link o-footer__matrix-title">
      <a className="o-footer__more-from-ft o-footer__matrix-title" href={testData.href}>{testData.label}</a>
    </h6>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });
});
