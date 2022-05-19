import React,{useState} from "react";
import Searchbar from "../BaseComponents/Searchbar";
import Button from "../BaseComponents/Button";



export const Navbar=()=>{

    const [search,setSearch]=useState();

    const searchMovie=(evt)=>{
        if(evt.key=="Enter"){
            console.log("hello");
        }
    }
    return(
        <div id="navbar" className=" bg-navbar-color p-3 w-full fixed">
                <nav className=" ">
                    <div className="container">
                        <div className="row flex">
                            <div className="col-sm-10 inline-block text-center">
                                <span className=" inline-block flex-grow-2 basis-0">
                                <Searchbar placeholder={"Find your Movie"} className=" w-full inline-block h-10" extra_tailwind_css="rounded-full " changeHandler={(e)=>{setSearch(e.target.value)}} 
                                value={search} onkey={searchMovie}/>
                                </span>
                                <span className=" inline-block">
                                <Button children={"Search"}  extraTailwindClasses="bg-blue-600 text-white font-bold mt-3 " className=" inline-block"/>
                                </span>
                            </div>
                            <div className="col-sm-2 inline-block justify-center">
                            <a href="/add"><Button children={"Add New"} extraTailwindClasses="bg-red-600 text-white font-bold mt-2 outline-none" /></a>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    );
}