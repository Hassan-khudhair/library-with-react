import React from 'react'
import { useParams } from 'react-router-dom'

const BookDescSearch = ({textSearch}) => {
    const { id } = useParams();
    return (
        <div className='books-desc'>
            <div>
                <img src={textSearch[id].imageLink} alt="" />
            </div>
            <div className='content'>
                <h1>the Name of book is : <span>{textSearch[id].title}</span></h1>
                <h3>Name of Writer : {textSearch[id].author} , {textSearch[id].country}</h3>
                <p>Language is : {textSearch[id].language}</p><br />
                <p>the number of pages is : {textSearch[id].pages}</p>
                <p>Year of Writing : {textSearch[id].year}</p>
                <a href={textSearch[id].link} target='_blank' rel="noreferrer"><button>Show the description</button></a>
            </div>
        </div>
    )
}

export default BookDescSearch;