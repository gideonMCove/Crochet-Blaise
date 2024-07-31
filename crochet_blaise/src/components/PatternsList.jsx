import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function PatternsList () {
    const [patterns, setPatterns] = useState("")
    let { patternID } = useParams()
    let navigate = useNavigate()

    useEffect (() => {
        const getPatterns = async () => {
            try{
                const response = await axios.get(`http://localhost:8000/patterns/`)
                setPatterns(response)
            } catch (error) {
                console.error(`Cannot load patterns`, error)
            }
        }
        getPatterns()
    },[])

    const showPattern = (index) => {
        navigate(`${index}`)
    }
    return (
        <div className = "patternsList">
            {
                patterns != "" ? (                            
                    patterns.data.map((pattern, index) => (  
                        <span className= 'card'>                              
                        <h1 className="map" key ={index} onClick={()=>showPattern(pattern.id)}>
                        {console.log('pattern',pattern)}
                            <ul>
                                 {pattern.name}
                            </ul>
                        </h1>
                        </span>
                    ))
                ) : (
                    <h1>patterns have yet to be loaded</h1>
                )
            }
        </div>
    )
}