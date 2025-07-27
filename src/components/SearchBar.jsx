import React, { useState } from "react";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const { store } = useGlobalReducer();
    const navigate = useNavigate();

    const allItems = [
        ...store.people.map(item => ({ ...item, type: "people" })),
        ...store.planets.map(item => ({ ...item, type: "planets" })),
        ...store.vehicles.map(item => ({ ...item, type: "vehicles" })),
    ];

    const filteredItems = query
        ? allItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    const handleSelect = (item) => {
        navigate(`/details/${item.type}/${item.uid}`);
        setQuery(""); // Limpia el input
    };

    return (
        <div className="position-relative" style={{ width: "250px" }}>
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {filteredItems.length > 0 && (
                <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
                    {filteredItems.map((item) => (
                        <li
                            key={`${item.type}-${item.uid}`}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleSelect(item)}
                            style={{ cursor: "pointer" }}
                        >
                            {item.name} <small className="text-muted">({item.type})</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
