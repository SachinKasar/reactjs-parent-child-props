import React from "react";
import {render} from "react-dom";
import PropTypes from 'prop-types';

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    this.price = props.price;
     }
	
	 
	
    render() {
        return ( 
		    <div  className="alert alert-warning" >
						<h1 style={{color:'blue'}}> Two Wheeler </h1>
                         {this.props.children}
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {this.price}
							</li>
							<li>
							     <b>Visitor :</b>  {this.props.visitor}
							</li>
							
						</ul>
						 
					</div>
				 
      
        );
    } 
}

TwoWheeler.propTypes = {
    name: PropTypes.string,
    specs: PropTypes.object,
    price: PropTypes.number.isRequired,
    children:PropTypes.element.isRequired,
     
};

TwoWheeler.defaultProps = {
  name: 'Default Name',
  specs: {manufacturer : "Default Manufacturer Name"},
  price:10
   
};

