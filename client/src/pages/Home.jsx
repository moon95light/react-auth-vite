import React from 'react';
import { Spinner, Badge } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <h1>
                My React App (AUTH + CRUD) <Badge bg="secondary">New</Badge>
            </h1>
            <Spinner animation="border" variant="success" />
        </>
    );
}
