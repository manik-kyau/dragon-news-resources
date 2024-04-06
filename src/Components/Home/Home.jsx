import { useLoaderData } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div className="poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-12">
                <div className="border-2 p-5 rounded-lg">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News Container */}
                <div className="border-2 col-span-1 lg:col-span-2 p-5 rounded-lg">
                    {
                        news.map((aNews, idx)=><NewsCard key = {idx} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div className="border-2 p-5 rounded-lg">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;