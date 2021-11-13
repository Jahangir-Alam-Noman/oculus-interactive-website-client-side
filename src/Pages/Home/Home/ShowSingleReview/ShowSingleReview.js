import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import './ShowSingleReview.css';

const ShowSingleReview = ({ review }) => {
    const { rating, comments } = review;
    return (
        <div className=" col-md-4 col-sm-12 col-12 mb-4 ">
            <div className="serv-section-2">
                <div className="serv-section-2-icon"> <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="serv-section-desc">
                    <h5 className="fw-bolder">Rating : {rating}/5</h5> </div>
                {/* <p>{comments}.</p> */}
                <p>{comments.slice(0, 50)}.</p>
                <div className="section-heading-line-left"></div>
            </div>
        </div>

    );
};

export default ShowSingleReview;