import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(response => response.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl">All Categories</h2>
            <div>
                {
                    categories.map( (category,idx) => <NavLink
                    className="block text-xl font-semibold py-2"
                    to={`/category/${category.id}`}
                    key={idx}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;