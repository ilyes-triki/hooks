import React from 'react'
import Rating from '../rate/rate'
function filter({setTextSearch, setsearchRate , rating} ) {
    return (
        <div>
            <input placeholder="search for movie" onChange={
                (e)=> setTextSearch(e.target.value)
            } />
            <Rating setsearchRate={setsearchRate} rating = {rating} />
        </div>
    )
}

export default filter
