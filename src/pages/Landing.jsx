import { Link } from "react-router-dom";
import yodaImg from "../assets/img/yoda.png";

export const Landing = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-dark text-warning">
            <img 
                src={yodaImg} 
                alt="Yoda" 
                style={{ height: "400px", width: "auto", marginBottom: "20px" }}
            />
            <h1 className="mb-3">¡Que la fuerza te acompañe!</h1>
            <p className="lead mb-4">Explora personajes, planetas y vehículos del universo Star Wars.</p>
            <Link to="/home" className="btn btn-warning btn-lg">
                Explorar Universo
            </Link>
        </div>
    );
};
