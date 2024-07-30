import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'

export default function Home () {
    return (
        <div className = "home">
            <h1>Welcome To Crochet Blasé!</h1>
            <p>Browse and create your own patterns!</p>
        </div>
        
    )
}