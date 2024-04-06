import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NavBar from "../Shared/NavBar/NavBar";

const News = () => {
    const { id }= useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2>News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;