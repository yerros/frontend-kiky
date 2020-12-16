import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <React.Fragment>
            <div className="nk-app-root">
                <div className="nk-main ">
                    <Sidebar />
                    <div className="nk-wrap ">
                        <Header />
                            {props.children}
                        <Footer />
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )
}
