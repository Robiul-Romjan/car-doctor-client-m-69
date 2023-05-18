import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const ProceedCheckout = () => {
    const { user } = useContext(AuthContext);
    const orderServices = useLoaderData();
    const { _id, price, title, img } = orderServices;
    // console.log(orderServices)

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const description = form.description.value;

        const confirmUserOrder = {
            customerName: name,
            date,
            email,
            phone,
            serviceId: _id,
            serviceTitle: title,
            img,
            description,
            price
        };
        // console.log(confirmUserOrder)
        fetch("https://car-doctor-server-m-69.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(confirmUserOrder)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'success!',
                        text: 'Successfully Added Your Request',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            });
            form.reset();
    };

    return (
        <div className="mt-12">

            <div className="relative">
                <img className="w-full" src={banner} alt="" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 bottom-0 left-0 right-0 flex items-center rounded-lg">
                    <h2 className=" ms-10 text-5xl text-white top-0 bottom-0">Check Out</h2>
                </div>
            </div>

            <div className="mt-20">
                <form onSubmit={handleCheckOut} className="bg-[#F3F3F3] rounded-lg py-20 px-10">
                    <div className=" grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="type your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chose Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="type your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="phone" defaultValue={user?.phoneNumber} placeholder="type your number" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-lg" placeholder="your message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error text-white" type="submit" value="Confirm Order" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProceedCheckout;