import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider, connect } from 'react-redux';

import ProductsList from './ProductsList';
import { addProductsAll } from './actions'

import './bootstrap.min.css'
import './style.css'


class App extends React.Component {
  render() {
	  
    return (
	
      <div>
	  <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
				<div className="container">
					<div className="banner_content text-center">
						<h2>Shop Category Page</h2>
						<div className="page_link">
							<a href="index.html">Home</a>
							<a href="category.html">Category</a>
							<a href="category.html">Women Fashion</a>
						</div>
					</div>
				</div>
            </div>
        </section>
	  
          {/* Header */}
          <header className="header_area">
           	<div className="top_menu row m0">
           		<div className="container">
					<div className="float-left">
						<a href="mailto:support@colorlib.com">support@colorlib.com</a>
						<a href="#">Welcome to Catalouge</a>
					</div>
					<div className="float-right">
						<ul className="header_social">
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
							<li><a href="#"><i className="fa fa-behance"></i></a></li>
						</ul>
					</div>
           		</div>	
           	</div>	
            <div className="main_menu">
            	<nav className="navbar navbar-expand-lg navbar-light main_box">
					<div className="container">
						<a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></img></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item"><a className="nav-link" href="index.html">Home</a></li> 
								<li className="nav-item submenu dropdown active">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><a className="nav-link" href="category.html">Shop Category</a>
										<li className="nav-item"><a className="nav-link" href="single-product.html">Product Details</a>
										<li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a>
										<li className="nav-item"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
										<li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
									</li></li>  </li> </ul>
								
								<li className="nav-item submenu dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
										<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li> 
								<li className="nav-item submenu dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><a className="nav-link" href="login.html">Login</a>
										<li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a>
										<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
									</li></li> </ul> </li> 
								</li> 
								<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li className="nav-item"><a href="#" className="cart"><i className="lnr lnr lnr-cart"></i></a></li>
								<li className="nav-item"><a href="#" className="search"><i className="lnr lnr-magnifier"></i></a></li>
							</ul>
						</div> 
					</div>
            	</nav>
            </div>
        </header>
		

          <Provider store={this.props.store}>

            <Router>
              <Routes>
                <Route path="/" element={<ProductsList />} />
              </Routes>
            </Router>

          </Provider>

        {/* Footer */}
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">About Us</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">Newsletter</h6>
                            <p>Stay updated with our latest trends</p>		
                            <div id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                                    <div className="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email"></input>
                                        <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>		
                                    </div>									
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget instafeed">
                            <h6 className="footer_title">Instagram Feed</h6>
                            <ul className="list instafeed d-flex flex-wrap">
                                <li><img src="img/instagram/Image-01.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-02.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-03.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-04.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-05.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-06.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-07.jpg" alt=""></img></li>
                                <li><img src="img/instagram/Image-08.jpg" alt=""></img></li>
                            </ul>
                        </div>
                    </div>	
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget f_social_wd">
                            <h6 className="footer_title">Follow Us</h6>
                            <p>Let us be social</p>
                            <div className="f_social">
                            	<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-dribbble"></i></a>
								<a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>						
                </div>
                <div className="row footer-bottom d-flex justify-content-between align-items-center">
                    <p className="col-lg-12 footer-text text-center">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">1337</a>
</p>
                </div>
            </div>
        </footer>

      </div>
    )
  }
}


export default connect()(App);
