import { useEffect } from "react";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { CardList } from "../components/CardList";
import { getPeople, getPlanets, getVehicles } from "../actions";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        if (store.people.length === 0) getPeople(dispatch);
        if (store.planets.length === 0) getPlanets(dispatch);
        if (store.vehicles.length === 0) getVehicles(dispatch);
    }, [dispatch, store.people, store.planets, store.vehicles]);

    return (
        <div className="container mt-5">
            <CardList title="Characters" items={store.people} type="people" />
            <CardList title="Planets" items={store.planets} type="planets" />
            <CardList title="Vehicles" items={store.vehicles} type="vehicles" />
        </div>
    );
};

