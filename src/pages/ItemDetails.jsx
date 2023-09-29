import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";

const ItemDetails = () => {
  const [NFTInfo, setNFTInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const { nftId } = useParams();

  async function fetchNFTs() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
    );

    setNFTInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNFTs();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return loading ? (
<div id="wrapper">
  <div className="no-bottom no-top" id="content">
    <div id="top"></div>
    <section aria-label="section" className="mt90 sm-mt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div
              className="skeleton-box"
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
          <div className="col-md-6">
            <div className="item_info">
              <div
                className="skeleton-box"
                style={{ width: "300px", height: "40px" }}
              ></div>
              <div className="item_info_counts">
                <div
                  className="skeleton-box"
                  style={{ width: "80px", height: "30px" }}
                ></div>
                <div
                  className="skeleton-box"
                  style={{ width: "80px", height: "30px" }}
                ></div>
              </div>
              <div
                className="skeleton-box"
                style={{ width: "100%", height: "80px" }}
              ></div>
              <div className="d-flex flex-row">
                <div className="mr40">
                  <h6>Owner</h6>
                  <div className="item_author">
                    <div className="author_list_pp">
                      <div
                        className="skeleton-box"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                    <div className="author_list_info">
                      <div
                        className="skeleton-box"
                        style={{ width: "125px", height: "20px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="de_tab tab_simple">
                <div className="de_tab_content">
                  <h6>Creator</h6>
                  <div className="item_author">
                    <div className="author_list_pp">
                      <div
                        className="skeleton-box"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                    <div className="author_list_info">
                      <div
                        className="skeleton-box"
                        style={{ width: "125px", height: "20px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="spacer-40"></div>
                <h6>Price</h6>
                <div className="nft-item-price">
                  <div
                    className="skeleton-box"
                    style={{ width: "75px", height: "20px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

  ) : (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={NFTInfo.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    {NFTInfo.title} #{NFTInfo.tag}
                  </h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {NFTInfo.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {NFTInfo.likes}
                    </div>
                  </div>
                  <p>{NFTInfo.description}</p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${NFTInfo.ownerId}`}>
                            <img
                              className="lazy"
                              src={NFTInfo.ownerImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${NFTInfo.ownerId}`}>
                            {NFTInfo.ownerName}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${NFTInfo.creatorId}`}>
                            <img
                              className="lazy"
                              src={NFTInfo.creatorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${NFTInfo.creatorId}`}>
                            {NFTInfo.creatorName}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{NFTInfo.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
