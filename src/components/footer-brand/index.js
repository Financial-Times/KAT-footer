import React, { Component } from 'react';

class FooterBrand extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render () {
    return(
      <div className='o-footer__brand'>
        <div className='o-footer__container'>
          <div className='o-footer__brand-logo'></div>
        </div>
      </div>
      );
  }
}

export default FooterBrand;
