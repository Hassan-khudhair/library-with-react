import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksDesc from './components/BooksDesc'
import BookDescSearch from './components/BookDescSearch'
import Allbooks from "./components/Allbooks";
import { useState } from "react";
import { Data } from "./Books";

function App() {
  const [search,setsearch]=useState('');
  
  const textSearch=Data.filter(item=>item.title.includes(search) || item.author.includes(search))

  const handleSearch = (e) => {
    setsearch(e.target.value)
  }
  
  return (
    <div style={{ position: 'relative' }}>
      <Navbar handleSearch={handleSearch} />
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Allbook' element={<Allbooks textSearch={textSearch} search={search}/>} />
          <Route path='/Allbook/:id' element={<BooksDesc />} />
          <Route path='/Allbook/search/:id' element={<BookDescSearch textSearch={textSearch}/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
