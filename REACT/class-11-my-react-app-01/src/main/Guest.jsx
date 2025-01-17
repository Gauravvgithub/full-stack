import React from 'react'
import './guest.css';
import '/src/assets/frontSilder1.png';
import '/src/assets/frontSilder2.png';
import '/src/assets/frontSilder3.png';
import '/src/assets/mainLogo_11zon.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function Guest() {
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="src/assets/mainLogo_11zon.png" alt="Athlevo" width="30" height="24" className="d-inline-block     align-text-top"/>Athlevo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <form className="d-flex" >
            <input className="form-control me-3 bg-dark text-light border-light border border-3" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-light bg-dark border border-3" type="submit">Search</button>
          </form>
        </div>
      </div>
        <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"    aria-controls="offcanvasExample" style={{fontSize: "x-small"}}>Sign In</a>
<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Sign In</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    Join now! Create an account to unlock exclusive perks, explore opportunities, and start your personalized journey with just one click.
    </div>
    <div className="dropdown mt-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Sign In Now! &nbsp;
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#"><ion-icon name="logo-Google"/>&nbsp; &nbsp; Google</a></li>
        <li><a className="dropdown-item" href="#"><ion-icon name="logo-linkedin"/>&nbsp; &nbsp; Linkedin</a></li>
        <li><a className="dropdown-item" href="#"><ion-icon name="logo-Twitter"/>&nbsp; &nbsp; Twitter</a></li>
      </ul>
    </div>
  </div>
</div>
    </nav>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='/src/assets/frontSilder1.png' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='/src/assets/frontSilder2.png' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='/src/assets/frontSilder3.png' className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br />
<br />
<br />
<h2 style={{fontWeight: 'bolder' }}>Recent launch</h2>
<div className='cardDiv'>
<div className="card" style={{width: "18rem"}}>
  <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0507f937-dfee-410b-a951-b1ae18441244/WMNS+JORDAN+HEIR+SERIES+PF.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Jordan Heir Series PF</h5>
    <p className="card-text">Sustainable Materials <br />Women's Basketball Shoes</p>
    <p>MRP : ₹ 10,795.00</p>
    <a href="#" className="btn btn-dark">Add Cart</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6a98e6b-6727-4b87-aac2-d967eab7a532/NIKE+REACT+PEGASUS+TRAIL+4.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Jordan Heir Series PF</h5>
    <p className="card-text"> 'Her Collective' <br />Women's Basketball Shoes</p>
    <p>MRP : ₹ 13,955.00</p>
    <a href="#" className="btn btn-dark">Add Cart</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1bb6e31-13e8-47e5-8ba5-5151a11e8ed4/WMNS+JORDAN+HEIR+SERIES+PF.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nike Pegasus Trail 4</h5>
    <p className="card-text">Nike Pegasus Trail 4 <br />
    Men's Trail-Running Shoes</p>
    <p>MRP : ₹ 12,400.00</p>
    <a href="#" className="btn btn-dark">Add Cart</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/00996395-297b-4cb4-9c94-74423eee7ae3/custom-nike-pegasus-trail-5-by-you.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nike Pegasus 41</h5>
    <p className="card-text">Nike Pegasus 41 <br />Men's Road Running Shoes</p>
    <p>MRP : ₹ 16,955.00</p>
  <a href="#" className="btn btn-dark">Add Cart</a>
  </div>
</div>
</div>
<br />
<br />
<br />
<div className="card mb-5" style={{width: "100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png" className="img-fluid rounded-start" alt="offerImg"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Nike Alphafly 3 Premium</h5>
        <p className="card-text">Fine-tuned for marathon speed, the Alphafly 3 Premium helps push you beyond what you thought possible. Three innovative technologies power your run: a double dose of Air Zoom units helps launch you into your next step, a full-length carbon-fibre plate helps propel you forwards with ease and a heel-to-toe ZoomX foam midsole helps keep you fresh as you conquer your next race.
          <br />
          <br />
        <h5>Energy Return</h5>
        <p>Two forefoot Air Zoom units combine with ZoomX foam to store and return the energy back to you, powering every step.</p>

        <h5>Fire underfoot</h5>
        <p>A full-length carbon-fibre plate delivers a propulsive sensation that helps you smoothly transition through every stride and tackle turns with confidence.</p>

        <h5>What's new about the Alphafly 3?</h5>
        <p>The Alphafly 3 is our lightest Alphafly ever, featuring a slightly wider carbon-fibre plate for increased stability, a fully connected ZoomX foam midsole for smoother transitions and an all-new AtomKnit upper designed for improved multi-directional containment and breathability.</p>

        <h5>Product details</h5>
        <ul>
          <li>Weight: approx. 218g (men's size 9)</li>
          <li>Heel-to-toe drop: 8mm</li>
          <li>Not intended for use as personal protective equipment (PPE)</li>
          <li>Colour Shown: Light Army/Ironstone/Light Khaki/Desert Moss</li>
          <li>Style: HV4318-320</li>
          <li>Country/Region of Origin: India</li>
        </ul>
        </p>
        <p>MRP : ₹ 23,955.00</p>
        <a href="#" className="btn btn-dark">Add Cart</a>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<footer className='py-4 offset-1 '>
    <div className='row'>
      <div className='col-2'>
        <h5>Resources</h5>
        <ul className='nav flex-column'>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Find A Store</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Become A Member</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Send Us Feedback</a></li>
        </ul>
      </div>
      <div className='col-2'>
        <h5>Help</h5>
        <ul className='nav flex-column'>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Get Help</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Order Status</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Delivery</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Retures</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Payments Options</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Contact Us On All Other Inquiries</a></li>
        </ul>
      </div>
      <div className='col-2'>
        <h5>Company</h5>
        <ul className='nav flex-column'>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">About Athlevo</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">News</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Investors</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Sustainability</a></li>
          <li className='nav-item mb-2'><a href="#" className="nav-link p-0 text-muted">Report A Concern</a></li>
        </ul>
      </div>
      <div className="col-3 offset-2">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-dark" type="button"><a href="#" className="nav-link p-0 text-muted">Subscribe</a></button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
</footer>

</>
  )
}
