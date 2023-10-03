import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonServer = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(4);

  const handleClick = () => {
    setItemsToShow(itemsToShow + 3);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3031/page${currentPage}`)
      .then((res) => {
        setData(res.data[0].countries.slice(0, itemsToShow));
      })
      .catch((err) => console.log(err));
  }, [currentPage, itemsToShow]);

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.views}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleClick}>Show more</button>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
};

export default JsonServer;
// json-server --watch db2.json --port 3031