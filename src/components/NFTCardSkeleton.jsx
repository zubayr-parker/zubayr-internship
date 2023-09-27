import React from 'react'

function NFTCardSkeleton({index}) {
  return (
    <div className="nft__item" key={index}>
            <div className="author_list_pp">
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Creator: Monica Lucas"
                href="/"
              >
                <div
                  className="skeleton-box"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                ></div>
                <i className="fa fa-check"></i>
              </a>
            </div>
            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <a href="/">
                <div
                  className="skeleton-box"
                  style={{ width: "100%", height: "350px" }}
                ></div>
              </a>
            </div>
            <div className="nft__item_info">
              <a href="/">
                <div
                  className="skeleton-box"
                  style={{ width: "180px", height: "30px" }}
                ></div>
              </a>
              <div
                className="skeleton-box"
                style={{ width: "100px", height: "20px" }}
              ></div>
            </div>
            <div className="nft__item_like">
              <div
                className="skeleton-box"
                style={{ width: "30px", height: "15px" }}
              ></div>
            </div>
          </div>
  )
}

export default NFTCardSkeleton