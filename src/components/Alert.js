import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux";
import { deleteAlert } from "../actions";

const Alert = (props) => {
  const { alerts } = props;
  console.log(typeof alerts);
  if (alerts !== null && alerts.length > 0) {
    let alertList;

    alertList = alerts.map((alert) => {
      if (alert.alertType === "success") {
        return (
          <SweetAlert
            key={alert.id}
            success
            title={alert.msg}
            onConfirm={() => props.deleteMessage()}
          >
            {alert.msg}
          </SweetAlert>
        );
      } else if (alert.alertType === "error") {
        return (
          <SweetAlert
            key={alert.id}
            error
            title={alert.msg}
            onConfirm={() => props.deleteMessage()}
          >
            {alert.msg}
          </SweetAlert>
        );
      } else {
        return (
          <SweetAlert
            key={alert.id}
            default
            title={alert.msg}
            onConfirm={() => props.deleteMessage()}
          >
            {alert.msg}
          </SweetAlert>
        );
      }
    });
    return alertList;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: () => dispatch(deleteAlert()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
