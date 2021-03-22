import React from "react";
import {Link} from "react-router-dom";
import data from "./Data";

const StylishHat=()=>{
    return <div>hhhh</div>
}

const BeautifulJacket=()=>{
    return <div>jjjjj</div>
}

export default class ProductDetail extends React.Component{
    constructor(props){
        super();
    }
    
    render(){
        return(
            <div>
                 
                 <Link to="/product/:1" exact component={StylishHat}></Link>
                 <Link to="/product/:2" exact component={BeautifulJacket}></Link>
                 <Link to="/product/:3"  component={StylishHat}></Link>
                 
               
            </div>
        )
    }
}