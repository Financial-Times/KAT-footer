import React, {PropTypes, Component} from 'react';

class MatrixGroup extends Component {

  constructor(props){
    super(props);
  }

  shoudlComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }



  render(){
    let items = this.props.groupData.items;
    let html = [];

    if ( Array.isArray(items) && (items.length > 0) ){
      items.forEach( (link, index) => {
        html.push(<a className="o-footer__matrix-link" href={link.href} key={index}>{link.text}</a>);
      });
    }

    return(
      <div className="o-footer__matrix-group o-footer__matrix-group--1">
        <h6 className="o-footer__matrix-title">
          {this.props.groupData.title}
        </h6>
        <div className="o-footer__matrix-content" id="o-footer-section-0">
            <div className="o-footer__matrix-column">
              {html}  
            </div>
        </div>
      </div>
      );
  };
}

export default MatrixGroup;