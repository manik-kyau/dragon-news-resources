import { Link, NavLink } from "react-router-dom";
import userss from '../../../assets/userss.png';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const NavBar = () => {

    const { user,logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error))
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="mb-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Dragon-News</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="" alt={userss} />
                        </div>
                    </div>
                    {
                        user ?
                            <button onClick={handleSignOut} className="bg-[#403F3F] py-2 px-10 text-white rounded">LogOut</button>
                            :
                            <Link to='/login'>
                                <button className="bg-[#403F3F] py-2 px-10 text-white rounded">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;