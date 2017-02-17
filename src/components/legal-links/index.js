import React, { Component } from 'react';

class LegalLinks extends Component {
  
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }


  render(){
    if (Array.isArray(this.props.linksData)){
      let links = [];
      this.props.linksData.forEach((link, index)=>{
        links.push(<li key={index}><a href={link.href}>{link.label}</a></li>);
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

export default LegalLinks;