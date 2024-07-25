import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function PatternsList () {
    const [patterns, setPatterns] = useState("")
    let { patternId } = useParams()
    let navigate = useNavigate()

    useEffect (() => {
        const getPatterns = async () => {
            try{
                const response = await axios.get(`http://localhost:800/patterns/`)
                setPatterns(response)
            } catch (error) {
                console.error(`Cannot load events`, error)
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
                        <h1 className="map" key ={index} onClick={()=>showPattern(pattern.id)}>
                        {console.log('pattern',pattern)}
                            <ul>
                                 {pattern.artist}
                            </ul>
                        </h1>
                    ))
                ) : (
                    <h1>patterns have yet to be loaded</h1>
                )
            }
        </div>
    )
}