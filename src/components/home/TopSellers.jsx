import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'aos/dist/aos.css';

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTopSellers() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
    );
    setTopSellers(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTopSellers();
  }, []);

  function renderTopSellers() {
    return loading
      ? new Array(12).fill(0).map((_, index) => (
          <li key={index}>
            <div className="author_list_pp">
              <a href="/">
                <div
                  className="skeleton-box"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                ></div>
                <i className="fa fa-check"></i>
              </a>
            </div>
            <div className="author_list_info">
              <a href="/">
                <div
                  className="skeleton-box"
                  style={{ width: "100px", height: "20px" }}
                ></div>
              </a>
              <span>
                <div
                  className="skeleton-box"
                  style={{ width: "40px", height: "20px" }}
                ></div>
              </span>
            </div>
          </li>
        ))
      : topSellers.map((author, index) => (
          <li key={index}>
            <div className="author_list_pp">
              <Link to={`author/${author.authorId}`}>
                <img className="lazy pp-author" src={author.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <div className="author_list_info">
              <Link to={`author/${author.authorId}`}>{author.authorName}</Link>
              <span>{author.price} ETH</span>
            </div>
          </li>
        ));
  }

  return (
    <section id="section-popular" className="pb-5" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">{renderTopSellers()}</ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
