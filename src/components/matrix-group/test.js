import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MatrixGroup from './index.js';

describe('MatrixGroup', () => {

  describe('component', () => {
    const i = 0;
    const link1 = {
      href: 'web.link',
      test: 'test'
    };
    const link2 = {
      href: 'web.link',
      test: 'test'
    };
    const data = {
      title: 'Test',
      items: [ link1, link2 ]
    };
    const wrapper = mount(<MatrixGroup index={i} groupData={data}/>);

    test('has matrix title', () => {
      const content = <h6 className="o-footer__matrix-title">
        {data.title}
      </h6>;
      expect(wrapper.contains(content)).to.equal(true);
    });

    test('has footer matrix group', () => {
      expect(wrapper.find('.o-footer__matrix-group').length).to.equal(1);
    });

    test('has footer matrix content', () => {
      expect(wrapper.find('.o-footer__matrix-content').length).to.equal(1);
    });

    test('has footer matrix column', () => {
      expect(wrapper.find('.o-footer__matrix-column').length).to.equal(1);
    });

    test('has matrix link', () => {
      const content = <a className="o-footer__matrix-link" href={link1.href} key={0}>
        {link1.text}
      </a>;
      expect(wrapper.contains(content)).to.equal(true);
    });

    test('has right number of matrix links', () => {
      expect(wrapper.find('.o-footer__matrix-link').length).to.equal(data.items.length);
    });
  });
});
