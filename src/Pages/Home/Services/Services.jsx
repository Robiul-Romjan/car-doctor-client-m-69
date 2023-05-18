import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services)

    useEffect(()=> {
        fetch("https://car-doctor-server-m-69.vercel.app/services")
        .then((res)=> res.json())
        .then((data)=> setServices(data))
    }, [])
    return (
        <div className="mt-20">
            <div className="text-center">
                <h4 className="font-bold text-xl text-error">Service</h4>
                <h2 className="text-3xl md:text-5xl font-bold my-5">Our Service Area</h2>
                <p className="px-6">The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16">
                {
                    services.map(service=> <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;