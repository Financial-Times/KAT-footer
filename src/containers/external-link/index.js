import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class ExternalLink extends Component {

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidUpdate(){

  }

  render(){
    return(
        <h6 className="o-footer__external-link o-footer__matrix-title">
          <a className="o-footer__more-from-ft o-footer__matrix-title" href={this.props.href}>{this.props.label}</a>
        </h6>
      );
  }

}

const mapStateToProps = (store) => {
  return {
      label: store.KatFooterNs.externalLink.label,
      href: store.KatFooterNs.externalLink.href
    };
}

export default connect(mapStateToProps)(ExternalLink);