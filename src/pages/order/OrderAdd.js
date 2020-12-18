import React, { Component } from "react";
import OrderModal from "./OrderModal";
import { connect } from "react-redux";
import { setModal } from "../../actions";
import { toast } from "react-toastify";
import { Post } from "../../utils";

class OrderAdd extends Component {
  constructor() {
    super();
    this.state = {
      orderItems: [],
      itemName: "",
      price: "",
      quantity: "",
      totalPrice: "",
      notes: "",
      customer: {
        customerName: "",
        address: "",
        phone: "",
      },
    };
  }
  callbackCustomer = (childData) => {
    console.log(childData);
    this.setState({ customer: childData });
  };
  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };
  handleAddOrder = () => {
    let { itemName, price, quantity, totalPrice } = this.state;
    totalPrice = price * quantity;
    this.setState((prevState) => ({
      orderItems: [
        ...prevState.orderItems,
        { itemName, price, quantity, totalPrice },
      ],
      itemName: "",
      price: "",
      quantity: "",
      totalPrice: "",
    }));
  };

  handleSubmit = () => {
    const { orderItems, customer, notes } = this.state;
    const amount = orderItems.reduce((value, element) => {
      return value + element.totalPrice;
    }, 0);

    const data = { orderItems, customer, amount, notes };
    Post("order", data).then((res) => {
      if (res.status === "success") {
        toast.success("Order sucefully added!!");
        this.props.history.push("/orders");
      }
    });
  };
  render() {
    const { itemName, price, quantity, notes, orderItems } = this.state;
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
                              <label className="form-label">Customer</label>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  className="form-control form-with-button"
                                  name="customer"
                                  readOnly
                                  value={this.state.customer.customerName}
                                  placeholder="Select Customer"
                                />
                                <button
                                  className="btn btn-primary ml-2"
                                  onClick={() =>
                                    this.props.sendModal(!this.props.showModal)
                                  }
                                >
                                  Customer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {orderItems.length > 0 ? (
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label className="form-label">Order List</label>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="form-control-wrap">
                                  <div className="nk-tb-list is-compact">
                                    <div className="nk-tb-item nk-tb-head">
                                      <div className="nk-tb-col">
                                        <span>Item Name</span>
                                      </div>
                                      <div className="nk-tb-col text-center">
                                        <span>Price @</span>
                                      </div>
                                      <div className="nk-tb-col text-center">
                                        <span>Quantity</span>
                                      </div>
                                      <div className="nk-tb-col text-right">
                                        <span>Total</span>
                                      </div>
                                    </div>
                                    {/* .nk-tb-head */}
                                    {orderItems.map((i, id) => {
                                      return (
                                        <div className="nk-tb-item" key={id}>
                                          <div className="nk-tb-col">
                                            <span className="tb-sub">
                                              <span>{i.itemName}</span>
                                            </span>
                                          </div>
                                          <div className="nk-tb-col text-center">
                                            <span className="tb-sub tb-amount">
                                              <span>{i.price}</span>
                                            </span>
                                          </div>
                                          <div className="nk-tb-col text-center">
                                            <span className="tb-sub tb-amount">
                                              <span>{i.quantity}</span>
                                            </span>
                                          </div>
                                          <div className="nk-tb-col text-right">
                                            <span className="tb-sub tb-amount">
                                              <span>{i.totalPrice}</span>
                                            </span>
                                          </div>
                                          <div className="nk-tb-col text-right">
                                            <button className="btn btn-round btn-icon btn-sm btn-primary">
                                              <em className="icon ni ni-trash-alt"></em>
                                            </button>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="row g-3 align-center">
                          <div className="col-lg-5">
                            <div className="form-group">
                              <label className="form-label">
                                Add Order Item
                              </label>
                              <span className="form-note">
                                Add your order item manualy.
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <div className="nk-tb-list is-compact">
                                  <div className="nk-tb-item">
                                    <div className="nk-tb-col">
                                      <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        name="itemName"
                                        value={itemName}
                                        placeholder="Item Name"
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="nk-tb-col">
                                      <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        name="price"
                                        value={price}
                                        placeholder="Price @"
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="nk-tb-col">
                                      <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        name="quantity"
                                        value={quantity}
                                        placeholder="Quantity"
                                        onChange={this.handleChange}
                                      />
                                    </div>
                                    <div className="nk-tb-col">
                                      <button
                                        onClick={this.handleAddOrder}
                                        className="btn btn-sm btn-primary"
                                      >
                                        <em className="icon ni ni-plus-sm"></em>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-3 align-center">
                          <div className="col-lg-5">
                            <div className="form-group">
                              <label className="form-label">Notes</label>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <textarea
                                  type="textarea"
                                  className="form-control no-resize"
                                  name="notes"
                                  onChange={this.handleChange}
                                  required
                                  value={notes}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-lg-7 offset-lg-5">
                            <div className="form-group mt-2">
                              <button
                                type="submit"
                                className="btn btn-lg btn-primary"
                                onClick={this.handleSubmit}
                              >
                                Submit
                              </button>
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
        <OrderModal
          show={this.props.showModal}
          customer={this.callbackCustomer}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderAdd);
