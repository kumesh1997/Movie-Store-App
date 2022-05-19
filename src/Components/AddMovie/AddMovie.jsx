import React from "react";
import Searchbar from "../BaseComponents/Searchbar";
import Button from "../BaseComponents/Button";
import '../AddMovie/addMovie.css';


export const AddMovie=()=>{
    return(
        <div id="movie-form" className="">
            <div className="container">
                
                <div className="row flex justify-center bg-navbar-color">
                        <form className=" p-3 w-2/3 h-auto mt-14 mb-16 shadow-lg bg-white rounded-md">
                          
                            <h1 className=" text-xl font-bold text-blue-600 mb-4"> Add a New Movie</h1>
                            <div className="row">
                                 <div className="col-sm-6">
                                     <Searchbar placeholder={"Movie Title"} type={"text"}/>
                                 </div>
                                <div className="col-sm-6">
                                    <Searchbar placeholder={"Cast"} type={"text"}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <Searchbar placeholder={"Genre"} type={"text"}/>
                                </div>

                                <div className="col-sm-6">
                                    <Searchbar placeholder={"Released Date"} type={"Date"}/>
                                 </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <Searchbar placeholder={"Vote Average"} type={"Number"}/>
                                </div>
                                
                                <div className="col-sm-6">
                                    <Searchbar placeholder={"Vote Count"} type={"text"}/>
                                </div>
                            </div>

                            <div>
                                <Searchbar placeholder={"Alternative Titles"} type={"text"}/>
                            </div>

                            <div>
                                <Searchbar placeholder={"Original Language"} type={"text"}/>
                            </div>

                            <div>
                                <Searchbar placeholder={"Overview"} type={"text"}/>
                            </div>
                           
                            <div>
                                <Searchbar placeholder={"Images"} type={"File"}/>
                            </div>
        
                            <div className="text-center flex justify-center row">
                                <div className="col-sm-3">
                                <a href="/"><Button children={"Back"}  extraTailwindClasses="bg-gray-400 text-white font-bold mt-3 h-10 w-32" className=" inline-block"/></a>
                                </div>
                                <div className="col-sm-3">
                                <Button children={"Save"}  extraTailwindClasses="bg-green-600 text-white p-2 font-bold mt-3 h-auto w-32" className=" inline-block"/>
                                </div>                           
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
}