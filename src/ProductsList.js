import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'



class ProductsList extends React.Component {
  render() {
    console.log(this.props.products);

    return (

        <section className="cat_product_area p_120">
        	<div className="container">
        		<div className="row flex-row-reverse">
        			<div className="col-lg-9">
        				<div className="product_top_bar">
        					<div className="left_dorp">
								<select className="sorting">
									<option value="1">Default sorting</option>
									<option value="2">Default sorting 01</option>
									<option value="4">Default sorting 02</option>
								</select>
								<select className="show">
									<option value="1">Show 12</option>
									<option value="2">Show 14</option>
									<option value="4">Show 16</option>
								</select>
        					</div>
        					<div className="right_page ml-auto">
								<nav className="cat_page" aria-label="Page navigation example">
									<ul className="pagination">
										<li className="page-item"><a className="page-link" href="#"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a></li>
										<li className="page-item active"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item blank"><a className="page-link" href="#">...</a></li>
										<li className="page-item"><a className="page-link" href="#">6</a></li>
										<li className="page-item"><a className="page-link" href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
									</ul>
								</nav>
        					</div>
        				</div>
        				<div className="latest_product_inner row">
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-1.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-2.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-3.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-4.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-5.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-6.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-7.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="f_p_item">
									<div className="f_p_img">
										<img className="img-fluid" src="img/product/feature-product/f-p-8.jpg" alt=""></img>
										<div className="p_icon">
											<a href="#"><i className="lnr lnr-heart"></i></a>
											<a href="#"><i className="lnr lnr-cart"></i></a>
										</div>
									</div>
									<a href="#"><h4>Long Sleeve TShirt</h4></a>
									<h5>$150.00</h5>
								</div>
							</div>
						</div>
        			</div>
        			<div className="col-lg-3">
        				<div className="left_sidebar_area">
        					<aside className="left_widgets cat_widgets">
        						<div className="l_w_title">
									<h3>Browse Categories</h3>
								</div>
        						<div className="widgets_inner">
									<ul className="list">
										<li><a href="#">Fruits and Vegetables</a></li>
										<li>
											<a href="#">Meat and Fish</a>
											<ul className="list">
												<li><a href="#">Frozen Fish</a></li>
												<li><a href="#">Dried Fish</a></li>
												<li><a href="#">Fresh Fish</a></li>
												<li><a href="#">Meat Alternatives</a></li>
												<li><a href="#">Meat</a></li>
											</ul>
										</li>
										<li><a href="#">Cooking</a>
											<ul className="list">
												<li><a href="#">Frozen Fish</a></li>
												<li><a href="#">Dried Fish</a></li>
												<li><a href="#">Fresh Fish</a></li>
												<li><a href="#">Meat Alternatives</a></li>
												<li><a href="#">Meat</a></li>
											</ul>
										</li>
										<li><a href="#">Beverages</a>
											<ul className="list">
												<li><a href="#">Frozen Fish</a></li>
												<li><a href="#">Dried Fish</a></li>
												<li><a href="#">Fresh Fish</a></li>
												<li><a href="#">Meat Alternatives</a></li>
												<li><a href="#">Meat</a></li>
											</ul>
										</li>
										<li><a href="#">Home and Cleaning</a></li>
									</ul>
        						</div>
        					</aside>
        					<aside className="left_widgets p_filter_widgets">
        						<div className="l_w_title">
									<h3>Product Filters</h3>
								</div>
        						<div className="widgets_inner">
        							<h4>Brand</h4>
									<ul className="list">
										<li><a href="#">Apple</a></li>
										<li><a href="#">Asus</a></li>
										<li className="active"><a href="#">Gionee</a></li>
										<li><a href="#">Micromax</a></li>
										<li><a href="#">Samsung</a></li>
									</ul>
        						</div>
        						<div className="widgets_inner">
        							<h4>Color</h4>
        							<ul className="list">
										<li><a href="#">Black</a></li>
										<li><a href="#">Black Leather</a></li>
										<li className="active"><a href="#">Black with red</a></li>
										<li><a href="#">Gold</a></li>
										<li><a href="#">Spacegrey</a></li>
									</ul>
        						</div>
        						<div className="widgets_inner">
        							<h4>Price</h4>
        							<div className="range_item">
        								<div id="slider-range"></div>
										<div className="row m0">
											<label for="amount">Price : </label>
  											<input type="text" id="amount" readOnly></input>
										</div>
									</div>
        						</div>
        					</aside>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
        
    );
  }
}

function mapStateToProps(state) {
  return {
    products: [...state.products]
  }
}

export default connect(
  mapStateToProps
)(ProductsList);

