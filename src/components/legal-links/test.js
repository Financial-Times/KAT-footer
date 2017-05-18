import React from 'react';
import { mount, shallow } from 'enzyme';
import LegalLinks from './index.js';

describe('LegalLinks', () => {
  const testData = {
    links: [
      {
        href: "test",
        label: "test"
      },
      {
        href: "test",
        label: "test"
      }
    ]
  };

  const testNull = {
    links: 0
  };

  describe('component', () => {
    const wrapper = mount(<LegalLinks linksData={testData.links} />);

    const content =
    <div>
      <ul className="o-footer__legal-links">
        <li key={0}>
          <a href={testData.links[0].href}>
            {testData.links[0].label}
          </a>
        </li>
        <li key={1}>
          <a href={testData.links[1].href}>
            {testData.links[1].label}
          </a>
        </li>
      </ul>
    </div>;

    test('matches snapshot', () => {
      const wrapper = shallow(<LegalLinks linksData={testData.links} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });

  describe('return null if there is no links', () => {
    const wrapper = mount(<LegalLinks linksData={testNull.links} />);

    test('has the right content', () => {
      expect(wrapper.component.state.context).toEqual(null);
    });
  });
});
