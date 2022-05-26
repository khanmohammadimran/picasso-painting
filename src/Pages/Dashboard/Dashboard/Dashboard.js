import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init'
import useAdmin from '../../../Hooks/useAdmin'
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    console.log(admin)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashSidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
                <h2 className="btn btn-ghost normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-8">Weolcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side text-slate-600 text-xl font-raleway">
                <label htmlFor="dashSidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>
                    {admin && <li><Link to="/dashboard/myprofile">My Profile</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;