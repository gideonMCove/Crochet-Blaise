import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import CreatePattern from './CreatePattern'
import PatternsList from './PatternsList'
import PatternDetail from './PatternDetails'

export default function Main () {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/create" element = {<CreatePattern />}/>
                <Route path="/patterns" element = {<PatternsList />}/>
                <Route path="/patterns/:patternID" element = {<PatternDetail />}/>
            </Routes>
        </div>
    )
}