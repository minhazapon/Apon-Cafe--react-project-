

import { useState } from 'react'
import './App.css'
import Blogs from './Blogs'
import Bookmarks from './Bookmarks'
import Header from './Header'



function App() {
  

    const [bookmarks, setBookmarks] = useState([])

    const handleBookmark = Blogs => {

      const newBookmarks = [...bookmarks, Blogs]

      setBookmarks(newBookmarks);

   }
    

  return (
    <>
     
      <Header></Header>
     
     <div className=' md:flex  flex justify-center  gap-20'>
     <Blogs handleBookmark={handleBookmark} ></Blogs>

      <Bookmarks bookmarks={bookmarks} ></Bookmarks>


     </div>

 
     
     
    </>
  )
}

export default App
