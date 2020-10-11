import React, { Fragment } from 'react';
//import { Form } from 'react-bootstrap';

function MainHeader() {

    return(    
	<Fragment>

				<div  className="blog_main_header">
                    <div  className="blog_tranding_slider">
                        <div  className="swiper-container">
                            <div  className="swiper-wrapper">
                                <div  className="swiper-slide">
                                    <p><span><i></i></span> Parquet Courts on Resisting Nihilism & Why Tourism in Dubai is booming the world.</p>
                                </div>
                                <div  className="swiper-slide">
                                    <p><span><i></i></span> Parquet Courts on Resisting Nihilism & Why Tourism in Dubai.</p>
                                </div>
                            </div>
                            {/* <!-- Add Arrows --> */}
                            <div  className="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="6px"><path fill-rule="evenodd"  fill="#707070" d="M5.390,5.837 L9.840,1.292 C9.943,1.187 10.000,1.046 10.000,0.897 C10.000,0.747 9.943,0.607 9.840,0.502 L9.513,0.167 C9.299,-0.051 8.952,-0.051 8.739,0.167 L5.002,3.983 L1.261,0.163 C1.158,0.057 1.021,-0.000 0.874,-0.000 C0.728,-0.000 0.590,0.057 0.487,0.163 L0.160,0.497 C0.057,0.603 -0.000,0.743 -0.000,0.893 C-0.000,1.042 0.057,1.182 0.160,1.287 L4.614,5.837 C4.717,5.942 4.855,6.000 5.002,5.999 C5.149,6.000 5.287,5.942 5.390,5.837 Z"/></svg></div>
                            <div  className="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="7px"><path fill-rule="evenodd"  fill="#707070" d="M4.610,0.163 L0.160,4.708 C0.057,4.813 -0.000,4.953 -0.000,5.103 C-0.000,5.253 0.057,5.393 0.160,5.498 L0.487,5.833 C0.701,6.050 1.048,6.050 1.261,5.833 L4.998,2.016 L8.739,5.837 C8.842,5.942 8.979,6.000 9.126,6.000 C9.272,6.000 9.410,5.942 9.513,5.837 L9.840,5.502 C9.943,5.397 10.000,5.257 10.000,5.107 C10.000,4.958 9.943,4.817 9.840,4.712 L5.386,0.163 C5.283,0.058 5.145,-0.000 4.998,0.000 C4.851,-0.000 4.713,0.058 4.610,0.163 Z"/></svg></div>
                        </div>
                    </div>
                    <div  className="blog_main_menu">
                        <div  className="blog_main_menu_innerdiv">
                            <ul>
                                <li  className="active"><a href="#">Home</a>
                                    <ul  className="sub-menu">
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
                                    <ul  className="sub-menu">
                                        <li><a href="blog_single_fullwidth.html">Blog Single FullWidth</a></li>
                                        <li><a href="blog_single_with_sidebar.html">Blog Single With Sidebar</a></li>
                                        <li><a href="contactus.html">contact</a></li>
                                        <li><a href="error.html">Error</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div  className="blog_top_search">
                    <ul>
                        <li  className="blog_search">
                            <a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"><path fill-rule="evenodd"  fill="#000000" d="M15.750,14.573 L11.807,10.612 C12.821,9.449 13.376,7.984 13.376,6.459 C13.376,2.898 10.376,-0.000 6.687,-0.000 C2.999,-0.000 -0.002,2.898 -0.002,6.459 C-0.002,10.021 2.999,12.919 6.687,12.919 C8.072,12.919 9.391,12.516 10.520,11.750 L14.493,15.741 C14.659,15.907 14.882,15.999 15.121,15.999 C15.348,15.999 15.563,15.916 15.726,15.764 C16.073,15.442 16.084,14.908 15.750,14.573 ZM6.687,1.685 C9.414,1.685 11.631,3.827 11.631,6.459 C11.631,9.092 9.414,11.234 6.687,11.234 C3.961,11.234 1.743,9.092 1.743,6.459 C1.743,3.827 3.961,1.685 6.687,1.685 Z"/></svg></a>
                            <div  className="blog_search_popup">
								<a  className="search_close"></a>

								{/* <Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
									We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group> */}

                                {/* <Form  className="form-inline">
                                    <h3>Input Your Search Keywords And Press Enter</h3>
                                    <div  className="blog_form_group">
                                        <input type="text"  className="form-control" placeholder="Search Here...">
                                        <button type="button"  className="blog_header_search">Search</button>
                                    </div>
                                    
                                </Form> */}


                            </div>
                        </li>
                        <li  className="blog_righttoggle">
                            <a href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" width="13px" height="14px"><path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M0.001,10.115 L0.001,7.969 L13.000,7.969 L13.000,10.115 L0.001,10.115 ZM3.649,6.028 L3.649,3.881 L12.992,3.881 L12.992,6.028 L3.649,6.028 ZM0.001,-0.002 L13.000,-0.002 L13.000,2.145 L0.001,2.145 L0.001,-0.002 ZM12.992,13.998 L3.649,13.998 L3.649,11.853 L12.992,11.853 L12.992,13.998 Z"/></svg></a>
                        </li>
                    </ul>
                </div>
            </div>

		
	</Fragment> 
    )

}
export default MainHeader;