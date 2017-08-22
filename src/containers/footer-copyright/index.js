import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FooterCopyright extends Component {
	shoudlComponentUpdate(nextProps, nextState){
		return JSON.stringify(nextProps) !== JSON.stringify(this.props);
	}

	render(){
		const footerCopyrightData = this.props.footerCopyright;
		const footerCopyrightAbbr = footerCopyrightData.abbr;
		const footerLink = footerCopyrightData.footerLink;
		return(
			<div className="o-footer__copyright kat-footer__copyright" role="contentinfo">
				<small>
					<abbr title={footerCopyrightAbbr.title} aria-label={footerCopyrightAbbr.abbr}> {footerCopyrightAbbr.label} </abbr> {footerCopyrightAbbr.text}. {footerCopyrightData.footer} <a href={footerLink.link} data-trackable="ft-editorial-code-of-practice" aria-label="F T Editorial Code of Practice">{footerLink.text}</a>
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
