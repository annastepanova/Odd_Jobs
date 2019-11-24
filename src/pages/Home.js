import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-div1">
          <div className="div1-header">
            <h2>The spot to connect customers with contractors.</h2>
          </div>
          <div className="home-searchForm">
            <form action="#">
              <div className="home-searchInput">
                <input
                  type="text"
                  placeholder="What is your Odd Job?"
                  className="home-searchbar"
                />
                <button type="submit" className="home-searchbtn">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
            <div className="main-btns">
              <Link to="/services">
                <button className="hire-btn">Hire a Contractor</button>
              </Link>
              <button className="contractor-btn">Be a Contractor</button>
            </div>
          </div>
        </div>
        <div className="home-div2">
          <div className="div-header">
            <h2>Popular Odd Jobs</h2>
          </div>
          <div className="category-list">
            <div className="category1">
              <img src="cleaning tile.png" alt="cleaning" />
            </div>
            <div className="category2">
              <img src="home_repairs_tile.png" alt="repairs" />
            </div>
            <div className="category3">
              <img src="moving_tile.png" alt="moving" />
            </div>
            <div className="category4">
              <img src="house_painting_tile.png" alt="painting" />
            </div>
            <div className="category5">
              <img src="Electrical_tile.png" alt="electrical" />
            </div>
            <div className="category6">
              <img src="plumbing_tile.png" alt="plumbing" />
            </div>
          </div>
        </div>
        <div className="home-div3">
          <div className="div-header">
            <h2>Happy Clients</h2>
          </div>
          <div className="review-list">
            <div className="review1">
              <div className="review-main-img">
                <img
                  className="review-images"
                  src="BLOND WOMAN REVIEW.png"
                  alt="review1image"
                />
              </div>
              <div className="review-main-content-1">
                <img src="rating.svg" alt="rating" />
                <h4>Spring Cleaning</h4>
                <p>
                  “Seana Jones was terrific! Lorem dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incid”
                </p>
                <p>- Carole G.</p>
              </div>
            </div>
            <div className="review2">
              <div className="review-main-img">
                <img
                  className="review-images"
                  src="New dude review.png"
                  alt="review2image"
                />
              </div>
              <div className="review-main-content">
                <img src="rating.svg" alt="rating" />
                <h4>Cross town move</h4>
                <p>
                  “Ace Brothers were quick and efficient. Dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut “
                </p>
                <p>- Juan C.</p>
              </div>
            </div>
            <div className="review3">
              <div className="review-main-img">
                <img
                  className="review-images"
                  src="OLDER DUDE REVIEW.png"
                  alt="review3image"
                />
              </div>
              <div className="review-main-content">
                <img src="rating.svg" alt="rating" />
                <h4>Painted kitchen</h4>
                <p>
                  “Hector Diaz was reliable and is super detail oriented. Ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut! “
                </p>
                <p>- Nicolas C.</p>
              </div>
            </div>
            <div className="review4">
              <div className="review-main-img">
                <img
                  className="review-images"
                  src="IVY REVIEW.png"
                  alt="review4image"
                />
              </div>
              <div className="review-main-content">
                <img src="rating.svg" alt="rating" />
                <h4>Installed hurricane shutters</h4>
                <p>
                  “Dolores Hooper installed my shutters and went the extra mile
                  by marking them numerically so that it wouldn’t be so
                  confusing the next time it’s done.”
                </p>
                <p>- Ivy S.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-div4">
          <div className="div-header">
            <h2>Peace Of Mind</h2>
          </div>
          <div className="security-images">
            <img src="secure contractors.png" alt="securecontractorimg" />
            <img src="SSL encryption.png" alt="sslencryption" />
          </div>
        </div>
        <footer>
          <div>
            <p>Conditions of Use Privacy ©2019, Odd Jobs, Inc.</p>
          </div>
        </footer>
      </>
    );
  }
}
