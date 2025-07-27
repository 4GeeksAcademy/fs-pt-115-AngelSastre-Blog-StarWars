import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { addFavorite } from "../actions";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/img/placeholder.png";

export const Card = ({ item, type }) => {
    const { dispatch } = useGlobalReducer();

    const handleAddFavorite = () => {
        addFavorite(dispatch, item.name);
    };

    return (
        <div className="card starwars-card text-light p-2 mt-2">
            <img
                src={item.image || placeholderImage}
                alt={item.name}
                className="card-img-top img-fluid mb-2"
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title text-warning">{item.name}</h4>
                <div className="d-flex justify-content-between">
                    {/* Link hacia Details con el type y uid */}
                    <Link to={`/details/${type}/${item.uid}`}>
                        <button className="btn btn-warning btn-sm">Learn More!</button>
                    </Link>
                    <button 
                        className="btn btn-outline-warning btn-sm"
                        onClick={handleAddFavorite}
                    >
                        ❤
                    </button>
                </div>
            </div>
        </div>
    );
};
