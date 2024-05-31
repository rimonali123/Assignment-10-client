

import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';


const MyListCard = ({ item, userData, setUserData }) => {
    console.log(item)
    const { image, price, rating, customize, status, _id } = item;

    const handlaeDelete = _id => {
        console.log("delete button clicked by ", _id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
               
                fetch(`https://assignment-10-server-side-sage.vercel.app/craft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            const remaining = userData.filter(data => data._id !== _id);
                            setUserData(remaining);
                        }
                    })
            }
        });

    }
    return (
        <div className="mb-10">
             <Helmet>
                <title>Awasome Craft Store | My Art & Craft Section</title>
            </Helmet>
            
            <div>
                <div className="hero mt-5 border-2 border-green-500 rounded-xl bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="">
                            <img src={image} className="lg:w-[270px] w-[500px] h-[270px] lg:h-[200px] rounded-lg shadow-2xl" />
                        </div>
                        <div className=" lg:w-[1000px]">
                            <h1 className="text-3xl font-bold">{item.item}</h1>
                            <p className="py-6"> </p>
                            <div className="lg:flex  gap-10">
                                <p className="flex gap-2 items-center"> <span className="font-bold">Price:</span> {price} $</p>
                                <p className="flex gap-2 items-center"> <span className="font-bold">Rating: </span>{rating} <IoIosStar className="text-orange-400" /> </p>
                                <p> <span className="font-bold">Customaization: </span>{customize} </p>
                                <p> <span className="font-bold">StockS tatus: </span>{status} </p>
                            </div>

                            <div className="lg:flex gap-8 justify-center md:flex md:gap-10 space-x-1 mt-5 ">
                                <Link
                                    to={`/viewDetails/${_id}`}
                                    className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
                                >
                                    View Details
                                </Link>
                                <Link
                                    to={`/updateCraft/${_id}`}
                                    className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                                    Update
                                </Link>
                                <button
                                    onClick={() => handlaeDelete(_id)}
                                    className="btn lg:w-[200px] w-20 bg-red-500 text-xl text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MyListCard.propTypes = {
    item: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
    setUserData: PropTypes.object.isRequired,
  };

export default MyListCard;







{/* <div>
    
</div> */}