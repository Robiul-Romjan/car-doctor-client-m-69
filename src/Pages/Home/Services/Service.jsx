import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const {_id ,img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-12 mx-auto">
            <figure><img className="h-52 rounded-lg w-80" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title text-error">Price: ${price}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-error">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;