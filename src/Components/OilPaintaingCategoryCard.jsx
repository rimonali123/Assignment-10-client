import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const OilPaintaingCategoryCard = ({data}) => {
    const { image, item, description, _id, price, category, rating, time } = data;
    return (
        <div>
             <Helmet>
                <title>Awasome Craft Store | Oil painting Category Card</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1500">
                <div className="card mt-10 bg-base-100 border hover:scale-105 shadow-xl lg:h-[650px] ">
                    <figure className=" pt-5">
                        <img src={image} alt="Shoes" className="rounded-xl h-44 w-80 mx-auto border" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">{item}</h2>
                        <h2 className="text-base font-bold">{category}</h2>
                        <p>{description}</p>
                        <p className="text-xl font-bold">Price : {price} $</p>
                        <p className="text-xl font-bold">Rating : {rating} $</p>
                        <p className="text-base font-bold">Processing Time : {time}</p>
                        <div className="card-actions">
                            <Link to={`/CharcoalSketchingDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
OilPaintaingCategoryCard.propTypes = {
    data: PropTypes.object.isRequired
  };

export default OilPaintaingCategoryCard;