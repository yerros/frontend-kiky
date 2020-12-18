import React, { Component } from "react";
import { connect } from "react-redux";
import { setModal } from "../../actions";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import axios from "axios";

class UsersModal extends Component {
  constructor() {
    super();
    this.state = {
      customerName: "",
      address: "",
      phone: "",
    };
  }
  handleClose = () => {
    this.props.sendModal(!this.props.showModal);
  };

  handleSave = (e) => {
    e.preventDefault();
    const { customerName, address, phone } = this.state;
    const data = { customerName, address, phone };
    axios.post("http://localhost:5000/customer", data).then((res) => {
      toast.success("Wow its easy !!");
      this.props.sendModal(!this.props.showModal);
      console.log(res);
    });
  };
  render() {
    const { customerName, address, phone } = this.state;
    return (
      <Modal show={this.props.show}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Customer Info</h5>
            <button
              onClick={this.handleClose}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <em className="icon ni ni-cross" />
            </button>
          </div>
          <div className="modal-body">
            <form action="#" className="form-validate is-alter">
              <div className="form-group">
                <label className="form-label" htmlFor="customerName">
                  Full Name
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    className="form-control"
                    value={customerName}
                    name="customerName"
                    onChange={(e) =>
                      this.setState({ customerName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="address">
                  Address
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={(e) => this.setState({ address: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone No
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  onClick={this.handleSave}
                  type="submit"
                  className="btn btn-lg btn-primary"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersModal);
