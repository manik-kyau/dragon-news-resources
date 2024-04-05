import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-5">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn w-full text-base text-blue-400">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn w-full text-base">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>

            <div>
                <h2 className="text-xl font-semibold mt-10 mb-6">Find Us On</h2>
                <div className="border rounded-md">
                    <button className="py-3 px-2 border-b flex gap-2 items-center w-full">
                        <FaFacebookF className="text-blue-500"></FaFacebookF>
                        Facebook
                    </button>
                    <button className="py-3 px-2 border-b flex gap-2 items-center w-full">
                        <FaTwitter className="text-blue-500"></FaTwitter>
                        Twitter
                    </button>
                    <button className="py-3 px-2 flex gap-2 items-center w-full">
                        <FaInstagram className="text-red-500"></FaInstagram>
                        Instagram
                    </button>
                </div>
            </div>
            {/* Q Zone */}
            <div className=" my-8 space-y-5 bg-gray-100 pt-5">
                <h2 className="px-5 text-2xl font-semibold">Q Zone</h2>
                <div className="border-dashed border-2">
                    <img src={QZone1} alt="" />
                </div>
                <div className="border-dashed border-2">
                    <img src={QZone2} alt="" />
                </div>
                <div className="border-dashed border-2">
                    <img src={QZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;