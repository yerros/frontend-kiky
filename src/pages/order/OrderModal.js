import React, { Component } from 'react'
const customers = [
    {
        id: 1,
        customerName : "Otsuka",
        address: "Lawang",
    },
    {
        id:2,
        customerName : "PT. BIMA",
        address: "Malang",
    }
]

export default class OrderModal extends Component {
    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="OrderModal">
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
                        <div className="form-control-wrap">
                        <em className="icon ni ni-search" id="search-icons"></em>
                        <input type="text" className="form-control border-transparent form-focus-none form-with-icons" placeholder="Search by name" />
                        </div>
                    </div>
                    <div className="form-group">
                    <div className="nk-tb-list is-compact">
                                    <div className="nk-tb-item nk-tb-head">
                                        <div className="nk-tb-col"><span>Customer Name</span></div>
                                        <div className="nk-tb-col text-center"><span>Address</span></div>
                                        <div className="nk-tb-col text-right"><span></span></div>
                                    </div>{/* .nk-tb-head */}
                                    {customers.map(i => {
                                        return (
                                            <div className="nk-tb-item" key={i.id}>
                                                <div className="nk-tb-col">
                                                    <span className="tb-sub"><span>{i.customerName}</span></span>
                                                </div>
                                                <div className="nk-tb-col text-center">
                                                    <span className="tb-sub tb-amount"><span>{i.address}</span></span>
                                                </div>
                                                <div className="nk-tb-col text-right">
                                                <button className="btn btn-round btn-icon btn-sm btn-primary"><em className="icon ni ni-plus-sm"></em></button>
                                                </div>
                                            </div>
                                    
                                        )
                                    })}
                                    </div>{/* .nk-tb-list */}
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
