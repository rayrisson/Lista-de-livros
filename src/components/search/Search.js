import { Component } from 'react';
import magnifier from '../../assets/images/search/magnifier.png';
import './Search.css'

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeValue(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(){
        const {callback} = this.props;
        callback(this.state.text);
    }

    render(){
        return (
            <div className="Search">
                <input type = "text" value = {this.state.text} onChange = {this.handleChangeValue}/>
                <button onClick={this.handleSubmit}><img src={magnifier} alt="Lupa"/></button>
            </div>
        )
    }
}

export default Search;