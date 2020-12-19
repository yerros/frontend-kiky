import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Get, formatRupiah } from "../../utils";

export default class Orders extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
    };
  }
  componentDidMount() {
    this.getOrderList();
  }
  getOrderList = () => {
    Get("order").then((res) => {
      this.setState({
        orderList: res,
      });
    });
  };
  render() {
    return (
      <div className="nk-content ">
        <div className="container-fluid">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h3 className="nk-block-title page-title">Orders</h3>
                  </div>
                  <div className="nk-block-head-content">
                    <div className="toggle-wrap nk-block-tools-toggle">
                      <button
                        className="btn btn-icon btn-trigger toggle-expand mr-n1"
                        data-target="pageMenu"
                      >
                        <em className="icon ni ni-more-v" />
                      </button>
                      <div
                        className="toggle-expand-content"
                        data-content="pageMenu"
                      >
                        <ul className="nk-block-tools g-3">
                          <li>
                            <div className="form-control-wrap">
                              <div className="form-icon form-icon-right">
                                <em className="icon ni ni-search" />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="default-04"
                                placeholder="Quick search by id"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="drodown">
                              <button
                                href="#"
                                className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                                data-toggle="dropdown"
                              >
                                Status
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <button href="#">
                                      <span>On Hold</span>
                                    </button>
                                  </li>
                                  <li>
                                    <button href="#">
                                      <span>Delevired</span>
                                    </button>
                                  </li>
                                  <li>
                                    <button href="#">
                                      <span>Rejected</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nk-block-tools-opt">
                            <Link
                              to="/orders/add"
                              className="btn btn-icon btn-primary d-md-none"
                            >
                              <em className="icon ni ni-plus" />
                            </Link>
                            <Link
                              to="/orders/add"
                              className="btn btn-primary d-none d-md-inline-flex"
                            >
                              <em className="icon ni ni-plus" />
                              <span>Add Order</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="nk-tb-list is-separate is-medium mb-3">
                  <div className="nk-tb-item nk-tb-head">
                    <div className="nk-tb-col">
                      <span>Order</span>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span>Date</span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="d-none d-mb-block">Status</span>
                    </div>
                    <div className="nk-tb-col tb-col-sm">
                      <span>Customer</span>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span>Purchased</span>
                    </div>
                    <div className="nk-tb-col">
                      <span>Total</span>
                    </div>
                  </div>
                  {this.state.orderList.map((i) => {
                    let badge;
                    if (i.status === 0) {
                      badge = (
                        <span className="badge badge-sm badge-dot has-bg badge-light d-none d-mb-inline-flex">
                          Pending
                        </span>
                      );
                    } else if (i.status === 1) {
                      badge = (
                        <span className="badge badge-sm badge-dot has-bg badge-warning d-none d-mb-inline-flex">
                          Proccesing
                        </span>
                      );
                    } else if (i.status === 2) {
                      badge = (
                        <span className="badge badge-sm badge-dot has-bg badge-success d-none d-mb-inline-flex">
                          Complete
                        </span>
                      );
                    } else {
                      badge = (
                        <span className="badge badge-sm badge-dot has-bg badge-danger d-none d-mb-inline-flex">
                          Cancel
                        </span>
                      );
                    }
                    return (
                      <div className="nk-tb-item" key={i._id}>
                        <div className="nk-tb-col">
                          <span className="tb-lead">
                            <Link to={`/orders/${i._id}`}>#{i.orderID}</Link>
                          </span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span className="tb-sub">
                            {moment(i.createAt).format("Do MMM YYYY")}
                          </span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="dot bg-light d-mb-none" />
                          {badge}
                        </div>
                        <div className="nk-tb-col tb-col-sm">
                          <span className="tb-sub">
                            {i.customer.customerName}
                          </span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span className="tb-sub text-primary">
                            {i.orderItems.length} Items
                          </span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="tb-lead">
                            Rp. {formatRupiah(i.amount)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* .nk-tb-list */}
                <div className="card">
                  <div className="card-inner">
                    <div className="nk-block-between-md g-3">
                      <div className="g">
                        <ul className="pagination justify-content-center justify-content-md-start">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <em className="icon ni ni-chevrons-left" />
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <span className="page-link">
                              <em className="icon ni ni-more-h" />
                            </span>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <em className="icon ni ni-chevrons-right" />
                            </a>
                          </li>
                        </ul>
                        {/* .pagination */}
                      </div>
                      <div className="g">
                        <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                          <div>Page</div>
                          <div>
                            <select
                              className="form-select form-select-sm"
                              data-search="on"
                              data-dropdown="xs center"
                            >
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
                      </div>
                      {/* .pagination-goto */}
                    </div>
                    {/* .nk-block-between */}
                  </div>
                </div>
              </div>
              {/* .nk-block */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
