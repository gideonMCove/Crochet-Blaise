import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import './Grid.css'
import { SketchPicker } from 'react-color'
export default function CreatePattern ({rows = 10, columns = 10}) {    
        const [grid, setGrid] = useState(
          Array(rows).fill(null).map(() => Array(columns).fill({ text: '', color: 'white' }))
        )
        const [numRows, setNumRows] = useState(rows)
        const [numCols, setNumCols] = useState(columns)
        const [color, setColor] = useState('white')
        const [dragging, setDragging] = useState(false)
        const [show, setShow] = useState(false)
        useEffect(() => {
          setGrid(
              Array(numRows).fill(null).map(() => Array(numCols).fill({ text: '', color: 'white' }))
          )
        }, [numRows, numCols])
        useEffect(() => {
          loadGrid()
        }, [])      
        const handleChange = (row, col, event) => {
          const newText = event.target.value
          const newGrid = grid.map((r, rowIndex) =>
            r.map((cell, colIndex) =>
              rowIndex === row && colIndex === col
                ? { ...cell, text: newText }
                : cell
            )
          )
          setGrid(newGrid)
        }
    const handleDraw = (row, col) => {
            const newGrid = grid.map((r, rowIndex) =>
              r.map((cell, colIndex) =>
                rowIndex === row && colIndex === col
                  ? { ...cell, color }
                  : cell
              )
            )
            setGrid(newGrid);
          }
    const handleMouseDown = () => setDragging(true);
    const handleMouseUp = () => setDragging(false);
    const handleMouseOver = (row, col) => {
        if (dragging) {
            const newGrid = grid.map((r, rowIndex) =>
                r.map((cell, colIndex) =>
                    rowIndex === row && colIndex === col
                        ? { ...cell, color }
                        : cell
                )
            )
            setGrid(newGrid);
        }
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
          setNumRows(newRows)
          setNumCols(newCols)
          setGrid(
            Array(newRows).fill(null).map(() => Array(newCols).fill({ text: '', color: 'white' }))
          )
        } else {
          alert('Invalid input. Please enter valid numbers.')
      }
      }
    const showColour =() => {
      let toggle = 0
      toggle +=1
      if (toggle % 2 != 0){
        setShow(true)
      }
      else{
        setShow(false)
      }
    } 
    return (
        <div className = 'createPattern'>
          
          
            <div className="color-picker">
                <SketchPicker show={show} color={color} onChangeComplete={(color) => setColor(color.hex)} />
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
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
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

