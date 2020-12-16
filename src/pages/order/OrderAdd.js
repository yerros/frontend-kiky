import React, { Component } from 'react'
import OrderModal from './OrderModal'

const orderItems = [
    {
        id: 1,
        itemName : "Sales Order NB 0565",
        price: 12000,
        quantity: 20,
        totalPrice: 280000
    },
    {
        id:2,
        itemName : "Sales Order TR 0785",
        price: 11000,
        quantity: 20,
        totalPrice: 220000  
    }
]

export default class OrderAdd extends Component {
    constructor(){
        super();
        this.state = {
            orderItems : [
                {
                    id: 1,
                    itemName : "Sales Order NB 0565",
                    price: 12000,
                    quantity: 20,
                    totalPrice: 280000
                },
                {
                    id:2,
                    itemName : "Sales Order TR 0785",
                    price: 11000,
                    quantity: 20,
                    totalPrice: 220000  
                }
            ],
            itemName : "",
            price: "",
            quantity: "",
            totalPrice: "" 
        }
    }
    render() {
        return (
            <div className="nk-content ">
                <div className="container-fluid">
                <div className="nk-content-inner">
                <div className="nk-content-body">
                    <div className="components-preview wide-md mx-auto">
                    <div className="nk-block nk-block-lg">
                        <div className="nk-block-head">
                        <div className="nk-block-head-content">
                            <h4 className="title nk-block-title">Add Order</h4>
                            <div className="nk-block-des">
                            <p>You can add order by select value correctly</p>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-inner">
                            <div className="gy-3">
                            <div className="row g-3 align-center">
                                <div className="col-lg-5">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="site-name">Order Number</label>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="form-group">
                                    <div className="form-control-wrap">
                                    <input type="text" disabled className="form-control" id="site-name" defaultValue="952444" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row g-3 align-center">
                                <div className="col-lg-5">
                                <div className="form-group">
                                    <label className="form-label">Customer</label>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="form-group">
                                    <div className="form-control-wrap">
                                    <input type="text" className="form-control form-with-button" id="site-email" value="" disabled placeholder="Select Customer" />
                                    <button class="btn btn-primary ml-2" data-toggle="modal" data-target="#OrderModal">Customer</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row g-3 align-center">
                                <div className="col-lg-5">
                                <div className="form-group">
                                    <label className="form-label">Order List</label>
                                    <span className="form-note">Copyright information of your website.</span>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="form-group">
                                    <div className="form-control-wrap">
                                    <div className="nk-tb-list is-compact">
                                    <div className="nk-tb-item nk-tb-head">
                                        <div className="nk-tb-col"><span>Item Name</span></div>
                                        <div className="nk-tb-col text-center"><span>Price @</span></div>
                                        <div className="nk-tb-col text-center"><span>Quantity</span></div>
                                        <div className="nk-tb-col text-right"><span>Total</span></div>
                                    </div>{/* .nk-tb-head */}
                                    {orderItems.map(i => {
                                        return (
                                            <div className="nk-tb-item" key={i.id}>
                                                <div className="nk-tb-col">
                                                    <span className="tb-sub"><span>{i.itemName}</span></span>
                                                </div>
                                                <div className="nk-tb-col text-center">
                                                    <span className="tb-sub tb-amount"><span>{i.price}</span></span>
                                                </div>
                                                <div className="nk-tb-col text-center">
                                                    <span className="tb-sub tb-amount"><span>{i.quantity}</span></span>
                                                </div>
                                                <div className="nk-tb-col text-right">
                                                    <span className="tb-sub tb-amount"><span>{i.totalPrice}</span></span>
                                                </div>
                                                <div className="nk-tb-col text-right">
                                                <button className="btn btn-round btn-icon btn-sm btn-primary"><em className="icon ni ni-trash-alt"></em></button>
                                                </div>
                                            </div>
                                    
                                        )
                                    })}
                                    </div>{/* .nk-tb-list */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row g-3 align-center">
                                <div className="col-lg-5">
                                <div className="form-group">
                                    <label className="form-label">Add Order Item</label>
                                    <span className="form-note">Add your order item manualy.</span>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="form-group">
                                    <div className="form-control-wrap">
                                    <div className="nk-tb-list is-compact">
                                    <div className="nk-tb-item">
                                        <div className="nk-tb-col">
                                        <input type="text" className="form-control form-control-sm" id="default-01" placeholder="Item Name" />
                                        </div>
                                        <div className="nk-tb-col">
                                        <input type="text" className="form-control form-control-sm" id="default-01" placeholder="Price @" />
                                        </div>
                                        <div className="nk-tb-col">
                                        <input type="text" className="form-control form-control-sm" id="default-01" placeholder="Quantity" />
                                        </div>
                                        <div className="nk-tb-col">
                                        <a href="#" className="btn btn-sm btn-primary"><em className="icon ni ni-plus-sm"></em></a>
                                        </div>
                                    </div>{/* .nk-tb-item */}
                                    </div>{/* .nk-tb-list */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="row g-3">
                                <div className="col-lg-7 offset-lg-5">
                                <div className="form-group mt-2">
                                    <button type="submit" className="btn btn-lg btn-primary">Update</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <OrderModal />
        </div>

            )
    }
}
