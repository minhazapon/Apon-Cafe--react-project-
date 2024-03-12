
 import profile from '../src/assets/images/profile.png'


const Header = () => {
    return (
        <div className=' ml-10 mr-10 mt-10 flex  items-center justify-between'>


            <h1 className=' text-4xl font-bold text-blue-500'>Apon Cafe</h1>
            <img src={profile} alt="" />
          

        </div>
    );
};

export default Header;