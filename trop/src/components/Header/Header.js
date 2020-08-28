import React, { Fragment } from 'react';
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';
import ToggleSidebar from './ToggleSidebar';

import "./Header.css";

function Header() {

    return(
        <Fragment>

            
            {/* <div id="blog_preloader_wrapper">
                <div id="blog_preloader_box">
                    <div className="blog_loader">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div> */}


            <div  className="blog_header_style2">

            <TopHeader />

            <MainHeader />
           
            </div>

            <ToggleSidebar />

		</Fragment>
	
    )
}
export default Header;