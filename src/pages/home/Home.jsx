import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import Card from "../detail/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3031/page${currentPage}`)
      .then((res) => {
        setData(res.data[0].countries);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <div className="home-wrapper">
      <h1 className="heading">Featured Listed Property</h1>
      <p className="para">
        Real estate can be bought, sold, leased, or rented, and can be a
        valuable investment oppurtunity. The value of estate can be...
      </p>
      <div className="fltr-btns">
        <button className="active">London</button>
        <button>Paris</button>
        <button>Mumbai</button>
        <button>New York</button>
      </div>
      <div className="card-list">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <button className="show-more">Show More</button>
    </div>
  );
};

export default Home;
