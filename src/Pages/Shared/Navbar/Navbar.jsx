import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";


const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);


    if (loading) {
        return "loading"
    }

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const menu = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/">About</Link> </li>
        {
            user ?
                <li>
                    <Link to="/cartDetails">
                        Review Orders
                    </Link>
                </li> :
                <li>
                    <Link to="/login">
                        Sign In
                    </Link>
                </li>
        }
    </>;


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case h-20">
                        <img className="h-16" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div >
                        {
                            user?.photoURL ?
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0}>
                                        <p data-tip={user?.displayName} className="tooltip tooltip-left">
                                            <img className="w-[50px] h-[50px] border-red-300 border-2 rounded-full mr-5" src={user?.photoURL} />
                                        </p>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-52">
                                        <li><Link>Profile</Link></li>
                                        <li className="mt-3">
                                            <Link onClick={handleLogout}>Log Out</Link>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <FaUserAlt className="w-[50px] h-[50px] border-red-300 border-2 rounded-full mr-5" />
                        }
                    </div>
                    <a className="btn btn-outline btn-error">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;