import React from "react";

const Main = () => {
  return (
    <div className=" font-sans text-white">
    <h1 className="pt-28 pl-28 text-4xl font-semibold ">
        <span className="text-6xl ">One platform</span> <br />
        for all technology news
    </h1>
    <p className="pl-28 text-xl pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
        Architecto ullam voluptates laudantium eius suscipit fuga modi?<br/>
        Deserunt assumenda non officia rem culpa at sit veritatis,<br/>
         perspiciatis ipsam cupiditate dolorum ended.
    </p>
    <div className="md:flex mb-36 ml-40 mt-6">
        <button className="ml-30 h-10 w-20 shadow-2xl border-b-2 bg-fuchsia-500 hover:bg-fuchsia-300 text-white hover:text-black font-bold py-2 px-4 mt-3 border-fuchsia-600 hover:border-fuchsia-400 rounded hover:duration-700" title="for more information" >
            Read
        </button>
        <button className="ml-8 h-10 w-20 border-b-2 shadow-2xl bg-fuchsia-500 hover:bg-fuchsia-300 text-white hover:text-black font-bold py-2 px-4 mt-3 border-fuchsia-600 hover:border-fuchsia-400 rounded hover:duration-700" title="paste your idea">
            Write
        </button>
    </div>
    </div>
  )
  
};
export default Main;