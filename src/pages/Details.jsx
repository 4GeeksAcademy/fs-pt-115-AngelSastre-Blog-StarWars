import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { getDetail } from "../actions";
import placeholderImage from "../assets/img/placeholder.png";

export const Details = () => {
    const { type, id } = useParams();
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getDetail(dispatch, type, id);
    }, [type, id, dispatch]);

    const item = store.detail;

    if (!item || Object.keys(item).length === 0) {
        return <p className="text-center text-light mt-5">Loading details...</p>;
    }

    return (
        <div className="container text-light mt-5">
            {/* Imagen y descripción */}
            <div className="row mb-4">
                <div className="col-md-5 text-center">
                    <img
                        src={placeholderImage}
                        alt={item.name}
                        className="img-fluid border border-warning rounded"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-7">
                    <h1 className="text-warning text-center mt-4 mb-4">{item.name}</h1>
                    <p className="text-center">
                        {item.description ||
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit vitae justo facilisis fringilla."}
                    </p>
                </div>
            </div>

            {/* Línea amarilla */}
            <hr className="border-warning mb-4" style={{ height: "2px", opacity: "1" }} />

            {/* Datos en columnas */}
            <div className="row text-center">
                <div className="col text-warning">
                    <p className="mb-1 fw-bold">Name</p>
                    <p className="text-light">{item.name || "N/A"}</p>
                </div>
                <div className="col text-warning">
                    <p className="mb-1 fw-bold">Birth Year</p>
                    <p className="text-light">{item.birth_year || "N/A"}</p>
                </div>
                <div className="col text-warning">
                    <p className="mb-1 fw-bold">Gender</p>
                    <p className="text-light">{item.gender || "N/A"}</p>
                </div>
                <div className="col text-warning">
                    <p className="mb-1 fw-bold">Height</p>
                    <p className="text-light">{item.height || "N/A"}</p>
                </div>
                <div className="col text-warning">
                    <p className="mb-1 fw-bold">Skin Color</p>
                    <p className="text-light">{item.skin_color || "N/A"}</p>
                </div>
                <div className="col text-warning">
                    <p className="mb-1 fw-bold">Eye Color</p>
                    <p className="text-light">{item.eye_color || "N/A"}</p>
                </div>
            </div>
        </div>
    );
};
