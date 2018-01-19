import React from "react";
import {render} from "react-dom";

import {TwoWheeler} from "./components/TwoWheeler";
import {FourWheeler} from "./components/FourWheeler";

class App extends React.Component {
	 
	 
    render() {
		let twoWheelSpecs = {manufacturer : "Royal Enfield"};
		let fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div className="container">
                <div className="row col-xs-10 col-xs-offset-1 alert alert-success">
				    <br/>   
                    <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<TwoWheeler 
							           name={"Enfield Classic"}  
                                       specs={twoWheelSpecs} 
								       price={0}   
                                       visitor={"First Visitor"} 
                                       
                            >
            
                                <div><p style={{color:'purple'}}>This is Two Weeeler child component</p><br/></div>
            
                            </TwoWheeler>
						</div>
					</div> <br/>
            
				   <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<FourWheeler 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={"Visotor 2"}/>
						</div>
					</div>
				  </div>
            </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));
