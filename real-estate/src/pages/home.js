import React, { Component } from 'react';

class Home extends Component {

  render() {
    const background_1 = require('../images/hero_bg_1.jpg').default;

    return (
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <div className="site-background" style={{ backgroundImage: 'url(' + background_1 + ')' }}>
          <div className="site-navbar mt-4">
            <div className="container py-1">
              <div className="row align-items-center">
                <div className="col-8 col-md-8 col-lg-4">
                  <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0"><strong>Homeland<span className="text-danger">.</span></strong></a></h1>
                </div>
                <div className="col-4 col-md-4 col-lg-8">
                  <nav className="site-navigation text-right text-md-right" role="navigation">

                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li><a href="buy.html">Buy</a></li>
                      <li><a href="rent.html">Rent</a></li>
                      <li className="has-children">
                        <a href="properties.html">Properties</a>
                        <ul className="dropdown arrow-top">
                          <li><a href="#">Condo</a></li>
                          <li><a href="#">Property Land</a></li>
                          <li><a href="#">Commercial Building</a></li>
                          <li className="has-children">
                            <a href="#">Sub Menu</a>
                            <ul className="dropdown">
                              <li><a href="#">Menu One</a></li>
                              <li><a href="#">Menu Two</a></li>
                              <li><a href="#">Menu Three</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}

        <div className="site-section site-section-sm pb-0">
          <div className="container">
            <div className="row">
              <form className="form-search col-md-12"
                style={{ marginTop: "-100px" }}>
                <div className="row  align-items-end">
                  <div className="col-md-3">
                    <label htmlFor="list-types">Listing Types</label>
                    <div className="select-wrap">
                      <span className="icon icon-arrow_drop_down"></span>
                      <select name="list-types" id="list-types" className="form-control d-block rounded-0">
                        <option value="">Condo</option>
                        <option value="">Commercial Building</option>
                        <option value="">Land Property</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="offer-types">Offer Type</label>
                    <div className="select-wrap">
                      <span className="icon icon-arrow_drop_down"></span>
                      <select name="offer-types" id="offer-types" className="form-control d-block rounded-0">
                        <option value="">For Sale</option>
                        <option value="">For Rent</option>
                        <option value="">For Lease</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="select-city">Select City</label>
                    <div className="select-wrap">
                      <span className="icon icon-arrow_drop_down"></span>
                      <select name="select-city" id="select-city" className="form-control d-block rounded-0">
                        <option value="">New York</option>
                        <option value="">Brooklyn</option>
                        <option value="">London</option>
                        <option value="">Japan</option>
                        <option value="">Philippines</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Search" />
                  </div>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
                  <div className="mr-auto">
                    <a href="index.html" className="icon-view view-module active"><span className="icon-view_module"></span></a>
                    <a href="view-list.html" className="icon-view view-list"><span className="icon-view_list"></span></a>

                  </div>
                  <div className="ml-auto d-flex align-items-center">
                    <div>
                      <a href="#" className="view-list px-3 border-right active">All</a>
                      <a href="#" className="view-list px-3 border-right">Rent</a>
                      <a href="#" className="view-list px-3">Sale</a>
                    </div>


                    <div className="select-wrap">
                      <span className="icon icon-arrow_drop_down"></span>
                      <select className="form-control form-control-sm d-block rounded-0">
                        <option value="">Sort by</option>
                        <option value="">Price Ascending</option>
                        <option value="">Price Descending</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Box Property */}

        <div class="site-section site-section-sm bg-light">
          <div class="container">

            <div class="row mb-5">
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-danger">Sale</span>
                      <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">625 S. Berendo St</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">7,000</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-danger">Sale</span>
                      <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="images/img_2.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite active"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">871 Crenshaw Blvd</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">1,620</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-info">Lease</span>
                    </div>
                    <img src="images/img_3.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">853 S Lucerne Blvd</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">5,500</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-danger">Sale</span>
                      <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="images/img_4.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">625 S. Berendo St</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">7,000</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-danger">Sale</span>
                      <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="images/img_5.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">871 Crenshaw Blvd</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">1,620</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-info">Lease</span>
                    </div>
                    <img src="images/img_6.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">853 S Lucerne Blvd</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">5,500</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-danger">Sale</span>
                      <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="images/img_7.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">625 S. Berendo St</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">7,000</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-danger">Sale</span>
                      <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="images/img_8.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">871 Crenshaw Blvd</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">1,620</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="property-entry h-100">
                  <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                      <span class="offer-type bg-info">Lease</span>
                    </div>
                    <img src="images/img_1.jpg" alt="Image" class="img-fluid"/>
                  </a>
                  <div class="p-4 property-body">
                    <a href="#" class="property-favorite"><span class="icon-heart-o"></span></a>
                    <h2 class="property-title"><a href="property-details.html">853 S Lucerne Blvd</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">2 <sup>+</sup></span>

                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>

                      </li>
                      <li>
                        <span class="property-specs">SQ FT</span>
                        <span class="property-specs-number">5,500</span>

                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="site-pagination">
                  <a href="#" class="active">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <span>...</span>
                  <a href="#">10</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Home;