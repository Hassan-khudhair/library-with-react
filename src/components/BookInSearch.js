import React from 'react'
import { Link } from 'react-router-dom'

const BookInSearch = ({id , img}) => {


    return (
        <Link to={`/Allbook/search/${id}`}>
            <img src={img} alt="" />
        </Link>
    )
}

export default BookInSearch