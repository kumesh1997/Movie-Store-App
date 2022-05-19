import React from "react";



function Button({ children, styles, extraTailwindClasses = "", clickHandler=() => {} }){
    return(
        <button
        type="button"
        className={`become-provider rounded-full p-2 shadow-lg ${extraTailwindClasses}`}
        // w-auto h-10
        style={{ ...styles }}
        onClick={() => clickHandler()}
      >
        {children}
        </button>
    );
}


export default Button;