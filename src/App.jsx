

import { useState } from 'react'
import './App.css'
import Blogs from './Blogs'
import Bookmarks from './Bookmarks'
import Header from './Header'




function App() {
  

    const [bookmarks, setBookmarks] = useState([])


    

  return (
    <>
     
      <Header></Header>
     
     <div className=' md:flex  flex justify-center  gap-20'>
     <Blogs></Blogs>

      <Bookmarks></Bookmarks>


     </div>

 
     
     
    </>
  )
}

export default App
