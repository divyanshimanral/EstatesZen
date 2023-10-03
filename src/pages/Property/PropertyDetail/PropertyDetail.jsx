import React from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiArrowsOutCardinalLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { PiBuildingsDuotone } from "react-icons/pi";
import "./propertyDetail.scss";
import { useGetPropertyByIdQuery } from "../../../utils/api";

const PropertyDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPropertyByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading property data: {error.message}</div>;
  }
  if (!data) {
    return <div>Property not found</div>;
  }

  const { name, location, roomNum, bed, bath, area, price, imgSrc, desc } =
    data.properties;

  return (
    <div className="propertyDetails">
      {data.properties ? (
        <div className="propertydetail-card">
          <div className="imgCont">
            <img src={imgSrc} />
          </div>
          <div className="description">
            <h2>{name}</h2>
            <div className="location">
              <CiLocationOn />
              <p>{location}</p>
            </div>
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
            </div>
            {desc && <p className="details">{desc}</p>}
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default PropertyDetail;
