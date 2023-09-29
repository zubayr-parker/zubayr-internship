import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { Link, useParams } from "react-router-dom";
import AuthorItems from "../components/author/AuthorItems";
import axios from "axios";

const Author = () => {
  const [NFTs, setNFTs] = useState([]);
  const [authorInfo, setAuthorInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authorId } = useParams();

  async function fetchNFTs() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
    );

    setNFTs(data.nftCollection);
    setAuthorInfo(data);
    console.log(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNFTs();
  }, []);

  function increaseFollowers() {
    if (document.getElementById("follow-btn").innerHTML === "Follow") {
      authorInfo.followers += 1;
      document.querySelector(".profile_follower").innerHTML =
        authorInfo.followers + " followers";
      document.getElementById("follow-btn").innerHTML = "Unfollow";
    } else {
      authorInfo.followers -= 1;
      document.querySelector(".profile_follower").innerHTML =
        authorInfo.followers + " followers";
      document.getElementById("follow-btn").innerHTML = "Follow";
    }
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorInfo.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorInfo.authorName}
                          <span className="profile_username">
                            {authorInfo.tag}
                          </span>
                          <span id="wallet" className="profile_wallet">
                            {authorInfo.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {authorInfo.followers} followers
                      </div>
                      <Link
                        to="#"
                        className="btn-main"
                        id="follow-btn"
                        onClick={increaseFollowers}
                      >
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems
                    NFTs={NFTs}
                    loading={loading}
                    authorInfo={authorInfo}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
