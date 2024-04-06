import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    console.log(aNews);
    const {_id,title,thumbnail_url,image_url,details} = aNews;
    return (
        <div>
            <div className="card card-compact bg-base-100 hover:shadow-xl mb-14 border">
                <img src={image_url} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200
                        ? <p>{details.slice(0,200)} <Link
                        to={`/news/${_id}`}
                        className=" text-base font-semibold text-red-600">Read More...</Link></p> : <p>{details}</p>
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;