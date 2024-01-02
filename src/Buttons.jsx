import React from "react";

import './App.css'
import { TiHtml5 } from "react-icons/ti";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";

const Buttons = (prop) => {
    
  
    
    return (
        <>
            <button className="btn btn-outline btn-warning flex justify-start gap-4 w-80" renderPage={prop.renderPage}>
                <TiHtml5 />
                <h1>HTML</h1>
            </button>    
            <button className="btn btn-outline btn-success flex justify-start gap-4 w-80">
                <SiCss3 />
                <h1>CSS</h1>
            </button>
            <button className="btn btn-outline btn-info flex justify-start gap-4 w-80">
                <IoLogoJavascript />
                <h1>JAVASCRIPT</h1>
            </button>
            <button className="btn btn-outline btn-error flex justify-start gap-4 w-80">
                <SiReact />
                <h1>REACT</h1>
            </button>
        </>
    )
}
export default Buttons