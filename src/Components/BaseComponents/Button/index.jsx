import React from "react";



function Button({ children, styles, extraTailwindClasses = "", clickHandler=() => {} }){
    return(
        <button
        type="button"
        className={`become-provider rounded-full shadow-lg ${extraTailwindClasses}`}
        // w-auto h-10
        style={{ ...styles }}
        onClick={() => clickHandler()}
      >
        {children}
        </button>
    );
}


export default Button;