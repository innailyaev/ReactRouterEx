import React from "react";
import {Link} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Menu} from 'semantic-ui-react'

export default class Header extends React.Component{
    constructor(props){
        super();
    }


    render(){
        return(
            <Menu pointing secondary>
               <Menu.Item name="homepage"><Link to="/" >Homepage</Link></Menu.Item> 
               <Menu.Item name="products"><Link to="/products" >Products</Link></Menu.Item>  
            </Menu>
        )
    }
}