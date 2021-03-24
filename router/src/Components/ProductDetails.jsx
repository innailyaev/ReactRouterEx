import React from "react";
import data from "./Data";
import {Link} from "react-router-dom";



export default class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id
        }
    }


    render=()=>{
        return(
            <div>
                <h2>{data[this.state.id-1].title}</h2>
                <img src={data[this.state.id-1].imageUrl} alt=""/> 
                <p>Price: {data[this.state.id-1].price}</p>
                <Link to="/products"><button>Back</button></Link>                
            </div>
        )
    }
}