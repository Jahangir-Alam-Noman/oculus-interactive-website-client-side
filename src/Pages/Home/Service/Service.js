import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    return (
        <div>
            <Col className="text-start">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="name">{name}</Card.Title>
                        <Card.Text>
                            <p> {description.slice(0, 120)}</p>

                        </Card.Text>
                        <Card.Title>
                            <Link to={`/service/${id}`}>  <button className="btn  btn-outline-info  px-3 py-2">Buy Now </button></Link>

                        </Card.Title>

                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Service;