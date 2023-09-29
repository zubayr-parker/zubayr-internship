  import React, { useEffect, useState } from "react";
  import NFTCardSkeleton from "../NFTCardSkeleton";
  import CountdownTimer from "../CountdownTimer";
  import { Link } from "react-router-dom";

  const AuthorItems = ({NFTs, loading, authorInfo}) => {
    function renderNFTs() {
      return loading
        ? new Array(8).fill(0).map((_, index) => (
            <div
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
              key={index}
            >
              <NFTCardSkeleton />
            </div>
          ))
        : NFTs.map((NFT, index) => (
          <div
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
              key={index}
            >

          <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to={`/author/${authorInfo.authorId}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Creator: Monica Lucas"
              >
              <img className="lazy" src={authorInfo.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          {NFT.expiryDate ? <CountdownTimer expiryDate={NFT.expiryDate} /> : null}

          <div className="nft__item_wrap">
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <Link to={`/item-details/${NFT.nftId}`}>
              <img src={NFT.nftImage} className="lazy nft__item_preview" alt="" />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to={`/item-details/${NFT.nftId}`}>
              <h4>{NFT.title}</h4>
            </Link>
            <div className="nft__item_price">{NFT.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{NFT.likes}</span>
            </div>
          </div>
        </div>    
              </div>
          ));
    }
    return (
      <div className="de_tab_content">
        <div className="tab-1">
          <div className="row">{renderNFTs()}</div>
        </div>
      </div>
    );
  };

  export default AuthorItems;
