import placeholderImage from "./assets/img/placeholder.png";

/* ===== FETCH PEOPLE ===== */
export const getPeople = async (dispatch) => {
    try {
        const cachedPeople = localStorage.getItem("people");
        if (cachedPeople) {
            dispatch({ type: "SET_PEOPLE", payload: JSON.parse(cachedPeople) });
            return;
        }

        const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=10");
        const data = await response.json();

        const peopleWithImage = data.results.map((person) => ({
            ...person,
            image: placeholderImage
        }));

        dispatch({ type: "SET_PEOPLE", payload: peopleWithImage });
        localStorage.setItem("people", JSON.stringify(peopleWithImage));
    } catch (error) {
        console.error("Error fetching people:", error);
    }
};

/* ===== FETCH PLANETS ===== */
export const getPlanets = async (dispatch) => {
    try {
        const cachedPlanets = localStorage.getItem("planets");
        if (cachedPlanets) {
            dispatch({ type: "SET_PLANETS", payload: JSON.parse(cachedPlanets) });
            return;
        }

        const response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=10");
        const data = await response.json();

        const planetsWithImage = data.results.map((planet) => ({
            ...planet,
            image: placeholderImage
        }));

        dispatch({ type: "SET_PLANETS", payload: planetsWithImage });
        localStorage.setItem("planets", JSON.stringify(planetsWithImage));
    } catch (error) {
        console.error("Error fetching planets:", error);
    }
};

/* ===== FETCH VEHICLES ===== */
export const getVehicles = async (dispatch) => {
    try {
        const cachedVehicles = localStorage.getItem("vehicles");
        if (cachedVehicles) {
            dispatch({ type: "SET_VEHICLES", payload: JSON.parse(cachedVehicles) });
            return;
        }

        const response = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10");
        const data = await response.json();

        const vehiclesWithImage = data.results.map((vehicle) => ({
            ...vehicle,
            image: placeholderImage
        }));

        dispatch({ type: "SET_VEHICLES", payload: vehiclesWithImage });
        localStorage.setItem("vehicles", JSON.stringify(vehiclesWithImage));
    } catch (error) {
        console.error("Error fetching vehicles:", error);
    }
};

/* ===== FETCH DETAIL ===== */
export const getDetail = async (dispatch, type, id) => {
    try {
        const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
        const data = await response.json();

        const detailData = {
            ...data.result.properties,
            description: data.result.description
        };

        dispatch({ type: "SET_DETAIL", payload: detailData });
    } catch (error) {
        console.error(`Error fetching ${type} details:`, error);
    }
};



/* ===== FAVORITES ===== */
export const addFavorite = (dispatch, favorite) => {
    dispatch({ type: "ADD_FAVORITE", payload: favorite });
};

export const removeFavorite = (dispatch, favorite) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: favorite });
};



export const getImageUrl = (type, id) => {
    return `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${type}/${id}.jpg`;
};
