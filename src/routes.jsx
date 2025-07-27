import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing"; // Nueva página
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Details } from "./pages/Details";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            {/* Landing Page */}
            <Route index element={<Landing />} /> 

            {/* Otras páginas */}
            <Route path="/home" element={<Home />} />
            <Route path="/single/:theId" element={<Single />} />
            <Route path="/details/:type/:id" element={<Details />} />
            <Route path="/demo" element={<Demo />} />
        </Route>
    )
);
