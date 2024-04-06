import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {userSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        userSignIn(email, password)
        .then(result =>{
            console.log(result.user);

            // Navigate after log in
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className='mt-8'>
        <NavBar></NavBar>
            <div className="my-8 flex justify-center">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Log In</h1>
                        <p className="text-sm text-gray-400">Log in to access your account</p>
                    </div>
                    <form onSubmit={handleLogIn} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" placeholder="Enter Email:" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                                </div>
                                <input type="password" name="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <input type="submit" value='Login' className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                            <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                                <Link to='/register' className="hover:underline text-violet-400 ml-2">Register</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;