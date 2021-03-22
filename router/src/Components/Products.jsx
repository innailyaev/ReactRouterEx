import React from "react";
import data from "./Data";
import {Link} from "react-router-dom";

export default class Products extends React.Component{
    constructor(props){
        super();
        this.state={
            data:[],
        }
    }

    componentDidMount=()=>{
        this.setState({data:data})
        console.log(data);
    }

    render(){
        return(
            <div>
                {
                    this.state.data.map((p,index)=>(
                         <Link key={index} to={`/product/:${p.id}`}>{p.title}    </Link>
                    ))
                }
            </div>
        )
    }
}