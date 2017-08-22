import React from 'react';
import { mount, shallow } from 'enzyme';
import LegalLinks from './index.js';

describe('LegalLinks', () => {
  const testData = {
    links: [
      {
        href: "test1",
        "data-trackable": "test1",
        label: "test 1"
      },
      {
        href: "test2",
        label: "test 2"
      },
      {
        href: "test3",
        "data-trackable": "test3",
        label: "test 3"
      }
    ]
  };

  describe('component', () => {
    const wrapper = shallow(<LegalLinks linksData={testData.links} />);

    test('displays all the links given to it in the correct order', () => {
      const links = wrapper.find('a');

      expect(links.length).toEqual(3);
      expect(links.at(0).text()).toEqual('test 1');
      expect(links.at(1).text()).toEqual('test 2');
      expect(links.at(2).text()).toEqual('test 3');
    });

    test('outputs the data-trackable attribute if a value is provided', () => {
      const linksWithDataTrackable = wrapper.find('a[data-trackable]');

      expect(linksWithDataTrackable.length).toEqual(2);
      expect(linksWithDataTrackable.at(0).prop('data-trackable')).toEqual('test1');
      expect(linksWithDataTrackable.at(1).prop('data-trackable')).toEqual('test3');
    });

    test('matches snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('return null if there are no links', () => {
    const testNull = {
      links: []
    };
    const wrapper = mount(<LegalLinks linksData={testNull.links} />);

    test('has the right content', () => {
      expect(wrapper.component.state.context).toEqual(null);
    });
  });
});
