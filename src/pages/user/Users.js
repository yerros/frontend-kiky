/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { setModal } from "../../actions";
import { Delete, Get } from "../../utils";
import UsersModal from "./UsersModal";
import Avatar from "react-avatar";
import { toast } from "react-toastify";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showModal: true,
      totalUser: 0,
      customers: [],
    };
  }

  componentDidMount() {
    this.getCustomerList();
  }
  componentDidUpdate() {
    this.getCustomerList();
  }
  getCustomerList = () => {
    Get("customer").then((res) => {
      this.setState({
        totalUser: res.totalUser,
        customers: res.customer,
      });
    });
  };
  handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete this Category?");
    if (confirm) {
      Delete(`customer/${id}`).then((res) => {
        this.setState({
          customers: [],
        });
        this.getCustomerList();
      });
    }
    toast.success("Data succefuly delete");
  };
  render() {
    return (
      <div className="nk-content ">
        {this.state.showModal ? (
          <UsersModal show={this.props.showModal} alerts={[]} />
        ) : null}
        <div className="container-fluid">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h3 className="nk-block-title page-title">User Lists</h3>
                    <div className="nk-block-des text-soft">
                      <p>
                        You have total{" "}
                        <span className="text-primary">
                          {this.state.totalUser}
                        </span>{" "}
                        users.
                      </p>
                    </div>
                  </div>
                  <div className="nk-block-head-content">
                    <div className="toggle-wrap nk-block-tools-toggle">
                      <a
                        href="#"
                        className="btn btn-icon btn-trigger toggle-expand mr-n1"
                        data-target="more-options"
                      >
                        <em className="icon ni ni-more-v" />
                      </a>
                      <div
                        className="toggle-expand-content"
                        data-content="more-options"
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
                                placeholder="Search by name"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="drodown">
                              <a
                                href="#"
                                className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                                data-toggle="dropdown"
                              >
                                Status
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <a href="#">
                                      <span>Actived</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Inactived</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Blocked</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nk-block-tools-opt">
                            <a
                              href="#"
                              className="btn btn-icon btn-primary d-md-none"
                            >
                              <em className="icon ni ni-plus" />
                            </a>
                            <button
                              className="btn btn-primary d-none d-md-inline-flex"
                              onClick={() =>
                                this.props.sendModal(!this.props.showModal)
                              }
                            >
                              <em className="icon ni ni-plus" />
                              <span>Add</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="nk-tb-list is-separate mb-3">
                  <div className="nk-tb-item nk-tb-head">
                    <div className="nk-tb-col">
                      <span className="sub-text">Customer</span>
                    </div>
                    <div className="nk-tb-col tb-col-lg">
                      <span className="sub-text">Address</span>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="sub-text">Phone</span>
                    </div>
                    <div className="nk-tb-col tb-col-lg">
                      <span className="sub-text">Registered</span>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="sub-text">Status</span>
                    </div>
                  </div>
                  {this.state.customers.map((i) => {
                    return (
                      <div className="nk-tb-item" key={i._id}>
                        <div className="nk-tb-col">
                          <button className="btn btn-transparent">
                            <div className="user-card">
                              <Avatar
                                className="user-avatar bg-primary"
                                size="50"
                                name={i.customerName}
                              />

                              <div className="user-info">
                                <span className="tb-lead">
                                  {i.customerName}
                                  <span className="dot dot-success d-md-none ml-1" />
                                </span>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                          <span>{i.address}</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span>{i.phone}</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                          <span>
                            {moment(i.createAt).format("Do MMMM YYYY")}
                          </span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <button
                            onClick={() => this.handleDelete(i._id)}
                            className="btn btn-transparent"
                          >
                            <em className="icon ni ni-trash icon-delete"></em>
                          </button>
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
                              Prev
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
                              Next
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
                  {/* .card-inner */}
                </div>
                {/* .card */}
              </div>
              {/* .nk-block */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendModal: (value) => dispatch(setModal(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
