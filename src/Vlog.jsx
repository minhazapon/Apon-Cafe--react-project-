
import { IoBookmarksOutline } from "react-icons/io5";



const Vlog = ({blogs, handleBookmark}) => {

   const {cover, author_img, reading_time, author, title, posted_date} = blogs;

    return (
        <div className=" border-[2px] border-blue-500 mt-5 p-5 rounded-xl">

           <img className=" h-[400px] w-[600px] mt-5" src={cover} alt="" />
               
               <div className=" flex gap-72 mt-10 items-center">

                  <div  className=" flex gap-6 items-center">
                        <img className=" h-[80px] w-[80px]" src={author_img} alt="" />
                        <div>
                        <h1> {author} </h1>
                        <h1> {posted_date} </h1> 
                        </div>
                  </div>

                  <div className=" flex gap-2">

                    <span className=" text-xl font-bold text-slate-500"> {reading_time} min time </span>

                    <button  onClick={ () =>  handleBookmark(blogs)}><IoBookmarksOutline></IoBookmarksOutline></button>



                  </div>



               </div>

             
             


           <h1 className=" text-2xl font-bold mt-5"> {title} </h1>

            <div className=" flex gap-6 mt-5 text-slate-500">
                <h1>#beginner</h1>
                <h1>#programming</h1>
            </div>
            
        </div>
    );
};

export default Vlog;