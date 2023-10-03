import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiArrowsOutCardinalLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { PiBuildingsDuotone } from "react-icons/pi";
import "./propertyDetail.scss";

const PropertyDetail = () => {
  const params = useParams();
  const [property, setProperty] = useState(null);
  //   console.log(params);
  useEffect(() => {
    fetch(`/api/properties/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data.properties));
  }, [params.id]);
  //   console.log(property);
  return (
    <div className="propertyDetails">
      {property ? (
        <div className="propertydetail-card">
          <div className="imgCont">
            <img src={property.imgSrc} />
          </div>
          <div className="description">
            <h2>{property.name}</h2>
            <div className="location">
              <CiLocationOn />
              <p>{property.location}</p>
            </div>
            <div className="facilities flex">
              <div className="flex">
                <PiBuildingsDuotone />
                <p>{property.roomNum}Rooms</p>
              </div>
              <div className="flex">
                <LiaBedSolid />
                <p>{property.bed}Beds</p>
              </div>
              <div className="flex">
                <LiaBathSolid />
                <p>{property.bath}Bath</p>
              </div>
              <div className="flex">
                <PiArrowsOutCardinalLight />
                <p>{property.area}sft</p>
              </div>
            </div>
            <div className="flex last-section">
              <p>
                <span>${property.price}</span>/month
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default PropertyDetail;
