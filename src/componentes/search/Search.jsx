import React from 'react'
import './search.css';
const Search = () => {
  return (
    <div className="cont-search">
        <input type="text" id="search" placeholder="Search your favorite movie"/>
        <button id="button-search">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="3.6rem" height="3.6rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </button>
    </div>
  )
}

export default Search;