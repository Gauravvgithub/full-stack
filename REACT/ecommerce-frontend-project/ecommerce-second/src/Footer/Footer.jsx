import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer className="py-4 offset-1 container card mb-5 text-wrap" style={{width: "6rem"}}>
        <div className="row text-wrap" style={{width: "6rem"}}>
          <div className="col-2 text-wrap" style={{width: "6rem"}}>
            <h5>Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Find A Store
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Become A Member
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Get Help
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Order Status
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Delivery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Retures
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Payments Options
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us On All Other Inquiries
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About Grabkart
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  News
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Investors
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Sustainability
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Report A Concern
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 offset-2 text-wrap" style={{width: "6rem"}}>
            <form>
              <h5 className="text-wrap" style={{width: "6rem"}}>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-secondary" type="button">
                  <a href="#" className="nav-link p-0 text-muted">
                    Subscribe
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
