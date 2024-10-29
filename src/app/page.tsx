"use client"

import { Person } from "@/components/Person";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-teal-900 text-white">
      <div className="flex flex-col items-center w-full max-w-96 h-auto p-4 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-400">
        <h1 className="mb-2 text-white capitalize">login</h1>
        <form action="" method="get" className="flex flex-col">
          <Person/>
          <button type="submit" className="z-40 w-full max-w-52 m-auto bg-slate-400 rounded-sm border border-slate-400 text-white font-bold">Submit</button>
        </form>
        <div className="mt-3">
          <span>Don't have an account? <a href="#" className="capitalize underline decoration-black font-thin text-black" target="_blank">register</a></span>
        </div>
      </div>
    </div>
  );
}

export default Home;
