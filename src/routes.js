import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./Components/Header";
import Erro404 from "./pages/erro404";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />

                <Route path="*" element={<Erro404 />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;