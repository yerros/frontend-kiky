import React, { Component } from 'react'

export default class UsersModal extends Component {
    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="modalForm">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Customer Info</h5>
                    <button className="close" data-dismiss="modal" aria-label="Close">
                    <em className="icon ni ni-cross" />
                    </button>
                </div>
                <div className="modal-body">
                    <form action="#" className="form-validate is-alter">
                    <div className="form-group">
                        <label className="form-label" htmlFor="full-name">Full Name</label>
                        <div className="form-control-wrap">
                        <input type="text" className="form-control" id="full-name" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email-address">Email address</label>
                        <div className="form-control-wrap">
                        <input type="text" className="form-control" id="email-address" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="phone-no">Phone No</label>
                        <div className="form-control-wrap">
                        <input type="text" className="form-control" id="phone-no" />
                        </div>
                    </div>
                   <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-primary">Save Informations</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
