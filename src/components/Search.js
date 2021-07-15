import React from 'react'
import styled from 'styled-components'
// import "./Search.css";

const StyledSearch = styled.div`
/* .search-bar-wrapper {
    border-bottom: 1px solid #3333;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #ffffff;
  } */
  .search-form {
    width: 100%;
    font-size: 20px;
    justify-content: center;
    border: 1px solid black
    /* height: 200px; */
  }
  .search-form input {
    text-align: center;
    color: #262626;
    font-size: 20px;
    &:hover {
        transform: scale(1.2);
    }
  }

  .search-date {
    border-color: black;
    background-color: black;
  }
`

export default function searchBar(props) {
    return (
        <StyledSearch>
    <div className='search-date container'>
        <form className="search-form">
        <input
          type="date"
          placeholder="Search YYYY-MM-DD"
          value={props.date}
          onChange= {props.onSubmit}/>
    </form>
    </div>
    </StyledSearch>
    )
}