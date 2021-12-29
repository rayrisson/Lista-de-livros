import React, { Component } from 'react';
import './List.css'

class List extends Component{
    render(){
        const {data} = this.props;

        return (
            <div className="List">
                {data?.hits.map((item, index) => (
                    <div className='Item' key={index}>
                        <p>👨🏽{item.author}</p>
                        <p>📖{item.title}</p>
                        <p>🔗<a href={item.url}>{item.url}</a></p>
                    </div>
                ))}
            </div>
        )
    }
}

export default List;