import React from "react";


function Rate({rate="0"}){
    return(
        <div id="price">
            <p className=" text-green-500 text-sm bg-white w-full p-2 rounded-full font-bold shadow-xl"><i class="fa fa-star text-yellow-400 " aria-hidden="true"></i> {rate}</p>
        </div>
    );
}

export default Rate;