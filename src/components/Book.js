import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({id , img}) => {


    return (
        <Link to={`/Allbook/${id}`}>
            <img src={img} alt="" />
        </Link>
    )
}

export default Book