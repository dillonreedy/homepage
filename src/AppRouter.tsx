import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Particles from "./pages/Particles"
import Home from "./pages/Home";


const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/particles" element={<Particles />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/homepage" element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;