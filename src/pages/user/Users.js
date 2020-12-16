/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import UsersModal from './UsersModal'

export default class Users extends Component {
    render() {
        return (
            <div className="nk-content ">
                <UsersModal />
                <div className="container-fluid">
                <div className="nk-content-inner">
                <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                        <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">User Lists</h3>
                        <div className="nk-block-des text-soft">
                            <p>You have total 2,595 users.</p>
                        </div>
                        </div>{/* .nk-block-head-content */}
                        <div className="nk-block-head-content">
                        <div className="toggle-wrap nk-block-tools-toggle">
                            <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em className="icon ni ni-more-v" /></a>
                            <div className="toggle-expand-content" data-content="more-options">
                            <ul className="nk-block-tools g-3">
                                <li>
                                <div className="form-control-wrap">
                                    <div className="form-icon form-icon-right">
                                    <em className="icon ni ni-search" />
                                    </div>
                                    <input type="text" className="form-control" id="default-04" placeholder="Search by name" />
                                </div>
                                </li>
                                <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white" data-toggle="dropdown">Status</a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>Actived</span></a></li>
                                        <li><a href="#"><span>Inactived</span></a></li>
                                        <li><a href="#"><span>Blocked</span></a></li>
                                    </ul>
                                    </div>
                                </div>
                                </li>
                                <li className="nk-block-tools-opt">
                                <a href="#" className="btn btn-icon btn-primary d-md-none"><em className="icon ni ni-plus" /></a>
                                <a href="#" className="btn btn-primary d-none d-md-inline-flex" data-toggle="modal" data-target="#modalForm"><em className="icon ni ni-plus" /><span>Add</span></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>{/* .nk-block-head-content */}
                    </div>{/* .nk-block-between */}
                    </div>{/* .nk-block-head */}
                    <div className="nk-block">
                    <div className="nk-tb-list is-separate mb-3">
                        <div className="nk-tb-item nk-tb-head">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid" />
                            <label className="custom-control-label" htmlFor="uid" />
                            </div>
                        </div>
                        <div className="nk-tb-col"><span className="sub-text">User</span></div>
                        <div className="nk-tb-col tb-col-mb"><span className="sub-text">Ordered</span></div>
                        <div className="nk-tb-col tb-col-md"><span className="sub-text">Phone</span></div>
                        <div className="nk-tb-col tb-col-lg"><span className="sub-text">Country</span></div>
                        <div className="nk-tb-col tb-col-lg"><span className="sub-text">Last Order</span></div>
                        <div className="nk-tb-col tb-col-md"><span className="sub-text">Status</span></div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1 my-n1">
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger mr-n1" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="#"><em className="icon ni ni-mail" /><span>Send Email to All</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend Selected</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-trash" /><span>Remove Seleted</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Password</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid1" />
                            <label className="custom-control-label" htmlFor="uid1" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <a href="html/ecommerce/customer-details.html">
                            <div className="user-card">
                                <div className="user-avatar bg-primary">
                                <span>AB</span>
                                </div>
                                <div className="user-info">
                                <span className="tb-lead">Abu Bin Ishtiyak <span className="dot dot-success d-md-none ml-1" /></span>
                                <span>info@softnio.com</span>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">35,040.34 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+811 847-4958</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>United State</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>10 Feb 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-success">Active</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid2" />
                            <label className="custom-control-label" htmlFor="uid2" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <a href="html/ecommerce/customer-details.html">
                            <div className="user-card">
                                <div className="user-avatar">
                                <img src="./images/avatar/a-sm.jpg" alt="" />
                                </div>
                                <div className="user-info">
                                <span className="tb-lead">Ashley Lawson <span className="dot dot-warning d-md-none ml-1" /></span>
                                <span>ashley@softnio.com</span>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">580.00 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+124 394-1787</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>United Kindom</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>07 Feb 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-warning">Pending</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid3" />
                            <label className="custom-control-label" htmlFor="uid3" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <a href="html/ecommerce/customer-details.html">
                            <div className="user-card">
                                <div className="user-avatar bg-info">
                                <span>JL</span>
                                </div>
                                <div className="user-info">
                                <span className="tb-lead">Joe Larson <span className="dot dot-success d-md-none ml-1" /></span>
                                <span>larson@example.com</span>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">32,000.34 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+168 603-2320</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>India</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>04 Feb 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-success">Active</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid4" />
                            <label className="custom-control-label" htmlFor="uid4" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar bg-danger">
                                <span>JM</span>
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Jane Montgomery <span className="dot dot-danger d-md-none ml-1" /></span>
                                <span>jane84@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">0.00 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+439 271-5360</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>Canada</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>01 Feb 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-danger">Suspend</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid5" />
                            <label className="custom-control-label" htmlFor="uid5" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar">
                                <img src="./images/avatar/b-sm.jpg" alt="" />
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Frances Burns <span className="dot dot-success d-md-none ml-1" /></span>
                                <span>frances@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">42.50 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+639 130-3150</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>Australia</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>31 Jan 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-success">Active</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid6" />
                            <label className="custom-control-label" htmlFor="uid6" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar">
                                <img src="./images/avatar/c-sm.jpg" alt="" />
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Alan Butler <span className="dot dot-info d-md-none ml-1" /></span>
                                <span>butler@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">440.34 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+963 309-1706</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>United State</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>18 Jan 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-info">Inactive</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid7" />
                            <label className="custom-control-label" htmlFor="uid7" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar bg-warning">
                                <span>VL</span>
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Victoria Lynch <span className="dot dot-success d-md-none ml-1" /></span>
                                <span>victoria@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">59,400.68 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+811 985-4846</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>India</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>15 Jan 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-success">Active</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid8" />
                            <label className="custom-control-label" htmlFor="uid8" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar bg-success">
                                <span>PN</span>
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Patrick Newman <span className="dot dot-success d-md-none ml-1" /></span>
                                <span>patrick@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">30.00 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+942 238-4474</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>United Kindom</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>08 Jan 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-success">Active</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid9" />
                            <label className="custom-control-label" htmlFor="uid9" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar">
                                <img src="./images/avatar/d-sm.jpg" alt="" />
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Jane Harris <span className="dot dot-warning d-md-none ml-1" /></span>
                                <span>harris@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">5,530.23 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+123 447-2384</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>Bangladesh</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>02 Jan 2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-warning">Pending</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                        <div className="nk-tb-item">
                        <div className="nk-tb-col nk-tb-col-check">
                            <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid10" />
                            <label className="custom-control-label" htmlFor="uid10" />
                            </div>
                        </div>
                        <div className="nk-tb-col">
                            <div className="user-card">
                            <div className="user-avatar bg-purple">
                                <span>EW</span>
                            </div>
                            <div className="user-info">
                                <span className="tb-lead">Emma Walker <span className="dot dot-success d-md-none ml-1" /></span>
                                <span>walker@example.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="nk-tb-col tb-col-mb">
                            <span className="tb-amount">55.00 <span className="currency">USD</span></span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span>+463 471-7173</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>India</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                            <span>25 Dec 2019</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                            <span className="tb-status text-success">Active</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-tools">
                            <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                <em className="icon ni ni-mail-fill" />
                                </a>
                            </li>
                            <li className="nk-tb-action-hidden">
                                <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                <em className="icon ni ni-user-cross-fill" />
                                </a>
                            </li>
                            <li>
                                <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                    <li><a href="html/ecommerce/customer-details.html"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Orders</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>{/* .nk-tb-item */}
                    </div>{/* .nk-tb-list */}
                    <div className="card">
                        <div className="card-inner">
                        <div className="nk-block-between-md g-3">
                            <div className="g">
                            <ul className="pagination justify-content-center justify-content-md-start">
                                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>{/* .pagination */}
                            </div>
                            <div className="g">
                            <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                <div>Page</div>
                                <div>
                                <select className="form-select form-select-sm" data-search="on" data-dropdown="xs center">
                                    <option value="page-1">1</option>
                                    <option value="page-2">2</option>
                                    <option value="page-4">4</option>
                                    <option value="page-5">5</option>
                                    <option value="page-6">6</option>
                                    <option value="page-7">7</option>
                                    <option value="page-8">8</option>
                                    <option value="page-9">9</option>
                                    <option value="page-10">10</option>
                                    <option value="page-11">11</option>
                                    <option value="page-12">12</option>
                                    <option value="page-13">13</option>
                                    <option value="page-14">14</option>
                                    <option value="page-15">15</option>
                                    <option value="page-16">16</option>
                                    <option value="page-17">17</option>
                                    <option value="page-18">18</option>
                                    <option value="page-19">19</option>
                                    <option value="page-20">20</option>
                                </select>
                                </div>
                                <div>OF 102</div>
                            </div>
                            </div>{/* .pagination-goto */}
                        </div>{/* .nk-block-between */}
                        </div>{/* .card-inner */}
                    </div>{/* .card */}
                    </div>{/* .nk-block */}
                </div>
                </div>
            </div>
        </div>
        )
    }
}
