import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AddCraftFrom = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const item = e.target.item.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const time = e.target.time.value;
        const status = e.target.status.value;
        const customize = e.target.customize.value;
        const image = e.target.image.value;
        const newCraft = { name, email, item, category, price, rating, description, time, status, customize, image };
        console.log(newCraft);

        // send data to server

        fetch('https://assignment-10-server-side-sage.vercel.app/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Art & Craft added successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })

                }
            })
    }
    return (
        <div className="mb-10">
            <Helmet>
                <title>Awasome Craft Store | Art & Craft item add form</title>
            </Helmet>
            <div className="hero w-full">
                <div className="hero-content w-full flex flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Add New Art & Craft Item</h1>

                    </div>
                    <div className="card  w-full  shadow-2xl bg-[#F4F3F0]">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" disabled defaultValue={user?.displayName} placeholder="user name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" disabled defaultValue={user?.email} placeholder="user email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text" name="item" placeholder="item name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="sub category name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="rating" placeholder="your rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="short description at least 200 characters" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Processing Time</span>
                                    </label>
                                    <input type="text" name="time" placeholder="processing time" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Stock Status</span>
                                    </label>
                                    <input type="text" name="status" placeholder="example- In stock, Made to Order" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Customaization</span>
                                    </label>
                                    <input type="text" name="customize" placeholder="example- Yes or No" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="url" name="image" placeholder="use image URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C] font-bold">Add New Craft</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCraftFrom;