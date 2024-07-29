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
    const [profiles,setProfiles] = useState(null)   
    const [formData, setFormData] = useState({
       
        name: '',
        description: '',
        profile: "",
        techniques: [],
    })
    let { patternID } = useParams()
    const navigate = useNavigate()
    useEffect(() =>{    
            const getDetail = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/patterns/${patternID}`)
                    setDetails(response)
                    
                    const responseData = response.data
                    {
                    setFormData({
                        name: responseData.name,
                        description: responseData.description,
                        profile : responseData.description,
                        techniques: responseData.techniques,
                        })
                    }
                    const getProfile = async () => {
                        try {
                            const profileResponse = await axios.get(`${details.data.profile}`)
                            setProfiles(profileResponse)
                        } catch (error) {
                            console.error('Cannot load profiles', error)

                        }

                    }
                    getProfile()
                    

                } catch (error) {
                    console.error('Cannot load details', error)
                }                
            }
            getDetail()
        },[])
    console.log('details',details)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleUClose = () => setUpdateShow(false)
    const handleUShow = () => setUpdateShow(true)
    const handleDelete = async () =>{
        try {
            console.log('patternId', patternID)
            await axios.delete(`http://localhost:8000/patterns/${patternID}`)
            navigate('/patterns')
        } catch (error) {
            console.error(`nah nah nah nah, nah nah, nah nah, can't delete this`)
        }
    }
    const handleUpdate = async () =>{
        
        console.log('Form Data:', formData)
        try {
            await axios.patch(`http://localhost:8000/patterns/${patternID}`, formData)            
            setDetails(formData)
            handleClose()
            window.location.reload()

        } catch (error) {
            console.error('Error updating pattern!!!!')
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
                Delete Pattern
            </Button>
            {
                details != null ? (
            <Modal show={show} onHide={handleClose}>                
                <Modal.Body>Are you sure you would like to delete this pattern? This process can not be reversed</Modal.Body>
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
                Update Pattern
            </Button>

            {
                details!= null  ? ( 
            <Modal show={updateShow} onHide={handleUClose}>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>                       
                        <Form.Group controlId="formName">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId='formDescription'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type='text'
                                name='description'
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />     
                        </Form.Group>
                        <Form.Group controlId='formTechniques'>
                            <Form.Label>Techniques</Form.Label>
                            <Form.Control
                                type="text"
                                name="techniques"
                                value={formData.techniques}
                                onChange={handleChange}
                                required
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
                <h1>Pattern Detail!</h1>
                {
                    details != null ? (
                    <h1>
                        
                        {details.data.artist}<br />
                        Title: {details.data.name}<br />
                        {details.data.description}<br />
                        Techniques: {details.data.ticket_limit}
                        </h1>
                    ) : (
                        <h1>Data is not loaded</h1>
                    )
                }
        </div>
    )
}