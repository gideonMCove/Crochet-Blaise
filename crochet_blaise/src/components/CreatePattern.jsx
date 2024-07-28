import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import './Grid.css'
// change colour feature. Have text appear for coloured squares. 
// loadGrid() put this in a use effect later 
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

    const saveGrid = () => {
    localStorage.setItem('gridState', JSON.stringify(grid))
    }
    
    const loadGrid = () => {
    const savedGrid = localStorage.getItem('gridState')
    if (savedGrid) {
        setGrid(JSON.parse(savedGrid))
    }
    }

    const handleSizeChange = () => {
        const newRows = parseInt(prompt("Enter number of rows:", numRows), 10)
        const newCols = parseInt(prompt("Enter number of columns:", numCols), 10)
        if (!isNaN(newRows) && !isNaN(newCols)) {
          setNumRows(newRows);
          setNumCols(newCols);
          setGrid(
            Array(newRows).fill(null).map(() => Array(newCols).fill({ text: '', color: 'white' }))
          )
        }
      }



    return (
        <div className = 'createPattern'>
            <div className="color-picker">
                <SketchPicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
            </div>
            <div className="controls">
                <button onClick={saveGrid}>Save Grid</button>
                <button onClick={loadGrid}>Load Grid</button>
                <button onClick={handleSizeChange}>Change Grid Size</button>
            </div>
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

