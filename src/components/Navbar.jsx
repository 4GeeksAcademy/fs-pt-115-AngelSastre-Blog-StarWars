import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { removeFavorite } from "../actions";
import starwarsLogo from "../assets/img/starwars-logo-transp.png";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemove = (fav) => {
        removeFavorite(dispatch, fav);
    };

    return (
        <nav className="navbar navbar-dark bg-black px-3 fixed-top shadow-sm border-bottom-yellow">
            <Link to="/">
                <img
                    src={starwarsLogo}
                    alt="Star Wars Logo"
                    style={{ height: "70px", objectFit: "contain" }}
                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites {store.favorites.length}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-center">(empty)</li>
                        ) : (
                            store.favorites.map((fav, index) => (
                                <li
                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                    key={index}
                                >
                                    {fav}
                                    <i
                                        className="fas fa-trash text-danger ms-2 delete-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemove(fav);
                                        }}
                                    ></i>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
