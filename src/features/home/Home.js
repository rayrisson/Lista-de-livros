import React, { Component } from 'react';
import Header from '../../containers/header/Header';
import Section from '../../containers/section/Section';
import Search from '../../components/search/Search'
import List from '../../components/list/List'
import api from '../../_config/api';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = ({sectionData: null})

        this.filterList = this.filterList.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    filterList(term){
        this.fetchData(term);
    }

    async fetchData(term){
        const response = await api.get(term)
        this.setState({sectionData: response?.data})
    }

    async componentDidMount(){
        this.fetchData('');
    }

    render(){
        const {title} = this.props;
        const {sectionData} = this.state;
        const sectionClassSearch = "SectionSearch";
        const sectionClassData = "SectionData";

        return (            
            <div className='Home'>
                <Header title = {title}></Header>
                <Section className={sectionClassSearch}><Search callback = {this.filterList}/></Section>
                <Section className={sectionClassData}><List data = {sectionData}/></Section>
            </div>
        )
    }
}

export default Home;
