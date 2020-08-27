import React, { Fragment } from 'react';

function MainHeader() {

    return(    
	<Fragment>   
			<div className="blog_main_header">
				<div className="blog_logo">
					<a href="index.html"><img src="images/logo.png" className="img-fluid" alt="logo"/></a>
					<div className="blog_menu_toggle">
						<span>
							<i className="fa fa-bars" aria-hidden="true"></i>
						</span>
					</div>
				</div>

				<div className="blog_main_menu">
					<div className="blog_main_menu_innerdiv">
						<ul>
							<li className="active"><a href="#">Home</a>
								<ul className="sub-menu">
									<li><a href="index.html">Home Page1</a></li>
										<li><a href="index2.html">Home Page2</a></li>
								</ul>
							</li>
							<li><a href="politics.html">Politics <span>new</span></a></li>
							<li><a href="world.html">World</a></li>
							<li><a href="technology.html">Tech</a></li>
							<li><a href="sport.html">Sports <span>new</span></a></li>
							<li><a href="lifestyle.html">lifestyle</a></li>
							<li><a href="travel.html">Travel</a></li>
							<li><a href="fashion.html">Fashion <span>new</span></a></li>
							<li><a href="#">pages</a>
								<ul className="sub-menu">
									<li><a href="blog_single_fullwidth.html">Blog Single FullWidth</a></li>
									<li><a href="blog_single_with_sidebar.html">Blog Single With Sidebar</a></li>
									<li><a href="contactus.html">contact</a></li>
									<li><a href="error.html">Error</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				{/* <div className="blog_top_search">
					<form className="form-inline">
						<div className="blog_form_group">
							<input type="text" className="form-control" placeholder="Search Here...">
						</div>
						<button type="button" className="blog_header_search"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"><path fill-rule="evenodd"  fill="rgb(255, 54, 87)" d="M15.750,14.573 L11.807,10.612 C12.821,9.449 13.376,7.984 13.376,6.459 C13.376,2.898 10.376,-0.000 6.687,-0.000 C2.999,-0.000 -0.002,2.898 -0.002,6.459 C-0.002,10.021 2.999,12.919 6.687,12.919 C8.072,12.919 9.391,12.516 10.520,11.750 L14.493,15.741 C14.659,15.907 14.882,15.999 15.121,15.999 C15.348,15.999 15.563,15.916 15.726,15.764 C16.073,15.442 16.084,14.908 15.750,14.573 ZM6.687,1.685 C9.414,1.685 11.631,3.827 11.631,6.459 C11.631,9.092 9.414,11.234 6.687,11.234 C3.961,11.234 1.743,9.092 1.743,6.459 C1.743,3.827 3.961,1.685 6.687,1.685 Z"/></svg></button>
					</form>
				</div> */}
			</div>
		</Fragment> 
    )

}
export default MainHeader;