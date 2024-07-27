import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav () {
    return (
        <div className="nav">
            <Link to='/'>Home </Link>
            <Link to='/patterns'> Patterns </Link>
            <Link to='/create'> Create Patterns</Link>
          

            {/* <Route path="/" element = {<Home />}/>
                <Route path="/create" element = {<CreatePattern />}/>
                <Route path="/patterns" element = {<PatternsList />}/>
                <Route path="/pattern/:patternID" element = {<PatternDetail />}/> */}

            
        </div>
    )
} 

