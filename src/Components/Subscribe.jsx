import React from "react";

const Subscribe = () => {
  return(
    <div className="pt-16 text-white">
        <hr className="mx-12"/>
        <h1 className="text-center pt-24 pb-5 font-semibold text-2xl">
        Sign up to our free monthly newsletter <br/>to receive new updates about articles and more.
        </h1>
        <form className="flex place-content-center pb-16 pt-3 ">
        <input  type="text" placeholder="email"  className="border-none rounded-tl-md rounded-bl-md text-black " />
        <button type="submit" className="bg-slate-200 px-3 rounded-tr-md rounded-br-md" >
        <svg width="32" height="32" className="p-1" viewBox="0 0 24 24"><path fill="#888888" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z"/></svg>
        </button>
        </form>
    </div>
  )
};

export default Subscribe;