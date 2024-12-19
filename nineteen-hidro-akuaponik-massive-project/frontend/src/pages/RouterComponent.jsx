import { BrowserRouter as Router, Route, Outlet, Link, Routes } from "react-router-dom";
import Home from "./Home"
import Login from './Login'
import Register from './SignUp'

const menu = [
    {label: 'Home',
        path: '/Home',
        element: <Home />
    },
    {label: 'signin',
        path: '/signin',
        element: <Login />
    },
    {label: 'signup',
        path: '/signup',
        element: <Register />
    },
]
const RouterComponent = () => {
    return (
        <Router>
            <Routes>
            {menu.map((item, index) =>  <Route key={index} path={item.path} element={item.element} />)}
            <Route exact path="/Home" element={<Home/>} />
            </Routes>
        </Router>
    )
}
export default RouterComponent;