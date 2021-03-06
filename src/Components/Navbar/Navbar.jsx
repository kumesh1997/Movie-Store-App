import React,{useState} from "react";
import Searchbar from "../BaseComponents/Searchbar";
import Button from "../BaseComponents/Button";
import { useEffect } from "react";


let API_key="&api_key=e43774324ace39f0ad0187ca97c1d4e9";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedie"];


export const Navbar=()=>{

    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
           setData(data.results);
        });
    }, [url_set])

    const getData=(movieType)=>{
        if(movieType=="Popular"){
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theatre"){
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="Kids"){
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama"){
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedie"){
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }

        setUrl(url);
    }


    const searchMovie=(evt)=>{
        if(evt.key=="Enter"){
            console.log("hello");
        }
    }
    return(
        <div id="navbar" className="row bg-navbar-color p-3 w-full fixed">
                          
        <div className="">
             <div className="row flex">

                 <div className="col-sm-8 flex justify-center nav-class">
                     <ul className=" text-red-600 list-none flex font-medium justify-center align-middle">
                         {                                               
                         arr.map((value) => {
                               return(
                               <li id="list-item" className=" list-none mr-1"><a href="#" name={value} className=" no-underline relative p-1" onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                      );
                                   })
                          }

                          
                     </ul>
                     <ul><li className=" bg-red-600 text-white rounded-full p-1 "><a href="/add">+ New</a></li></ul>
                 </div>

                 <div className="col-sm-4 flex justify-center text-center">
                      <div className=" inline-block col-sm-6">
                          <input 
                          type={"text"} 
                          placeholder="Search your Movie" 
                          className="w-full inline-block h-10 rounded-full outline-none pl-4 " 
                          onChange={(e)=>{setSearch(e.target.value)}}
                          value={search} onKeyPress={searchMovie}/>
                      </div>
                   
                      <span className=" inline-block">
                           <Button 
                              children={"Search"}  
                              extraTailwindClasses="bg-blue-600 w-20 p-2 text-white font-bold duration-500 hover:scale-95" 
                              className=" inline-block " />
                  {/* <button type="button" className=" bg-red-900" onClick={searchMovie}>Search</button> */}
                      </span>
                  </div>
                  
                  {/* <div className="col-sm-2 flex justify-end p-1">
                        <a href="/add"><Button children={"Add New"} extraTailwindClasses="bg-red-600 text-white font-bold outline-none duration-500 hover:scale-95" /></a>
                  </div> */}
              </div>
          </div>                           
  </div>
    );
}