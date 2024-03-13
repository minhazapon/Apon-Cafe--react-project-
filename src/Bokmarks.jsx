

const Bokmarks = ({bookmarks}) => {
     
    const {title} = bookmarks;
    return (
        <div className=" bg-slate-500 p-3 m-3">
            
           <h1> {title} </h1>

        </div>
    );
};

export default Bokmarks;