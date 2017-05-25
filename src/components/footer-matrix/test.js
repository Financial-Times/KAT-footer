import React from 'react';
import { mount, shallow } from 'enzyme';
import FooterMatrix from './index.js';
import MatrixGroup from './../matrix-group';

describe('FooterMatrix', () => {
  const matrixTestData = {
    matrix: [
      {
        "title": "Test",
        "items": [
          { "text": "test", "href": "test" },
          { "text": "test", "href": "test" }
        ]
      },
      {
        "title": "Test",
        "items": [
          { "text": "test", "href": "test" },
          { "text": "test", "href": "test" }
        ]
      }
    ]
  };

  const nullMatrixTestData = {
    matrix: []
  };

  describe('component', () => {
    const wrapper = mount(<FooterMatrix matrix={matrixTestData.matrix}/>);

    const content =
    <nav className="o-footer__matrix" role="navigation" aria-label="Useful links">
      <MatrixGroup groupData={matrixTestData.matrix[0]} key={0} index={0}/>
      <MatrixGroup groupData={matrixTestData.matrix[1]} key={1} index={1}/>
    </nav>;

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });

  test('matches snapshot', () => {
    const wrapper = shallow(<FooterMatrix matrix={matrixTestData.matrix}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('return null if there is no links', () => {
    const wrapper = mount(<FooterMatrix matrix={nullMatrixTestData.marix} />);
    const content =
    <nav className="o-footer__matrix" role="navigation" aria-label="Useful links">
      {null}
    </nav>;

    console.log(wrapper.html());

    test('has the right content', () => {
      expect(wrapper.contains(content)).toEqual(true);
    });
  });
});
