import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MatrixGroup extends Component {
  constructor(props){
    super(props);
  }

  shoudlComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render(){
    const items = this.props.groupData.items;
    const html = [];

    if ( Array.isArray(items) && (items.length > 0) ){
      items.forEach( (link, index) => {
        html.push(<a className="o-footer__matrix-link" href={link.href} key={index}>{link.text}</a>);
      });
    }

    let extraCls = "o-footer__matrix-group--";
    const extraAttr = {};
    if (this.props.index < 2) {
      extraCls += "1";
    } else {
      extraAttr["aria-controls"] = `o-footer-section-${this.props.index}`;
      extraCls += "2";
    }

    return(
      <div className={`o-footer__matrix-group ${extraCls}`}>
        <h6 className="o-footer__matrix-title" {...extraAttr}>
          {this.props.groupData.title}
        </h6>
        <div className="o-footer__matrix-content" id={`o-footer-section-${this.props.index}`}>
            <div className="o-footer__matrix-column">
              {html}
            </div>
        </div>
      </div>
      );
  };
}

MatrixGroup.propTypes = {
  index: PropTypes.number.isRequired,
  groupData: PropTypes.object.isRequired
};

export default MatrixGroup;
