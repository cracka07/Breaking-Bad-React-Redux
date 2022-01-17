import React from 'react'
import logo from "./spinner.js"

export default function spinner() {
    return (
        <div>
             <img
                src={logo}
                alt='Loading'
             />   
        </div>
    )
}
