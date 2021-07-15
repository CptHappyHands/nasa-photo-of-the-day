import React from 'react'
import "./Search.css";

export default function searchBar(props, { search }) {
    return <div className='search-date container'>
        <form className="search-form" onSubmit={props.onSubmit}>
        <input
          type="date"
          placeholder="Search YYYY-MM-DD"
          value={props.date}/>
        
    </form>
    </div>
}