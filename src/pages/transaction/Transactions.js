/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import TransactionModal from './TransactionModal'

export default class Transactions extends Component {
    render() {
        return (
            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">Transactions</h3>
                        </div>{/* .nk-block-head-content */}
                        <div className="nk-block-head-content">
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                            <div className="toggle-expand-content" data-content="pageMenu">
                              <ul className="nk-block-tools g-3">
                                <li>
                                  <div className="form-control-wrap">
                                    <div className="form-icon form-icon-right">
                                      <em className="icon ni ni-search" />
                                    </div>
                                    <input type="text" className="form-control" id="default-04" placeholder="Quick search by id" />
                                  </div>
                                </li>
                                <li className="nk-block-tools-opt">
                                  <a href="#" className="btn btn-icon btn-primary d-md-none"><em className="icon ni ni-plus" /></a>
                                  <a href="#" className="btn btn-primary d-none d-md-inline-flex" data-toggle="modal" data-target="#modalTransaction"><em className="icon ni ni-plus" /><span>Add Transactions</span></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>{/* .nk-block-head-content */}
                      </div>{/* .nk-block-between */}
                    </div>{/* .nk-block-head */}
                    <div className="nk-block">
                      <div className="row g-gs">
                      <div className="col">
                        <div className="card">
                          <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">                       
                              <div className="nk-wg7">
                                <div className="nk-wg7-stats">
                                    <div className="nk-wg7-title">Available balance in Rupiah</div>
                                    <div className="number-lg amount">179,850.950</div>
                                </div>
                                <div className="nk-wg7-stats-group">
                                    <div className="nk-wg7-stats w-50">
                                      <div className="nk-wg7-title font-italic">Bank Real</div>
                                      <div className="number text-secondary">5.005.302</div>
                                    </div>
                                    <div className="nk-wg7-stats w-50">
                                      <div className="nk-wg7-title font-italic">Bank ATM</div>
                                      <div className="number text-secondary">8.654.000</div>
                                    </div>
                                </div>
                              </div></div>{/* .card-inner */}
                          </div>{/* .nk-ecwg */}
                        </div>{/* .card */}
                      </div>{/* .col */}
                      </div>
                      <div className="nk-block nk-block-lg mt-3">
                        <div className="card card-preview">
                          <table className="table table-tranx">
                            <thead>
                              <tr className="tb-tnx-head">
                                <th className="tb-tnx-id"><span className>#</span></th>
                                <th className="tb-tnx-info">
                                  <span className="tb-tnx-desc d-none d-sm-inline-block">
                                    <span>Bill For</span>
                                  </span>
                                  <span className="tb-tnx-date d-md-inline-block d-none">
                                    <span className="d-md-none">Date</span>
                                    <span className="d-none d-md-block">
                                      <span>Date</span>
                                      <span>Notes</span>
                                    </span>
                                  </span>
                                </th>
                                <th className="tb-tnx-amount">
                                  <span className="tb-tnx-total">Total</span>
                                  <span className="tb-tnx-status d-none d-md-inline-block">Status</span>
                                </th>
                              </tr></thead>
                            <tbody>
                              <tr className="tb-tnx-item">
                                <td className="tb-tnx-id">
                                  <a href="#"><span>4947</span></a>
                                </td>
                                <td className="tb-tnx-info">
                                  <div className="tb-tnx-desc">
                                    <span className="title">Belanja Inv. 90025</span>
                                  </div>
                                  <div className="tb-tnx-date">
                                    <span className="date">10-05-2019</span>
                                    <span className="date">Jaya Media</span>
                                  </div>
                                </td>
                                <td className="tb-tnx-amount">
                                  <div className="tb-tnx-total">
                                    <span className="amount">$599.00</span>
                                  </div>
                                  <div className="tb-tnx-status">
                                    <span className="badge badge-dot badge-danger">Out</span>
                                  </div>
                                </td>
                              </tr>
                              </tbody>
                          </table>
                        </div>{/* .card */}
                      </div>
                      <div className="card">
                        <div className="card-inner">
                          <div className="nk-block-between-md g-3">
                            <div className="g">
                              <ul className="pagination justify-content-center justify-content-md-start">
                                <li className="page-item"><a className="page-link" href="#"><em className="icon ni ni-chevrons-left" /></a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                <li className="page-item"><a className="page-link" href="#"><em className="icon ni ni-chevrons-right" /></a></li>
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
                        </div>
                      </div>
                    </div>{/* .nk-block */}
                  </div>
                </div>
              </div>
              <TransactionModal />
            </div>
        )
    }
}
