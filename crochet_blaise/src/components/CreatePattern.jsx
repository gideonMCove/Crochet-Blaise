import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import './Grid.css'

export default function CreatePattern ({rows = 10, columns = 10}) {

    
        const [grid, setGrid] = useState(
          Array(rows).fill(null).map(() => Array(columns).fill({ text: '', color: 'white' }))
        )
      
        const handleChange = (row, col, event) => {
          const newText = event.target.value;
          const newGrid = grid.map((r, rowIndex) =>
            r.map((cell, colIndex) =>
              rowIndex === row && colIndex === col
                ? { ...cell, text: newText }
                : cell
            )
          )
          setGrid(newGrid);
        }



    const handleDraw = (row, col) => {
            const newGrid = grid.map((r, rowIndex) =>
              r.map((cell, colIndex) =>
                rowIndex === row && colIndex === col
                  ? { ...cell, color: cell.color === 'white' ? 'black' : 'white' }
                  : cell
              )
            )
            setGrid(newGrid);
          }



    return (
        <div className = 'createPattern'>
            {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="grid-cell"
              style={{ backgroundColor: cell.color }}
              onClick={() => handleDraw(rowIndex, colIndex)}
            >
              <input
                type="text"
                value={cell.text}
                onChange={(e) => handleChange(rowIndex, colIndex, e)}
                className="cell-input"
              />
            </div>
          ))}
        </div>
      ))}
            
        </div>
    )
}

