import React from "react";

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-light-green" 
                type="text" 
                placeholder="Search Robot"
                onChange ={searchChange}     
            />
        </div>
    )
}
export default SearchBox;