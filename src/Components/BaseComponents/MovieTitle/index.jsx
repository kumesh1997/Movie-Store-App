import React from "react";


function MovieTitle({title="title"}){
    return(
        <div id="movie-title" className="">
                <p className=" w-full text-xl text-blue-600 font-extrabold align-middle">{title}</p>
        </div>
    );
}

export default MovieTitle;