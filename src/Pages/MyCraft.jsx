import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListCard from "../Components/MyListCard";


const MyCraft = () => {
    const { logged } = useContext(AuthContext);
    const [userData, setUserData] = useState([])
    useEffect(() => {
        if (logged) {
            fetchUserData(logged.email);
        }
    }, [logged]);
    const fetchUserData = async (email) => {
        try {
            const response = await fetch(`https://assignment-10-server-side-sage.vercel.app/users?email=${email}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    return (
        <div>
            <div>
                {logged && (
                    <div>

                        {userData && (
                            <div>
                                <h2 className="text-3xl font-bold text-center  mt-5">My List All Item: {userData.length}</h2>
                                <div className=" p-3 ">
                                    <select className="select select-bordered w-64 text-center join-item bg-[#23BE0A] text-white text-2xl">
                                        <option disabled selected className="text-xl">Filter By Category</option>
                                        <option className="bg-white text-black text-sm text-start">All</option>
                                        <option className="bg-white text-black text-sm text-start">Land Scap drawing</option>
                                        <option className="bg-white text-black text-sm text-start">Portait drawing</option>
                                        <option className="bg-white text-black text-sm text-start">Water Paint</option>
                                        <option className="bg-white text-black text-sm text-start">Oil Paint</option>
                                        <option className="bg-white text-black text-sm text-start">Charcoal sketching</option>
                                        <option className="bg-white text-black text-sm text-start">Cartoon drawing</option>
                                    </select>
                                </div>
                                <div className="mt-2">
                                    {userData.map(item => (
                                        <MyListCard key={item._id} item={item} userData={userData} setUserData={setUserData} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
                
            </div>

        </div>
    );
};

export default MyCraft;