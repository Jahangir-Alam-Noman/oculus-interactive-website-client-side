import axios from 'axios';
import React from 'react';

import './AddProduct.css';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';


const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    }


    return (
        <div className="add_package">
            <h2 className="">Add a new product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    placeholder="name" />
                <textarea {...register("description")} placeholder="description" /> <br />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                {/* <input type="submit" /> */}
                {errors.name && <span className="text-danger">Your name maximum 20 letters</span>}
                {/* <input className="btn btn-primary" type="submit" value="Submit" /> */}
                <button type="submit" class="btn btn-info">Submit </button>

            </form>

        </div>
    );
};

export default AddProduct;