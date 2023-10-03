import React, { useEffect, useState } from "react";
import "../../server";
import { Link, useSearchParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingsDuotone } from "react-icons/pi";
import { PiArrowsOutCardinalLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import "./property.scss";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [searchParams, setSearchParams] = useSearchParams();

  const nicheFilter = searchParams.get("niche");
  // console.log(nicheFilter)

  //   const filterBtns

  const loadMoreProperty = () => {
    setVisibleProperties((prevVisibleProperties) => prevVisibleProperties + 3);
  };
  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data.properties));
  }, []);

  // console.log(properties)
  const displayProperty = nicheFilter
    ? properties.filter(
        (property) => property.niche.toLowerCase() === nicheFilter
      )
    : properties;
  // console.log(displayProperty)

  const propertiesElt = displayProperty
    .slice(0, visibleProperties)
    .map((property) => (
      <Link
        to={`/properties/${property.id}`}
        className="card"
        key={property.id}
      >
        <div className="imgContainer">
          <img src={property.imgSrc} />
        </div>
        <div className="description">
          <div className="location">
            <CiLocationOn />
            <p>{property.location}</p>
          </div>
          <h3>{property.name}</h3>
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
            <Link>Read More</Link>
          </div>
        </div>
        <button className="heart">❤️</button>
        {property.forRent ? (
          <button className="rentCont">For Rent</button>
        ) : (
          <button className="rentCont">For Sale</button>
        )}
        {property.popular && <p className="popular">Popular</p>}
      </Link>
    ));
  return (
    <div className="property-wrapper">
      <h1 className="heading">Featured Listed Property</h1>
      <p className="para">
        Real estate can be bought, sold, leased, or rented, and can be a
        valuable investment opportunity. The value of the estate can be...
      </p>
      <div className="fltrBtns">
        <button
          onClick={() => setSearchParams({ niche: "nc" })}
          className={`${nicheFilter === "nc" && "active"}`}
        >
          New York
        </button>
        <button
          onClick={() => setSearchParams({ niche: "mumbai" })}
          className={`${nicheFilter === "mumbai" && "active"}`}
        >
          Mumbai
        </button>
        <button
          onClick={() => setSearchParams({ niche: "paris" })}
          className={`${nicheFilter === "paris" && "active"}`}
        >
          Paris
        </button>
        <button
          onClick={() => setSearchParams({ niche: "london" })}
          className={`${nicheFilter === "london" && "active"}`}
        >
          london
        </button>
        <button
          onClick={() => setSearchParams({})}
          className={`${nicheFilter === "" && "active"}`}
        >
          Show all
        </button>
      </div>
      <div className="properties">{propertiesElt}</div>
      {visibleProperties < properties.length && (
        <div className="btnCont">
          <button className="show-more" onClick={loadMoreProperty}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Property;
