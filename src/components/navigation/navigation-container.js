import React from 'react'
import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";


const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    }

    return(
        <div className="nav-wrapper">
            <div className="nav-link-wrapper">
                <button className="nav-btn">
                    <NavLink exact to="/safety-tracker" activeClassName="nav-link-active">
                        Report a Safety Incident
                    </NavLink>
                </button>
                <button className="nav-btn">
                    <NavLink to="/registration" activeClassName="nav-link-active">
                        New User Registration
                    </NavLink>
                </button>
                <button className="nav-btn">
                    <NavLink to="/all-incident-forms" activeClassName="nav-link-active">
                        All Incident Reports
                    </NavLink>
                </button>
            </div>
        </div>
    )

}
export default withRouter(NavigationComponent);
