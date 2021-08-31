import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { countNum } from '../actions/index';

function CardDisplay() {
    const dispatch = useDispatch();
    return (
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => dispatch(countNum())}>Add To Card</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardDisplay
