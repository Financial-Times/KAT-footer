import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LegalLinks extends Component {
	shouldComponentUpdate(nextProps, nextState){
		return JSON.stringify(nextProps) !== JSON.stringify(this.props);
	}

	render(){
		if (Array.isArray(this.props.linksData)){
			const links = [];
			this.props.linksData.forEach((link, index)=>{
				links.push(<li key={index}><a href={link.href} data-trackable={link["data-trackable"]}>{link.label}</a></li>);
			});

			return(
				<div>
					<ul className="o-footer__legal-links">
						{links}
					</ul>
				</div>
			);
		}
		return null;
	}
}

LegalLinks.propTypes = {
	linksData: PropTypes.array
};

export default LegalLinks;
