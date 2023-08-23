import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../Books';

const BooksDesc = () => {
    const { id } = useParams();

    return (
        <div className='books-desc'>
            <div>
                <img src={Data[id].imageLink} alt="" />
            </div>
            <div className='content'>
                <h1>the Name of book is : <span>{Data[id].title}</span></h1>
                <h3>Name of Writer : {Data[id].author} , {Data[id].country}</h3>
                <p>Language is : {Data[id].language}</p><br />
                <p>the number of pages is : {Data[id].pages}</p>
                <p>Year of Writing : {Data[id].year}</p>
                <a href={Data[id].link} target='_blank' rel="noreferrer"><button>Show the description</button></a>
            </div>
        </div>
    )
}

export default BooksDesc;