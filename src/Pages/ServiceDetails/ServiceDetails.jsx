import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png"

const ServiceDetails = () => {
    const service = useLoaderData();
    // console.log(service)
    return (
        <div className="mt-12">
            <div className="relative">
                <img className="w-full" src={banner} alt="" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 bottom-0 left-0 right-0 flex items-center rounded-lg">
                    <h2 className=" ms-10 text-5xl text-white top-0 bottom-0">Service Details : {service.title}</h2>
                </div>
            </div>
            <Link to={`/checkout/${service._id}`}>
                <button className="btn btn-error mt-12">Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;