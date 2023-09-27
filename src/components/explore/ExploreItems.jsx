import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import CountdownTimer from "../CountdownTimer";
import NFTCard from "../NFTCard";
import NFTCardSkeleton from "../NFTCardSkeleton";

const ExploreItems = () => {
  const [NFTs, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleNFTs,setVisibleNFTs] = useState(8)

  async function fetchNFTs() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
    );
    setNFTs(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNFTs();
  }, []);

  function renderNFTs() {
    return loading
      ? new Array(8).fill(0).map((_, index) => (
          <div
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
            key={index}
          >
            <NFTCardSkeleton/>
          </div>
        ))
      : NFTs.map((NFT, index) => (
          <div
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
            key={index}
          >
            <NFTCard NFT={NFT} />
          </div>
        ));
  }

  function showMore() {
    setVisibleNFTs((prev)=>prev+4)
  }

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {renderNFTs().slice(0,visibleNFTs)}
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" onClick={showMore}>
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
