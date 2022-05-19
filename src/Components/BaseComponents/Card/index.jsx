import React from "react";
import MovieTitle from "../MovieTitle";
import Rate from "../Rate";
import '../Card/card.css';


function Card(card){
    console.log(card.info);
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <div id="card" className=" w-full  h-70  bg-green-200 shadow-lg duration-500 box-border border-2 ">
            <img src={img_path+card.info.poster_path} alt="Image" className=" w-full h-70  max-h-70" />
    
            <div id="card-body" className=" flex flex-col justify-center align-middle">
                <div className="box w-full p-3 flex align-middle justify-around">
                    <MovieTitle title={card.info.title}/>
                    <Rate rate={card.info.vote_average}/>
                </div>

                <div className="release-date p-2 text-center">
                        <p className=" "> Released on <span className=" font-extrabold">{card.info.release_date}</span></p>
                        <p className="">Original Language<span className=" font-extrabold"> {card.info.original_language}</span></p>
                </div>

                {/* <div className="overview p-3">
                    <h1 className=" font-bold ">Overview</h1><br/>
                    <p className=" text-justify">{card.info.overview}</p>
                </div>  */}
                  
            </div>

        </div>
    );
}

export default Card;