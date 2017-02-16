import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FooterCopyright extends Component {

  constructor(props){
    super(props);
  }

  shoudlComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className="o-footer__copyright" role="contentinfo">
        <small>
          {this.props.footerCopyright.header}
          <abbr title={this.props.footerCopyright.abbr.title} aria-label={this.props.footerCopyright.abbr.abbr}>FT</abbr> {this.props.footerCopyright.abbr.text}.<br></br>
          {this.props.footerCopyright.footer} <a href={this.props.footerCopyright.footerLink.link} aria-label="F T Editorial Code of Practice">{this.props.footerCopyright.footerLink.text}</a>
        </small>
      </div>
      );
  }
}

const mapStateToProps = (store) => {
  return {
    footerCopyright: store.KatFooterNs.footerCopyright
  };
};

export default connect(mapStateToProps)(FooterCopyright);