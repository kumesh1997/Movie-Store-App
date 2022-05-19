import React from "react";


function Searchbar({
    type="text",
    Extra_details='"min="1" max="5" step="0.5"',
    placeholder,
    extra_tailwind_css="",
    icon="fa fa-envelope-open",
    changeHandler=() => {},
    onkey=() => {}
    }){
    
        return(
        <div id="searchbar" className=" m-3 flex">
             {/* <i class={`${icon} inline-block" aria-hidden="true  text-base`}></i> */}
                <input type={type} className={` outline-none w-full text-base h-10 border-b-2 border-b-blue-900 duration-300 focus:border-b-green-400 pl-2 ${extra_tailwind_css}`} placeholder={placeholder} 
                onChange={() => changeHandler()}
                onKeyPress={() => onkey()}>
               
                </input>
        </div>
    );
}

export default Searchbar; 