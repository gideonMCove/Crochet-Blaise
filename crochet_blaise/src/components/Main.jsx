import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'

export default function Main () {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/create" element = {<CreatePattern />}/>
                <Route path="/patterns" element = {<PatternsList />}/>
                <Route path="/pattern/:patternID" element = {<PatternDetail />}/>
            </Routes>
        </div>
    )
}