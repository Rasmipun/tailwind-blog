import {Main, Article, Subscribe, Register, Login, AboutUs} from "./";


const Home = () => {
  return <div>
        <div className=' bg-[#070829f8] w-full'> 
    <Main />
    <Article/>
    <Subscribe/>
    <AboutUs/>
    <Login/>
    <Register/>
    </div>
  </div>;
};
export default Home;