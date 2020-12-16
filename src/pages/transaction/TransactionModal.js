import React, { Component } from 'react'

export default class TransactionModal extends Component {
    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="modalTransaction">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Transactions</h5>
                    <button className="close" data-dismiss="modal" aria-label="Close">
                    <em className="icon ni ni-cross" />
                    </button>
                </div>
                <div className="modal-body">
                    <form className="form-validate is-alter">
                    <div className="form-group">
                        <label className="form-label" htmlFor="transactionNumber">Transaction Number</label>
                        <div className="form-control-wrap">
                        <input type="number" className="form-control" id="transactionNumber" disabled required value="65455" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="billFor">Bill For?</label>
                        <div className="form-control-wrap">
                        <input type="text" className="form-control" id="billFor" required value="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Status</label>
                        <select class="form-select form-control form-control-lg">
                            <option value="default_option">Select</option>
                            <option value="option_select_name">Money In</option>
                            <option value="option_select_name">Money Out</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="billFor">Notes</label>
                        <div className="form-control-wrap">
                        <textarea type="textarea" className="form-control no-resize" id="notes" required value="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="billFor">Total</label>
                        <div className="form-control-wrap">
                        <input type="text" className="form-control" id="total" required value="" />
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
