import React from 'react'
import { Data } from '../Books'
import Book from './Book'
import BookInSearch from './BookInSearch'

const Allbooks = ({ textSearch, search }) => {

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className='books'>
        <div className='image-books'>
          {
            textSearch.length ?
              search === '' ?
                Data.map((item, index) => (
                  <Book img={item.imageLink} key={index} id={index} />
                )) : textSearch.map((item, index) => (
                  <BookInSearch img={item.imageLink} key={index} id={index} />
                )) : <h1 style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>There is no Book with this Name or Title . . .</h1>
          }
        </div>
      </div>
    </div>
  )
}

export default Allbooks