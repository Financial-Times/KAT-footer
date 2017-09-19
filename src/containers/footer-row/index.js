import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterMatrix from './../../components/footer-matrix';
import ExternalLink from './../../components/external-link';

class FooterRow extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		// only render if the props (state) have changed
		return JSON.stringify(nextProps) !== JSON.stringify(this.props);
	}

	render(){
		return(
			<div className="o-footer__row">
				<FooterMatrix matrix={this.props.matrix} />
				<ExternalLink {...this.props.externalLink} />
			</div>
		);
	}
}

FooterRow.propTypes = {
	matrix: PropTypes.array.isRequired,
	externalLink: PropTypes.shape({
		label: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired
	}).isRequired
};

const mapStateToProps = (store) => {
	return {
		matrix: store.KatFooterNs.matrix.matrix,
		externalLink: {
			label: store.KatFooterNs.externalLink.label,
			href: store.KatFooterNs.externalLink.href
		}
	};
};

export default connect(mapStateToProps)(FooterRow);
