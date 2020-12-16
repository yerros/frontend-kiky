/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-sidebar-brand">
                <a href="html/index.html" className="logo-link nk-sidebar-logo">
                    <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                    <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                    <img className="logo-small logo-img logo-img-small" src="./images/logo-small.png" srcSet="./images/logo-small2x.png 2x" alt="logo-small" />
                </a>
                </div>
                <div className="nk-menu-trigger mr-n2">
                <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left" /></a>
                <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
                </div>
            </div>{/* .nk-sidebar-element */}
            <div className="nk-sidebar-element">
                <div className="nk-sidebar-content">
                <div className="nk-sidebar-menu" data-simplebar>
                    <ul className="nk-menu">
                    <li className="nk-menu-heading">
                        <h6 className="overline-title text-primary-alt">Menu</h6>
                    </li>{/* .nk-menu-item */}
                    <li className="nk-menu-item">
                        <Link to="/" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-home-fill" /></span>
                        <span className="nk-menu-text">Dashboard</span>
                        </Link>
                    </li>{/* .nk-menu-item */}
                    <li className="nk-menu-item">
                        <Link to="/orders" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-cart-fill" /></span>
                        <span className="nk-menu-text">Orders</span>
                        </Link>
                    </li>{/* .nk-menu-item */}
                    <li className="nk-menu-item">
                        <Link to="/transactions" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-wallet-fill" /></span>
                        <span className="nk-menu-text">Transactions</span>
                        </Link>
                    </li>{/* .nk-menu-item */}
                    <li className="nk-menu-item">
                        <Link to="/users" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-users-fill" /></span>
                        <span className="nk-menu-text">Users</span>
                        </Link>
                    </li>{/* .nk-menu-item */}
                    <li className="nk-menu-item">
                        <a href="html/index-analytics.html" className="nk-menu-link">
                        <span className="nk-menu-icon"><em className="icon ni ni-setting-fill" /></span>
                        <span className="nk-menu-text">Setting</span>
                        </a>
                    </li>{/* .nk-menu-item */}
                    </ul>{/* .nk-menu */}
                </div>{/* .nk-sidebar-menu */}
                </div>{/* .nk-sidebar-content */}
            </div>{/* .nk-sidebar-element */}
        </div>

    )
}
