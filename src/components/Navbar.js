import React from 'react'


const Navbar = ({handleSearch}) => {

  return (
    <div className='navbar' >
      <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
        <div className='logo'>Books</div>
      </a>
        <div className='search'>
          <input type="text" placeholder='Search Here in All Books' onChange={handleSearch} />
          <button className='search-icon' ><i className="gg-search"></i></button>
        </div>
      <a href='/Allbook' >
        <button className='button-all-book'>All Books</button>
      </a>
    </div >
  )
}

export default Navbar