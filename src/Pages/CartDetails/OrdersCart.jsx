import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const OrdersCart = ({ order, setOrders, orders }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, img, serviceTitle, price, date, status } = order;

    const handleDelete = (id) => {
        // console.log("delete", id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-m-69.vercel.app/bookings/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                        }
                        // eslint-disable-next-line react/prop-types
                        const remaining = orders.filter(or => or._id !== id);
                        setOrders(remaining)
                    })
            }
        })
    };

    const handlePending = id => {
        console.log(id)
        fetch(`https://car-doctor-server-m-69.vercel.app/bookings/${_id}`,{
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status: "Approved"})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                // eslint-disable-next-line react/prop-types
                const remaining = orders.filter(or => or._id !== id);
                // eslint-disable-next-line react/prop-types
                const updated = orders.find(or => or._id == id);
                updated.status = "Approved"
                const newBookings = [updated, ...remaining] 
                setOrders(newBookings)
            }
        })
    }

    return (
        <table className="table w-full">
            <tbody>
                <tr>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="rounded w-24 h-24">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{serviceTitle}</div>
                                <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                    </td>
                    <td>${price}</td>
                    <td>{date}</td>
                    <th>
                        {
                            status == "Approved" ? 
                            <span className="font-bold text-primary">Approved</span> :
                            <button onClick={()=> handlePending(_id)} className="btn btn-error btn-xs">Pending</button>
                        }
                        
                    </th>
                </tr>
            </tbody>
        </table>
    );
};

export default OrdersCart;