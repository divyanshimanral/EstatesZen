import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingsDuotone } from "react-icons/pi";
import { PiArrowsOutCardinalLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";

const Card = ({ data }) => {
  // console.log(data);
  const {
    id,
    location,
    name,
    roomNum,
    bed,
    bath,
    area,
    price,
    forRent,
    popular,
  } = data;

  return (
    <Link to='' className="card" key={id}>
      <div className="imgContainer">
        <img src={data.imgSrc} />
      </div>
      <div className="description">
        <div className="location">
          <CiLocationOn />
          <p>{location}</p>
        </div>
        <h3>{name}</h3>
        <div className="facilities flex">
          <div className="flex">
            <PiBuildingsDuotone />
            <p>{roomNum}Rooms</p>
          </div>
          <div className="flex">
            <LiaBedSolid />
            <p>{bed}Beds</p>
          </div>
          <div className="flex">
            <LiaBathSolid />
            <p>{bath}Bath</p>
          </div>
          <div className="flex">
            <PiArrowsOutCardinalLight />
            <p>{area}sft</p>
          </div>
        </div>
        <div className="flex last-section">
          <p>
            <span>${price}</span>/month
          </p>
          <Link>Read More</Link>
        </div>
      </div>
      <button className="heart">❤️</button>
      {forRent ? (
        <button className="rentCont">For Rent</button>
      ) : (
        <button className="rentCont">For Sale</button>
      )}
      {popular && <p className="popular">Popular</p>}
    </Link>
  );
};

export default Card;
