import React, { Component } from "react";
import { connect } from "react-redux";
import { setModal } from "../../actions";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { Get } from "../../utils";
const customers = [
  {
    id: 1,
    customerName: "Otsuka",
    address: "Lawang",
  },
  {
    id: 2,
    customerName: "PT. BIMA",
    address: "Malang",
  },
];

class OrderModal extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }
  sendData = (data) => {
    this.props.customer(data);
    toast.success("Custumer Selected");
    this.props.sendModal(!this.props.showModal);
  };
  componentDidMount() {
    this._isMounted = true;
    this.getCustomerList();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getCustomerList = () => {
    Get("customer").then((res) => {
      this.setState({
        totalUser: res.totalUser,
        customers: res.customer,
      });
    });
  };
  render() {
    return (
      <Modal show={this.props.show}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Customer Info</h5>
            <button
              className="close"
              onClick={() => this.props.sendModal(!this.props.showModal)}
            >
              <em className="icon ni ni-cross" />
            </button>
          </div>
          <div className="modal-body">
            <div className="form-validate is-alter">
              <div className="form-group">
                <div className="form-control-wrap">
                  <em className="icon ni ni-search" id="search-icons"></em>
                  <input
                    type="text"
                    className="form-control border-transparent form-focus-none form-with-icons"
                    placeholder="Search by name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="nk-tb-list is-compact">
                  <div className="nk-tb-item nk-tb-head">
                    <div className="nk-tb-col">
                      <span>Customer Name</span>
                    </div>
                    <div className="nk-tb-col text-center">
                      <span>Address</span>
                    </div>
                    <div className="nk-tb-col text-right">
                      <span></span>
                    </div>
                  </div>
                  {/* .nk-tb-head */}
                  {this.state.customers.map((i) => {
                    return (
                      <div className="nk-tb-item" key={i._id}>
                        <div className="nk-tb-col">
                          <span className="tb-sub">
                            <span>{i.customerName}</span>
                          </span>
                        </div>
                        <div className="nk-tb-col text-center">
                          <span className="tb-sub tb-amount">
                            <span>{i.address}</span>
                          </span>
                        </div>
                        <div className="nk-tb-col text-right">
                          <button
                            onClick={() => this.sendData(i)}
                            className="btn btn-round btn-icon btn-sm btn-primary"
                          >
                            <em className="icon ni ni-plus-sm"></em>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* .nk-tb-list */}
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
