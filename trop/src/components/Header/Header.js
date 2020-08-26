import React, { Fragment } from 'react';
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';

function Header() {

    return(
        <Fragment>
            <div id="blog_preloader_wrapper">
                <div id="blog_preloader_box">
                    <div class="blog_loader">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <TopHeader />

	        <MainHeader />

		</Fragment>
	
    )
}
export default Header;