import Bokmarks from "./Bokmarks";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className=" md:w-1/3">
              <h1 className=" text-2xl">bookmarked blogs: {bookmarks.length} </h1>

             {
                
               bookmarks.map(bookmarks => <Bokmarks key={bookmarks.id} bookmarks={bookmarks} ></Bokmarks> )


             }


        </div>
    );
};

export default Bookmarks;