import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';


interface ILayoutProps {
}

const Layout: React.FunctionComponent<ILayoutProps> = () => {
    return (
        <div className="d-flex flex-column min-vh-100">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/">MessageApp</Link>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/" end>
                            Main
                        </NavLink>
                        <NavLink className="nav-link" to="/create">
                            Create Message
                        </NavLink>
                    </div>
                </div>
            </nav>
            <main className="flex-fill container pt-5 mt-5 pb-4">
                <div className="p-4 bg-white mt-3">
                    <Outlet />
                </div>
            </main>
            <footer className="bg-light border-top py-3 mt-auto">
                <div className="container text-center text-muted">
                    <span>&copy; {new Date().getFullYear()} Demo Aufgabe</span>
                </div>
            </footer>

        </div>
    );
}
export default Layout;