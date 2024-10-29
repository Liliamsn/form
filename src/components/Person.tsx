"use client"

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Person = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState("");

    const choose = (e:any) => {
        e.preventDefault();
        if(!show) {
            setShow(true);
            console.log(data)
        } else {
            setShow(false);
        }
    }
    return (
        <>
            <fieldset className="flex flex-col mt-3 mb-3">
                <label htmlFor="email" className="flex flex-col mb-2 capitalize">email:
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        className="w-full max-w-52 m-auto pl-2 rounded-sm outline-zinc-600 text-black"
                        required
                    />
                </label>

                <label htmlFor="password" className="flex flex-col mb-2 capitalize">password:
                    <input 
                        type={!show ? "password": data} 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        className="w-full max-w-52 m-auto pl-2 border-l-2 rounded-sm outline-zinc-600 text-black"
                        value={data}
                        onChange={(e) => {setData(e.target.value)}}
                        minLength={6}
                        maxLength={8}
                        required
                    />
                    <button 
                        onClick={choose} 
                        className="absolute top-32 right-24 mt-4 border-none bg-transparent text-black">
                        {show && <Eye size={15} />} 
                        {!show && <EyeOff size={15} color="black"/>}
                    </button>
                </label>
            </fieldset>
        </>
    );
}