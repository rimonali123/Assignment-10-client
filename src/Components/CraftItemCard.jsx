import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const CraftItemCard = ({data}) => {
    const {image, item, description, _id} = data;
    console.log(data)
    return (
        <div data-aos="zoom-in" data-aos-duration="1500">
            
            <div className="card mt-10 bg-base-100 border hover:scale-105 shadow-xl h-[450px]">
                <figure className=" pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl h-44 w-80 mx-auto border" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{item}</h2>
                    <p>{description.slice(0, 52)}.</p>
                    <div className="card-actions">
                        <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
CraftItemCard.propTypes = {
    data: PropTypes.object.isRequired,
  };

export default CraftItemCard;