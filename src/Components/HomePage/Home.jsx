import React,{useState} from "react";
import { useEffect } from "react";
import Button from "../BaseComponents/Button";
import Searchbar from '../BaseComponents/Searchbar';
import MovieTitle from '../BaseComponents/MovieTitle';
import Rate from "../BaseComponents/Rate";
import Card from "../BaseComponents/Card";
import '../HomePage/nav.css';
import { getDefaultNormalizer } from "@testing-library/react";

let API_key="&api_key=e43774324ace39f0ad0187ca97c1d4e9";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedie"];

export const Home=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    const [isMobile, setIsMobile]=useState(true);

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
            url=base_url+"/search/movie?api_key=e43774324ace39f0ad0187ca97c1d4e9&query="+search;
            setUrl(url);
            setSearch("");
        }
    }


    return(
        <div id="home">
                <div className="container">

                         <div id="navbar" className="row bg-navbar-color p-3 w-full fixed">
                          
                              <div className="">
                                   <div className="row flex">

                                       <div className="col-sm-8 flex justify-center nav-class">
                                           <ul className={isMobile? "nav-links-mobile" : "nav-links text-red-600 mt-1 list-none flex font-medium justify-center align-middle"}
                                           onClick={() => setIsMobile(false)}>
                                              
                                                     <li id="list-item" className=" list-none mr-2"><a href="#" name={"Popular"} className=" no-underline relative p-1" onClick={(e)=>{getData(e.target.name)}}>Popular</a></li>
                                                     <li id="list-item" className=" list-none mr-2"><a href="#" name={"Theatre"} className=" no-underline relative p-1" onClick={(e)=>{getData(e.target.name)}}>Theatre</a></li>
                                                     <li id="list-item" className=" list-none mr-2"><a href="#" name={"Kids"} className=" no-underline relative p-1" onClick={(e)=>{getData(e.target.name)}}>Kids</a></li>
                                                     <li id="list-item" className=" list-none mr-2"><a href="#" name={"Drama"} className=" no-underline relative p-1" onClick={(e)=>{getData(e.target.name)}}>Drama</a></li>
                                                     <li id="list-item" className=" list-none mr-2"><a href="#" name={"Comedie"} className=" no-underline relative p-1" onClick={(e)=>{getData(e.target.name)}}>Comedie</a></li>
                                                     <li id="list-item" className=" list-none mr-2"><a href="/add" name={"add"} className=" no-underline relative p-2 bg-red-600 text-white rounded-full " > + Add </a></li>    
                                           </ul>

                                           {/* <ul><li className=" bg-red-600 text-white rounded-full p-1 "><a href="/add">+ New</a></li></ul> */}
                                           <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                                                    {isMobile ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i> }
                                           </button>
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
                                      
                                            </span>
                                        </div>
                                        
                                       
                                    </div>
                                </div>                           
                        </div>


                        <div className="row top-16 p-4">

                           {
                               (movieData.length==0)?<p className="not-found">Not Found</p>:movieData.map((res,pos)=>{
                                   return(
                                     <div className="col-sm-3 mt-2"><Card info={res} key={pos}/></div>
                                   )
                               })
                           }
                           
                        </div>


                      

                </div>
        </div>
    );
}