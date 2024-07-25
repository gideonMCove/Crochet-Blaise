import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'



export default function PatternDetail () {
    const [details,setDetails] = useState(null)
    const [show,setShow] = useState(false)
    const [updateShow,setUpdateShow] = useState(false)    
    const [formData, setFormData] = useState({
       
        name: '',
        description: '',
        techniques: [],
    })
    let { patternId } = useParams()
    const navigate = useNavigate()
    useEffect(() =>{    
            const getDetail = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/events/${eventId}`)
                    setDetails(response)
                    
                    const responseData = response.data
                    {
                    setFormData({
                        name: responseData.name,
                        description: responseData.description,
                        techniques: responseData.techniques,
                        })
                    }
                    

                } catch (error) {
                    console.error('Cannot load details', error)
                }                
            }
            getDetail()
        },[])
   
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleUClose = () => setUpdateShow(false)
    const handleUShow = () => setUpdateShow(true)
    const handleDelete = async () =>{
        try {
            await axios.delete(`http://localhost:8000/pattern/${patternId}`)
            navigate('/patterns')
        } catch (error) {
            console.error(`nah nah nah nah, nah nah, nah nah, can't delete this`)
        }
    }
    const handleUpdate = async () =>{
        // console.log('Event ID:', eventId)
        console.log('Form Data:', formData)
        try {
            await axios.put(`http://localhost:8000/patterns/${patternId}`, formData)
            // const updatedEvent = await axios.get(`http://localhost:8000/events/${eventId}`)
            setDetails(formData)
            handleClose()
            window.location.reload()

        } catch (error) {
            console.error('Error updating event!!!!')
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log('handleChange', formData)
    } 

    const booleanChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
        console.log('booleanChange', formData)
    } 

    return (
        <div className ='patternDetail'>
            {/* Delete Modal */}
            <Button variant='primary' onClick ={handleShow}>
                Delete Event
            </Button>
            {
                details != null ? (
            <Modal show={show} onHide={handleClose}>                
                <Modal.Body>Are you sure you would like to delete this event? This process can not be reversed</Modal.Body>
                <Modal.Footer>
                    <Button variant ='secondary' onClick ={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleDelete}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
                ) : (
                    <h1></h1>
                )
            }
            {/*Update Modal*/}
            <Button variant='primary' onClick ={handleUShow}>
                Update Event
            </Button>

            {
                details!= null && venues != null ? ( 
            <Modal show={updateShow} onHide={handleUClose}>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="formVenueName">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                as="select"                                
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                required
                            >
                                {
                                    venues.data.map((venue, index )=> (
                                        <option value={venue.id} key={index}>{venue.id}</option>
                                    ))
                                }
                                </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formArtist">
                            <Form.Label>Artist</Form.Label>
                            <Form.Control
                                type="text"
                                name="artist"
                                value={formData.artist}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formGenre'>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type='text'
                                name='genre'
                                value={formData.genre}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formDate'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                             type='text'
                             name='date'
                             value={formData.date}
                             onChange={handleChange}
                             required
                                // type='date'
                                // name='date'
                                // min="2024-07-19"
                                // max="2025-07-19"
                                // value={FormData.date}
                                // onChange={handleChange}
                                // required
                            />                                 
                        </Form.Group>
                        <Form.Group controlId='formPrice'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='number'
                                name='price'
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formOver18'>
                            <Form.Label>Over 18?</Form.Label>
                            <Form.Check
                                type='checkbox'
                                defaultChecked={details.data.over18 ? true : false}
                                name='over18'
                                value={Boolean(formData.over18)}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formTicket_limit'>
                            <Form.Label>Ticket Limit</Form.Label>
                            <Form.Control
                                type='number'
                                name='ticket_limit'
                                value={formData.ticket_limit}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formImage_url'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                name='image_url'
                                value={formData.image_url}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formVenue_id'>
                            <Form.Label>Venue ID</Form.Label>
                            <Form.Control
                                type='number'
                                name='venue_id'
                                value={formData.venue_id}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        {/* <Form.Group controlId='formVenue_id'>
                            <Form.Label>id</Form.Label>
                            <Form.Control type="text" value={FormData.venue_id} onChange={(e) => setFormData(e.target.value)}  />
                        </Form.Group> */}
                        <Form.Group controlId='formComedy'>
                            <Form.Label>Is Comedy?</Form.Label>
                            <Form.Check
                                type='checkbox'
                                defaultChecked={details.data.comedy ? true : false}
                                name='comedy'
                                value={Boolean(formData.comedy)}
                                onChange={booleanChange}
                                
                            />
                        </Form.Group>
                        <Form.Group controlId='formConcert'>
                            <Form.Label>Is Concert?</Form.Label>
                            <Form.Check
                                type='checkbox'
                                defaultChecked={details.data.concert ? true : false}
                                name='concert'
                                value={Boolean(formData.defaultChecked)}
                                onChange={booleanChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formSport'>
                            <Form.Label>Is Sport?</Form.Label>
                            <Form.Check
                                type='checkbox'
                                defaultChecked={details.data.sport ? true : false}
                                name='sport'
                                value={Boolean(formData.sport)}
                                onChange={booleanChange}
                                
                            />
                        </Form.Group>
                        <Button variant='primary' onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        <Button variant ='secondary' onClick={handleUClose}>
                            Cancel
                        </Button>               
                    </Form>
                </Modal.Body>
            </Modal>
                ) : (
                    <h1></h1>
                )
}
                <h1>EventDetail!</h1>
                {
                    details != null ? (
                    <h1>
                        
                        {details.data.artist}<br />
                        Genre: {details.data.genre}<br />
                        Ticket Price: ${details.data.price}<br />
                        Ticket Limit: {details.data.ticket_limit}
                        </h1>
                    ) : (
                        <h1>Data is not loaded</h1>
                    )
                }
        </div>
    )
}