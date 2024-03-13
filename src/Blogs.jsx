import { useEffect } from "react";
import { useState } from "react";
import Vlog from "./Vlog";


const Blogs = ({handleBookmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() =>{

        fetch('cafe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    } , [])

     

    return (
        <div className=" md:w-1/2">
             
             <h1 className=" text-4xl">blogs: </h1>
           
            {
               blogs.map(blogs => <Vlog key={blogs.id} blogs={blogs}
                handleBookmark={handleBookmark}
               
               ></Vlog> )

            }
             
        </div>
    );
};

export default Blogs;