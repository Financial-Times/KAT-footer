import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FooterCopyright extends Component {
	shoudlComponentUpdate(nextProps, nextState){
		return JSON.stringify(nextProps) !== JSON.stringify(this.props);
	}

	render(){
		return(
			<div className="o-footer__copyright kat-footer__copyright" role="contentinfo">
				<small>
					<abbr title={this.props.footerCopyright.abbr.title} aria-label={this.props.footerCopyright.abbr.abbr}> {this.props.footerCopyright.abbr.label} </abbr> {this.props.footerCopyright.abbr.text}. {this.props.footerCopyright.footer} <a href={this.props.footerCopyright.footerLink.link} aria-label="F T Editorial Code of Practice">{this.props.footerCopyright.footerLink.text}</a>
				</small>
			</div>
		);
	}
}

FooterCopyright.propTypes = {
	footerCopyright: PropTypes.object.isRequired
};

const mapStateToProps = (store) => {
	return {
		footerCopyright: store.KatFooterNs.footerCopyright
	};
};

export default connect(mapStateToProps)(FooterCopyright);
