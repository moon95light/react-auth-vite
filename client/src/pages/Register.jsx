import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data
        try {
            const { data } = await axios.post('/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login Successful!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Form onSubmit={registerUser}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Enter the name..." value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="Enter the email..." value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Enter the password..." value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    </Col>
                </Form.Group>

                <Button type='submit'> Register </Button>
            </Form>
        </div >
    )
}