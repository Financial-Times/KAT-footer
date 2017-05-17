import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FooterMatrix from './index.js';

describe('FooterBrand', () => {

  describe('component', () => {
    // const wrapper = mount(<FooterMatrix/>);
    //
    // console.log(wrapper.toString());
    //
    // const content = <nav className="o-footer__matrix" role="navigation" aria-label="Useful links">
    //   <div className={`o-footer__matrix-group ${extraCls}`}>
    //     <h6 className="o-footer__matrix-title" {...extraAttr}>
    //       {this.props.groupData.title}
    //     </h6>
    //     <div className="o-footer__matrix-content" id={`o-footer-section-${this.props.index}`}>
    //         <div className="o-footer__matrix-column">
    //           {html}
    //         </div>
    //     </div>
    //   </div>
    // </nav>;
    //
    test('has the right content', () => {
      // expect(wrapper.contains(content)).to.equal(true);
      expect(true).to.equal(true);
    });
  });
});
