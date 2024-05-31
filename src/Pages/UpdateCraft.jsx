
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCraft = () => {
    const allData = useLoaderData();
    const {_id, item, category, price, rating, description, time, status, customize, image } = allData;

    const handleUpdate = e => {

        e.preventDefault();
        const item = e.target.item.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const time = e.target.time.value;
        const status = e.target.status.value;
        const customize = e.target.customize.value;
        const image = e.target.image.value;
        const udateCraft = { item, category, price, rating, description, time, status, customize, image };
        console.log(udateCraft);


        fetch(`https://assignment-10-server-side-sage.vercel.app/craft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(udateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Craft item successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })

                }
            })

    }
    return (
        <div className="mb-10">
            <Helmet>
                <title>Awasome Craft Store || Update Craft</title>
            </Helmet>
            <div className="hero w-full">
                <div className="hero-content w-full flex flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Update Your Art & Craft Item</h1>

                    </div>
                    <div className="card  w-full  shadow-2xl bg-[#F4F3F0]">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text" name="item" defaultValue={item} placeholder="item name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="sub category name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="rating" defaultValue={rating} placeholder="your rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input type="text" name="description" defaultValue={description} placeholder="short description at least 200 characters" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Processing Time</span>
                                    </label>
                                    <input type="text" name="time" defaultValue={time} placeholder="processing time" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Stock Status</span>
                                    </label>
                                    <input type="text" name="status" defaultValue={status} placeholder="example- In stock, Made to Order" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Customaization</span>
                                    </label>
                                    <input type="text" name="customize" defaultValue={customize} placeholder="example- Yes or No" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="url" name="image" defaultValue={image} placeholder="use image URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C] font-bold">Update Craft Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCraft;