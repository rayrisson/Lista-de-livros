import { Component } from "react";
import './Header.css'

class Header extends Component{
    render(){
        const {title} = this.props;

        return (
            <div className="Header">
                <span>{title}</span>
            </div>
        )
    }
}

export default Header;