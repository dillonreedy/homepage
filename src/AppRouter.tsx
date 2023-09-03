import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home";


const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/landing" element={<Landing />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/homepage" element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;