import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const mainServices = services.slice(0, 6);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className="py-5 services container">
                <h2 className="pt-4">Oculus Optics</h2>
                <p className="pb-5">A selection of essential, tailored sunglasses that allow you to  transition. See our newest collection.</p>
                <Row xs={1} md={3} className="g-2">

                    {
                        mainServices.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </Row>

            </div>

        </div >
    );
};

export default Services;