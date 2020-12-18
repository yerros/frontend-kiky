import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function Layout(props) {
  return (
    <React.Fragment>
      <div className="nk-app-root">
        <div className="nk-main ">
          <Sidebar />
          <div className="nk-wrap ">
            <ToastContainer autoClose={3000} />
            <Header />
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  showModal: state.showModal,
});

export default connect(mapStateToProps)(Layout);
