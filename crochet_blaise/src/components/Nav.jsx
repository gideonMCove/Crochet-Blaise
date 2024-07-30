import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav () {
    return (
        <div className="nav">
            <Link to='/'>Home </Link>
            <Link to='/patterns'> Patterns </Link>
            <Link to='/create'> Create Patterns</Link>
                       
        </div>
    )
} 

