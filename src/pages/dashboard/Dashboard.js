/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'


export default class Dashboard extends Component {
    render() {
        return (
            <div className="nk-content ">
  <div className="container-fluid">
    <div className="nk-content-inner">
      <div className="nk-content-body">
        <div className="nk-block">
          <div className="row g-gs">
            <div className="col-xxl-3 col-sm-6">
              <div className="card">
                <div className="nk-ecwg nk-ecwg6">
                  <div className="card-inner">
                    <div className="card-title-group">
                      <div className="card-title">
                        <h6 className="title">Latest Transaction</h6>
                      </div>
                    </div>
                    <div className="data">
                      <div className="data-group">
                        <div className="amount">Rp. 2.365.000</div>
                      </div>
                    </div>
                  </div>{/* .card-inner */}
                </div>{/* .nk-ecwg */}
              </div>{/* .card */}
            </div>{/* .col */}
            <div className="col-xxl-3 col-sm-6">
              <div className="card">
                <div className="nk-ecwg nk-ecwg6">
                  <div className="card-inner">
                    <div className="card-title-group">
                      <div className="card-title">
                        <h6 className="title">Total Balance</h6>
                      </div>
                    </div>
                    <div className="data">
                      <div className="data-group">
                        <div className="amount">Rp. 30.250.655</div>
                      </div>
                    </div>
                  </div>{/* .card-inner */}
                </div>{/* .nk-ecwg */}
              </div>{/* .card */}
            </div>{/* .col */}
            <div className="col-xxl-8">
              <div className="card card-full">
                <div className="card-inner">
                  <div className="card-title-group">
                    <div className="card-title">
                      <h6 className="title">Recent Orders</h6>
                    </div>
                  </div>
                </div>
                <div className="nk-tb-list mt-n2">
                  <div className="nk-tb-item nk-tb-head">
                    <div className="nk-tb-col"><span>Order No.</span></div>
                    <div className="nk-tb-col tb-col-sm"><span>Customer</span></div>
                    <div className="nk-tb-col tb-col-md"><span>Date</span></div>
                    <div className="nk-tb-col"><span>Amount</span></div>
                    <div className="nk-tb-col"><span className="d-none d-sm-inline">Status</span></div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col">
                      <span className="tb-lead"><a href="#">#95954</a></span>
                    </div>
                    <div className="nk-tb-col tb-col-sm">
                      <div className="user-card">
                        <div className="user-avatar sm bg-purple-dim">
                          <span>AB</span>
                        </div>
                        <div className="user-name">
                          <span className="tb-lead">Abu Bin Ishtiyak</span>
                        </div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="tb-sub">02/11/2020</span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="tb-sub tb-amount">4,596.75 <span>USD</span></span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="badge badge-dot badge-dot-xs badge-success">Paid</span>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col">
                      <span className="tb-lead"><a href="#">#95850</a></span>
                    </div>
                    <div className="nk-tb-col tb-col-sm">
                      <div className="user-card">
                        <div className="user-avatar sm bg-azure-dim">
                          <span>DE</span>
                        </div>
                        <div className="user-name">
                          <span className="tb-lead">Desiree Edwards</span>
                        </div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="tb-sub">02/02/2020</span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="tb-sub tb-amount">596.75 <span>USD</span></span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="badge badge-dot badge-dot-xs badge-danger">Canceled</span>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col">
                      <span className="tb-lead"><a href="#">#95812</a></span>
                    </div>
                    <div className="nk-tb-col tb-col-sm">
                      <div className="user-card">
                        <div className="user-avatar sm bg-warning-dim">
                          <img src="./images/avatar/b-sm.jpg" alt="" />
                        </div>
                        <div className="user-name">
                          <span className="tb-lead">Blanca Schultz</span>
                        </div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="tb-sub">02/01/2020</span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="tb-sub tb-amount">199.99 <span>USD</span></span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="badge badge-dot badge-dot-xs badge-success">Paid</span>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col">
                      <span className="tb-lead"><a href="#">#95256</a></span>
                    </div>
                    <div className="nk-tb-col tb-col-sm">
                      <div className="user-card">
                        <div className="user-avatar sm bg-purple-dim">
                          <span>NL</span>
                        </div>
                        <div className="user-name">
                          <span className="tb-lead">Naomi Lawrence</span>
                        </div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="tb-sub">01/29/2020</span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="tb-sub tb-amount">1099.99 <span>USD</span></span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="badge badge-dot badge-dot-xs badge-success">Paid</span>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col">
                      <span className="tb-lead"><a href="#">#95135</a></span>
                    </div>
                    <div className="nk-tb-col tb-col-sm">
                      <div className="user-card">
                        <div className="user-avatar sm bg-success-dim">
                          <span>CH</span>
                        </div>
                        <div className="user-name">
                          <span className="tb-lead">Cassandra Hogan</span>
                        </div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="tb-sub">01/29/2020</span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="tb-sub tb-amount">1099.99 <span>USD</span></span>
                    </div>
                    <div className="nk-tb-col">
                      <span className="badge badge-dot badge-dot-xs badge-warning">Due</span>
                    </div>
                  </div>
                </div>
              </div>{/* .card */}
            </div>
          </div>{/* .row */}
        </div>{/* .nk-block */}
      </div>
    </div>
  </div>
</div>

        )
    }
}
