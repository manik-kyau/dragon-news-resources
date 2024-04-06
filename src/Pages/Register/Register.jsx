import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        // Create User
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="mt-8">
            <NavBar></NavBar>
            <div className="my-8">
                <section className="p-6 text-gray-100">
                    <form onSubmit={handleRegister} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900">
                        <h2 className="w-full text-3xl font-bold leading-tight">Registration Now</h2>
                        <div>
                            <label className="block mb-1 ml-1">Name</label>
                            <input type="text" name='name' placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Photo URL</label>
                            <input type="text" name='photo' placeholder="Photo URL" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Email</label>
                            <input type="email" name="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Email</label>
                            <input type="password" name="password" placeholder="Your Password" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                        </div>
                        <div>
                            <input type="submit" value='Register' className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-green-600 cursor-pointer" />
                        </div>
                        <p className="text-sm">Already have an account 
                            <Link to='/login' className="ml-2 text-lg font-bold text-blue-600">Login Now</Link>
                        </p>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Register;