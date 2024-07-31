import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav () {
    return (
        <span className="nav">
            <Link to='/'>Home </Link>
            <Link to='/patterns'> Patterns </Link>
            <Link to='/create'> Create Patterns</Link>                       
        </span>
    )
} 

