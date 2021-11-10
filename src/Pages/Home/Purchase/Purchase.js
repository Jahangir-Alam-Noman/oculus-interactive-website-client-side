import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`/services.json/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div>
            <h2 className="pt-5 mt-5">Hello I am from purchase : {details.length}</h2>
            <div className="col-12 col-md-6 px-5 col-lg-6">
                <img src={details?.img} className="img-fluid pt-3" alt="" />
                <h2 className="details_headline">{details?.name}</h2>
                <h5 className="text-warning fw-bolder">Price : $ {details?.price}</h5>
                <p className="text-start"> {details?.description} .</p>

            </div>


        </div>
    );
};

export default Purchase;