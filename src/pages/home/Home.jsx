import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import Card from "../detail/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    axios
      .get(`http://localhost:3031/page${currentPage}`)
      .then((res) => {
        setData(res.data[0].countries);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  // Function to handle the "Show More" button click
  const handleShowMoreClick = () => {
    // Increment the display count by 3
    setDisplayCount(displayCount + 3);
  };

  return (
    <div className="home-wrapper">
      <h1 className="heading">Featured Listed Property</h1>
      <p className="para">
        Real estate can be bought, sold, leased, or rented, and can be a
        valuable investment opportunity. The value of the estate can be...
      </p>
      <div className="fltr-btns">
        <button className="active">London</button>
        <button>Paris</button>
        <button>Mumbai</button>
        <button>New York</button>
      </div>
      <div className="card-list">
        {data.slice(0, displayCount).map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      {displayCount < data.length && (
        <button className="show-more" onClick={handleShowMoreClick}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Home;
