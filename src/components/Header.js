import React, { Component } from 'react'

const Header = (props)=>{

    return (
        <div>
            <h1>{props.text}</h1>
            {props.children}
        </div>
    )
}

export default Header;