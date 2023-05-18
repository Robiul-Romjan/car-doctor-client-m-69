
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import banner from "../../assets/images/checkout/checkout.png"
import OrdersCart from "./OrdersCart";

const CartDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // console.log(user)
    const url = `https://car-doctor-server-m-69.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [url, user?.email]);
    // console.log(orders)


    return (
        <div>

            <div className="relative">
                <img className="w-full" src={banner} alt="" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 bottom-0 left-0 right-0 flex items-center rounded-lg">
                    <h2 className=" ms-10 text-5xl text-white top-0 bottom-0">Check Out</h2>
                </div>
            </div>

            <div className="mt-20">
                {
                    loading ?
                        "loading" :
                        orders.map(order => <OrdersCart key={order._id} order={order} setOrders={setOrders} orders={orders} />)
                }
            </div>

        </div>
    );
};

export default CartDetails;