import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() =>{

        fetch('cafe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    } , [])

     

    return (
        <div>
             
             <h1> blogs: {blogs.length} </h1>


        </div>
    );
};

export default Blogs;