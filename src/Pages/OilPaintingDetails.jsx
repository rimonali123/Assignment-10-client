import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


const OilPaintingDetails = () => {
    const allData = useLoaderData()
    const { _id } = useParams()
    const data = allData.find((u) => u._id == _id);
    const { image, item, price, rating, category, description, time, status, customize } = data;
    console.log(data)
    return (
      
        <div className="hero min-h-screen">
            <Helmet>
                <title>Awasome Craft Store || View Item Details</title>
            </Helmet>
            <div className="hero-content gap-10 lg:gap-20 flex-col lg:flex-row item-center">
                <div className=" border p-4 rounded-2xl lg:w-[600px]">
                    <img src={image} className=" bg-base-300  py-10 lg:h-[500px]  lg:w-[600px] px-20 lg:py-36  rounded-lg shadow-2xl" />
                </div>
                <div className="border-2 p-3 px-10 rounded-2xl lg:h-[530px] md:w-full lg:w-1/2">
                    <div className="space-y-5">
                       
                        <p className="text-lg lg:text-2xl font-bold ">Craft Item Name : {item}</p>
                        
                    </div>

                    <hr className="w-full border border-dotted mt-5 mb-5" />
                    <div className="flex flex-col space-y-2">
                        <p className="text-base flex"><span className="mr-5 font-bold text-xl">Price:</span>{price}</p>
                        <p className="text-base flex"><span className="mr-5 font-bold text-xl">Category Name :</span>{category}</p>
                        <p className="text-base "><span className="mr-5 font-bold text-xl">Description :</span> <br></br>{description.slice(0,300)}.</p>
                        <p className="text-base flex"><span className="mr-5 font-bold text-xl">User Rating :</span>{rating}</p>
                        <p className="text-base flex"><span className="mr-5 font-bold text-xl">Processing time :</span>{time}</p>
                        <p className="text-base flex"><span className="mr-5 font-bold text-xl">In Stoce Status :</span>{status}</p>
                        <p className="text-base flex"><span className="mr-5 font-bold text-xl">Customaization :</span>{customize}</p>

                        <Link to='/'><button className="btn btn-primary w-full">Back To Home</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OilPaintingDetails;