
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const AllCraftTable = ({ allData }) => {
    return (
        <div>
             <Helmet>
                <title>Awasome Craft Store | All Art & Craft item table</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-sm lg:text-xl">
                            <th></th>
                            <th className="">User Name</th>
                            <th>Item Name</th>
                            <th className="">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            allData.map(data =>  
                            
                            <tr key={data._id}>
                                <th></th>
                                <td className="">{data.name}</td>
                                <td>{data.item}</td>
                                <td className="">{data.status}</td>
                                <Link to={`/viewDetails/${data._id}`}><td className="text-sm lg:text-xl">View Details</td></Link>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
AllCraftTable.propTypes = {
    allData: PropTypes.object.isRequired,
  };

export default AllCraftTable;