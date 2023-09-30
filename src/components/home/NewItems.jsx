import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

import CountdownTimer from "../CountdownTimer";
import NFTCard from "../NFTCard";
import NFTCardSkeleton from "../NFTCardSkeleton";

const NewItems = () => {
  const [NFTs, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNFTs() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
    );
    setNFTs(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNFTs(); AOS.init()
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function renderNFTs() {
    return loading ? (
      <Slider {...settings}>
        {new Array(6).fill(0).map((_, index) => (
          <NFTCardSkeleton key={index}/>
        ))}
      </Slider>
    ) : (
      <Slider {...settings}>
        {NFTs.map((NFT) => (
          <NFTCard key={NFT.id} NFT={NFT}/>
        ))}
      </Slider>
    );
  }

  return (
    <section id="section-items" className="no-bottom" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {renderNFTs()}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
