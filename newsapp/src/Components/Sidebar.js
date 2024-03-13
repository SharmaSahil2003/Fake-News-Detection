import React from 'react';
import './sidebar.css';
import {Link, Outlet} from 'react-router-dom';
export const Sidebar = () => {
  return (
    <>
    <button className="btn btn-primary category row col-md-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-justify fs-3"></i></button>
    <div className="offcanvas offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header sidetitle">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">News Categories</h5>
    <button type="button" className="btn close btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
  </div>
  <div className="offcanvas-body sidebody">
    <ul className="nav nav-pills flex-column" id="menu">
    <li className="mb-2 liitem">
        <Link to="/News/General" className="nav-link "><i className="bi bi-house-door fs-4"></i> General</Link>
    </li>
    <li className="mb-2 liitem">
        <Link to="/News/Business" className="nav-link "><i className="bi bi-building fs-4"></i> Business</Link>
    </li>
    <li className="mb-2 liitem">
        <Link to="/News/Entertainment" className="nav-link "><i className="bi bi-music-note fs-4"></i> Entertainment</Link>
    </li>
    <li className="mb-2 liitem">
        <Link to="/News/Health" className="nav-link "><i className="bi bi-heart-fill fs-4"></i> Health</Link>
    </li>
    <li className="mb-2 liitem">
        <Link to="/News/Science" className="nav-link "><i className="bi bi-lightning-charge-fill fs-4"></i> Science</Link>
    </li>
    <li className="mb-2 liitem">
        <Link to="/News/Sports" className="nav-link "><i className="bi bi-trophy fs-4"></i> Sports</Link>
    </li>
    <li className="mb-2 liitem">
        <Link to="/News/technology" className="nav-link "><i className="bi bi-ev-front-fill fs-4"></i> Technology</Link>
    </li>
    </ul>
  </div>
</div>
<Outlet/>
</>
  )
}

export default Sidebar;