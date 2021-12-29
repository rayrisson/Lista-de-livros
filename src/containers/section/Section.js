import { Component } from "react";

class Section extends Component{
    render(){
        const {className, children} = this.props;

        return(
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default Section;